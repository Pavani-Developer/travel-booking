<script lang="ts">
    import { packages, searchQuery } from "$lib/stores/travelStore";
    import { derived, writable } from "svelte/store";

    // Filter values
    let minPrice = writable(0);
    let maxPrice = writable(5000);
    let minDuration = writable(0);
    let maxDuration = writable(30); // Assuming duration is in days

    const currentPage = writable(1);
    const packagesPerPage = 6;

    // Filtered packages
    const filteredPackages = derived(
        [packages, searchQuery, minPrice, maxPrice, minDuration, maxDuration],
        ([
            $packages,
            $searchQuery,
            $minPrice,
            $maxPrice,
            $minDuration,
            $maxDuration,
        ]) =>
            $packages.filter((pkg) => {
                // Check name matches the search query
                const nameMatches = pkg.name
                    .toLowerCase()
                    .includes($searchQuery.toLowerCase());

                // Price filter logic
                const priceMatches =
                    pkg.price >= $minPrice && pkg.price <= $maxPrice;

                // Duration filter logic
                const durationMatches =
                    parseInt(pkg.duration) >= $minDuration &&
                    parseInt(pkg.duration) <= $maxDuration;

                // Apply all filters
                return nameMatches && priceMatches && durationMatches;
            }),
    );

    // Pagination logic
    const paginatedPackages = derived(
        [filteredPackages, currentPage],
        ([$filteredPackages, $currentPage]) => {
            const start = ($currentPage - 1) * packagesPerPage;
            const end = start + packagesPerPage;
            return $filteredPackages.slice(start, end);
        },
    );

    const totalPages = derived(filteredPackages, ($filteredPackages) => {
        return Math.ceil($filteredPackages.length / packagesPerPage);
    });

    const goToPage = (page: number) => {
        totalPages.subscribe(($totalPages) => {
            if (page >= 1 && page <= $totalPages) {
                currentPage.set(page);
            }
        });
    };
</script>

<div class="min-h-screen bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl font-bold text-white mb-8 text-center">
            Travel Booking Packages
        </h1>

        <!-- Search & Filters -->
        <div
            class="mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
            <!-- Search Input -->
            <input
                bind:value={$searchQuery}
                placeholder="Search..."
                class="border border-gray-300 rounded-lg p-3 w-full sm:w-96 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <!-- Price Range Inputs -->
            <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <div class="flex items-center gap-2">
                    <label for="minPrice" class="text-white"
                        >Min : ${$minPrice}</label
                    >
                    <input
                        type="range"
                        id="minPrice"
                        bind:value={$minPrice}
                        min="0"
                        max="5000"
                        class="w-full"
                    />
                </div>

                <div class="flex items-center gap-2">
                    <label for="maxPrice" class="text-white"
                        >Max : ${$maxPrice}</label
                    >
                    <input
                        type="range"
                        id="maxPrice"
                        bind:value={$maxPrice}
                        min="0"
                        max="5000"
                        class="w-full"
                    />
                </div>
            </div>

            <!-- Duration Range Inputs -->
            <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <div class="flex items-center gap-2">
                    <label for="minDuration" class="text-white"
                        >Min : {$minDuration} days</label
                    >
                    <input
                        type="range"
                        id="minDuration"
                        bind:value={$minDuration}
                        min="0"
                        max="30"
                        class="w-full"
                    />
                </div>

                <div class="flex items-center gap-2">
                    <label for="maxDuration" class="text-white"
                        >Max : {$maxDuration} days</label
                    >
                    <input
                        type="range"
                        id="maxDuration"
                        bind:value={$maxDuration}
                        min="0"
                        max="30"
                        class="w-full"
                    />
                </div>
            </div>
        </div>

        <!-- Package List -->
        <div class="relative grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {#each $paginatedPackages as pkg}
                <a
                    href={`/packages/${pkg.id}`}
                    class="group relative bg-white rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2"
                    style="box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); perspective: 1000px; transform-style: preserve-3d;"
                >
                    <!-- Main Card Content -->
                    <div class="relative">
                        <!-- Image Container -->
                        <div class="aspect-w-4 aspect-h-3">
                            <img
                                src={pkg.image}
                                alt={`Image of ${pkg.name}`}
                                class="w-full h-full object-cover"
                            />
                            <div
                                class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"
                            ></div>
                        </div>

                        <!-- White Info Box -->
                        <div
                            class="absolute bottom-0 left-0 right-0 bg-white p-6 transform translate-y-1/2 group-hover:translate-y-0 transition-transform duration-500"
                        >
                            <h2 class="text-xl font-bold text-gray-900 mb-2">
                                {pkg.name}
                            </h2>
                            <p class="text-gray-600">{pkg.destination}</p>
                            <div class="mt-4 flex justify-between items-center">
                                <p class="text-[#182978] font-semibold">
                                    ${pkg.price}
                                </p>
                                <button
                                    class="bg-[#182978] text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    >See More</button
                                >
                            </div>
                        </div>
                    </div>
                </a>
            {/each}
        </div>

        <!-- Pagination Controls -->
        <div class="flex justify-center gap-4 mt-20">
            <button
                class="bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                on:click={() => goToPage($currentPage - 1)}
                disabled={$currentPage === 1}
            >
                Previous
            </button>

            <span class="self-center text-gray-600 text-lg">
                {$currentPage} / {$totalPages}
            </span>

            <button
                class="bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                on:click={() => goToPage($currentPage + 1)}
                disabled={$currentPage === $totalPages}
            >
                Next
            </button>
        </div>
    </div>
</div>

<style>
    .aspect-w-4 {
        position: relative;
        padding-bottom: 75%; /* 4:3 aspect ratio */
    }
    .aspect-w-4 > * {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
</style>
