<script lang="ts">
    import { page } from "$app/stores";
    
  
    let id = +$page.params.id;
    let name = "";
    let email = "";
    let travelers = 1;
  
    function submitBooking() {
      alert(`Booking confirmed for ${name}!`);
    }
</script>

<div class="min-h-screen bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
  <div class="max-w-3xl mx-auto">
    <h1 class="text-4xl font-bold text-center text-white mb-8">Book Your Trip</h1>

    <!-- Booking Form -->
    <form 
      on:submit|preventDefault={submitBooking} 
      class="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl p-5 md:p-12 w-150"
    >
      <div class="space-y-8">
        <!-- Name Input -->
        <div class="relative">
          <label for="name" class="block text-lg font-medium text-gray-200 mb-3">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            bind:value={name}
            placeholder="Enter your full name"
            class="w-full bg-white/5 border-2 border-white/10 rounded-xl p-4 text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            required
          />
        </div>

        <!-- Email Input -->
        <div class="relative">
          <label for="email" class="block text-lg font-medium text-gray-200 mb-3">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            bind:value={email}
            placeholder="Enter your email"
            class="w-full bg-white/5 border-2 border-white/10 rounded-xl p-4 text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            required
          />
        </div>

        <!-- Number of Travelers Input -->
        <div class="relative">
          <label for="travelers" class="block text-lg font-medium text-gray-200 mb-3">
            Number of Travelers
          </label>
          <input
            type="number"
            id="travelers"
            bind:value={travelers}
            min="1"
            class="w-full bg-white/5 border-2 border-white/10 rounded-xl p-4 text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            required
          />
        </div>

        <!-- Submit Button -->
        <div class="pt-4">
          <button
            type="submit"
            class="w-full bg-blue-600 text-white text-lg font-semibold py-4 px-6 rounded-xl shadow-lg hover:bg-blue-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-900"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </form>

    <!-- Back Button -->
    <div class="mt-6 text-center">
      <a 
        href="/" 
        class="inline-flex items-center text-gray-300 hover:text-white transition-colors"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Return to Packages
      </a>
    </div>
  </div>

  <!-- Decorative Elements -->
  <div class="absolute top-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
  <div class="absolute bottom-20 left-20 w-40 h-40 bg-blue-300/10 rounded-full blur-3xl"></div>
</div>