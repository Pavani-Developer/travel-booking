<script lang="ts">
    import { page } from "$app/stores";

    // id is a number, but image should be a string (URL of the image)
    let id = +$page.params.id; // + will convert the id to a number
    let image = decodeURIComponent($page.params.image); // image is a URL, so use decodeURIComponent

    let name = "";
    let email = "";
    let travelers = 1;
    let phone = "";
    let departureDate = "";
    let returnDate = "";
    let specialRequests = "";

    function submitBooking() {
        alert(`Booking confirmed for ${name}!`);
    }
</script>

<div class="min-h-screen bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl font-bold text-center text-white mb-12">
            Book Your Trip
        </h1>

        <div class="flex flex-col lg:flex-row gap-8 items-start">
            <!-- Image Section -->
            <div class="lg:w-1/2">
                <div class="relative rounded-2xl overflow-hidden h-[600px]">
                    <img
                        src="https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg"
                        alt="Destination"
                        class="w-full h-full object-cover"
                    />
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"
                    >
                        <div class="absolute bottom-0 left-0 p-8">
                            <h2 class="text-3xl font-bold text-white mb-2">
                                Adventure Awaits
                            </h2>
                            <p class="text-gray-200">
                                Experience the journey of a lifetime
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Booking Form -->
            <form
                on:submit|preventDefault={submitBooking}
                class="lg:w-1/2 bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl p-5 md:p-8 mx-auto"
            >
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <!-- Name Input -->
                    <div class="relative sm:col-span-2">
                        <label
                            for="name"
                            class="block text-lg font-medium text-gray-200 mb-3"
                        >
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
                        <label
                            for="email"
                            class="block text-lg font-medium text-gray-200 mb-3"
                        >
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

                    <!-- Phone Input -->
                    <div class="relative">
                        <label
                            for="phone"
                            class="block text-lg font-medium text-gray-200 mb-3"
                        >
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            bind:value={phone}
                            placeholder="Enter your phone number"
                            class="w-full bg-white/5 border-2 border-white/10 rounded-xl p-4 text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            required
                        />
                    </div>

                    <!-- Departure Date -->
                    <div class="relative">
                        <label
                            for="departureDate"
                            class="block text-lg font-medium text-gray-200 mb-3"
                        >
                            Departure Date
                        </label>
                        <input
                            type="date"
                            id="departureDate"
                            bind:value={departureDate}
                            class="w-full bg-white/5 border-2 border-white/10 rounded-xl p-4 text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            required
                        />
                    </div>

                    <!-- Return Date -->
                    <div class="relative">
                        <label
                            for="returnDate"
                            class="block text-lg font-medium text-gray-200 mb-3"
                        >
                            Return Date
                        </label>
                        <input
                            type="date"
                            id="returnDate"
                            bind:value={returnDate}
                            class="w-full bg-white/5 border-2 border-white/10 rounded-xl p-4 text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            required
                        />
                    </div>

                    <!-- Number of Travelers Input -->
                    <div class="relative">
                        <label
                            for="travelers"
                            class="block text-lg font-medium text-gray-200 mb-3"
                        >
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
                    <div class="sm:col-span-2 pt-4">
                        <button
                            type="submit"
                            class="w-full bg-blue-600 text-white text-lg font-semibold py-4 px-6 rounded-xl shadow-lg hover:bg-blue-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-900"
                        >
                            Confirm Booking
                        </button>
                    </div>
                </div>
            </form>
        </div>

        <!-- Back Button -->
        <div class="mt-6 text-center">
            <a
                href="/"
                class="inline-flex items-center text-gray-300 hover:text-white transition-colors"
            >
                <svg
                    class="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                </svg>
                Return to Packages
            </a>
        </div>
    </div>

    <!-- Decorative Elements -->
    <div
        class="absolute top-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"
    ></div>
    <div
        class="absolute bottom-20 left-20 w-40 h-40 bg-blue-300/10 rounded-full blur-3xl"
    ></div>
</div>
