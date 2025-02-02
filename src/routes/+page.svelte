<script lang="ts">
    import { packages, searchQuery } from "$lib/stores/travelStore";
    import { derived, writable } from "svelte/store";

    let minPrice = writable(0);
    let maxPrice = writable(5000);
    let minDuration = writable(0);
    let maxDuration = writable(30);

    const currentPage = writable(1);
    const packagesPerPage = 8;  // Increased to show more items per row

    const filteredPackages = derived(
        [packages, searchQuery, minPrice, maxPrice, minDuration, maxDuration],
        ([$packages, $searchQuery, $minPrice, $maxPrice, $minDuration, $maxDuration]) =>
            $packages.filter((pkg) => {
                const nameMatches = pkg.name.toLowerCase().includes($searchQuery.toLowerCase());
                const priceMatches = pkg.price >= $minPrice && pkg.price <= $maxPrice;
                const durationMatches = parseInt(pkg.duration) >= $minDuration && parseInt(pkg.duration) <= $maxDuration;
                return nameMatches && priceMatches && durationMatches;
            }),
    );

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

<div class="min-h-screen bg-slate-900">
    <!-- Header with Search -->
    <header class="border-b">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div class="flex items-center justify-between">
                <h1 class="text-2xl font-bold text-white">
                    Travel Packages
                </h1>
                
                <!-- Search Bar -->
                <div class="flex items-center gap-4">
                    <div class="relative w-full sm:w-72 md:w-96">
                      <input
                        bind:value={$searchQuery}
                        placeholder="Search"
                        class="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-[#182978] focus:border-transparent"
                      />
                      <button class="absolute right-3 top-1/2 -translate-y-1/2" aria-label="Search">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
            </div>
        </div>
    </header>

    <!-- Filters Bar -->
    <div class="border-b bg-slate-900 sticky top-0 z-10 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div class="flex items-center gap-8 overflow-x-auto">
                <!-- Price Filter -->
                <div class="flex items-center gap-2 min-w-fit">
                    <span class="text-sm font-medium">Price Range:</span>
                    <input
                        type="range"
                        bind:value={$minPrice}
                        min="0"
                        max="5000"
                        class="w-24"
                    />
                    <span class="text-sm">${$minPrice} - ${$maxPrice}</span>
                    <input
                        type="range"
                        bind:value={$maxPrice}
                        min="0"
                        max="5000"
                        class="w-24"
                    />
                </div>

                <!-- Duration Filter -->
                <div class="flex items-center gap-2 min-w-fit">
                    <span class="text-sm font-medium">Duration:</span>
                    <input
                        type="range"
                        bind:value={$minDuration}
                        min="0"
                        max="30"
                        class="w-24"
                    />
                    <span class="text-sm">{$minDuration} - {$maxDuration} days</span>
                    <input
                        type="range"
                        bind:value={$maxDuration}
                        min="0"
                        max="30"
                        class="w-24"
                    />
                </div>
            </div>
        </div>
    </div>

    <!-- Package Grid -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {#each $paginatedPackages as pkg}
                <a href={`/packages/${pkg.id}`} class="group block">
                    <div class="relative aspect-w-16 aspect-h-9 mb-2 rounded-xl overflow-hidden">
                        <img
                            src={pkg.image}
                            alt={pkg.name}
                            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <button class="absolute top-3 right-3 p-2 rounded-full" aria-label="Add to favorites">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                    </div>
                    <div class="space-y-1">
                        <div class="flex justify-between">
                            <h3 class="font-medium text-white">{pkg.destination}</h3>
                            <div class="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="white" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                </svg>
                                <span class="text-white">4.9</span>
                            </div>
                        </div>
                        <p class="text-white">{pkg.duration} days experience</p>
                        <p class="text-white">Available from {new Date().toLocaleDateString()}</p>
                        <p class="font-semibold text-white">${pkg.price} per person</p>
                    </div>
                </a>
            {/each}
        </div>
        </main>


    
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



<style>
    .aspect-w-16 {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 aspect ratio */
    }
    
    .aspect-w-16 > * {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
</style>