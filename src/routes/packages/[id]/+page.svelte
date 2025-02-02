<script lang="ts">
    import Header from "../../Header.svelte";
    import { selectedPackage } from "$lib/stores/travelStore"; // Import the store

    export let data;
    const { selectedPackage: initialSelectedPackage } = data;

    // Set the selected package in the store
    const setPackage = () => {
        selectedPackage.set(initialSelectedPackage);
    };
      

</script>

{#if initialSelectedPackage}
    <Header />

    <div class="min-h-screen bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Left Section (Image) -->
                <div class="relative rounded-xl overflow-hidden shadow-lg">
                    <img
                        src={initialSelectedPackage.image}
                        alt={`Image of ${initialSelectedPackage.name}`}
                        class="w-full h-[450px] object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>

                <!-- Right Section (Details) -->
                <div class="space-y-6 bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md">
                    <h1 class="text-3xl font-bold text-white">
                        {initialSelectedPackage.name}
                    </h1>
                    <p class="text-lg text-gray-300">
                        {initialSelectedPackage.destination}
                    </p>
                    <p class="text-gray-400">{initialSelectedPackage.description}</p>

                    <div class="grid grid-cols-2 gap-6">
                        <div class="bg-white/5 p-4 rounded-lg">
                            <p class="text-sm text-white">Duration</p>
                            <p class="text-white text-lg font-semibold">
                                {initialSelectedPackage.duration} days
                            </p>
                        </div>
                        <div class="bg-white/5 p-4 rounded-lg">
                            <p class="text-sm text-white">Price</p>
                            <p class="text-white text-2xl font-bold">
                                ${initialSelectedPackage.price}
                            </p>
                        </div>
                    </div>

                    <div class="mt-6 flex gap-4">
                        <a
                            href={`/booking/${initialSelectedPackage.id}`}
                            on:click={setPackage}
                            class="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-transform transform hover:-translate-y-1 shadow-lg"
                        >
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
{:else}
    <div class="min-h-screen flex items-center justify-center bg-slate-900">
        <div class="p-6 bg-white/10 rounded-lg text-center shadow-lg">
            <p class="text-xl text-red-400 font-semibold">Package not found!</p>
            <a
                href="/"
                class="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
                Return Home
            </a>
        </div>
    </div>
{/if}
