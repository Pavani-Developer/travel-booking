<script lang="ts">
    export let data;
    const { selectedPackage } = data;
    
</script>

{#if selectedPackage}
  <div class="min-h-screen bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Package Details Section -->
      <div class="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl">
        <div class="flex flex-col lg:flex-row">
          <!-- Left Section (Image) -->
          <div class="lg:w-1/2 relative">
            <img 
              src={selectedPackage.image} 
              alt={`Image of ${selectedPackage.name}`} 
              class="w-full h-[500px] object-cover"
            >
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent lg:bg-gradient-to-b"></div>
            
            <!-- Mobile Title (visible on small screens) -->
            <div class="lg:hidden absolute bottom-0 left-0 right-0 p-6 text-white">
              <h1 class="text-4xl font-bold mb-2">{selectedPackage.name}</h1>
              <p class="text-xl text-gray-200">{selectedPackage.destination}</p>
            </div>
          </div>

          <!-- Right Section (Details) -->
          <div class="lg:w-1/2 p-8 lg:p-12 bg-white/10 backdrop-blur-lg">
            <!-- Desktop Title (hidden on small screens) -->
            <div class="hidden lg:block">
              <h1 class="text-4xl font-bold text-white mb-4">{selectedPackage.name}</h1>
              <p class="text-xl text-gray-200 mb-6">{selectedPackage.destination}</p>
            </div>

            <!-- Description -->
            <p class="text-lg text-gray-300 mb-8">{selectedPackage.description}</p>

            <!-- Details Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div class="bg-white/5 rounded-xl p-6 backdrop-blur-lg">
                <p class="text-white text-sm mb-1">Duration</p>
                <p class="text-[#182978] text-lg font-semibold">{selectedPackage.duration}</p>
              </div>
              <div class="bg-white/5 rounded-xl p-6 backdrop-blur-lg">
                <p class="text-white text-sm mb-1">Price</p>
                <p class="text-[#182978] text-2xl font-bold">${selectedPackage.price}</p>
              </div>
            </div>

            <!-- Booking Button -->
            <div class="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href={`/booking/${selectedPackage.id}`} 
                class="inline-flex justify-center items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Book Now
              </a>
              <!-- <button 
                class="inline-flex justify-center items-center px-8 py-4 bg-white/10 text-white text-lg font-semibold rounded-xl hover:bg-white/20 transform transition-all duration-300 hover:-translate-y-1"
              >
                View Details
              </button> -->
            </div>
          </div>
        </div>
      </div>

      <!-- Decorative Elements -->
      <div class="absolute top-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
      <div class="absolute bottom-20 left-20 w-40 h-40 bg-blue-300/10 rounded-full blur-3xl"></div>
    </div>
  </div>
{:else}
  <div class="min-h-screen bg-blue-900 flex items-center justify-center px-4">
    <div class="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
      <p class="text-2xl text-red-400 font-semibold">Package not found!</p>
      <a 
        href="/" 
        class="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Return Home
      </a>
    </div>
  </div>
{/if}