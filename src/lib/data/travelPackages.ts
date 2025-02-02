export type Package = {
    id: number;
    name: string;
    image: string;
    destination: string;
    price: number;
    duration: string;
    description: string;
    itinerary: string[];
  };
  

export const travelPackages: Package[] = [
    {
      id: 1,
      name: "Weekend in Paris",
      image: "../../../images/weekendInParis.jpg",
      destination: "Paris, France",
      price: 500,
      duration: "3 days",
      description: "Explore the city of lights on a short but unforgettable weekend getaway. Wander through charming streets, admire iconic landmarks, and indulge in delicious French cuisine. Whether you're a history enthusiast, an art lover, or just seeking the perfect Parisian experience, this trip offers it all.",
      itinerary: ["Day 1: Eiffel Tower", "Day 2: Louvre Museum"]
    },
    {
      id: 2,
      name: "Safari in Kenya",
      image: "../../../images/safariInKenya.jpg",
      destination: "Nairobi, Kenya",
      price: 1500,
      duration: "7 days",
      description: "Experience the wildlife safari on a short but unforgettable weekend getaway. Wander through charming streets, admire iconic landmarks, and indulge in delicious French cuisine. Whether you're a history enthusiast, an art lover, or just seeking the perfect Parisian experience, this trip offers it all.",
      itinerary: ["Day 1: Arrival in Nairobi", "Day 2: Masai Mara Safari"]
    },
    {
      id: 3,
      name: "Tokyo Adventure",
      image: "../../../images/TokyoAdventure.jpg",
      destination: "Tokyo, Japan",
      price: 1200,
      duration: "5 days",
      description: "Discover the hustle and bustle of Tokyo on a short but unforgettable weekend getaway. Wander through charming streets, admire iconic landmarks, and indulge in delicious French cuisine. Whether you're a history enthusiast, an art lover, or just seeking the perfect Parisian experience, this trip offers it all.",
      itinerary: ["Day 1: Shibuya Crossing", "Day 2: Tokyo Disneyland"]
    },
    {
      id: 4,
      name: "Mediterranean Cruise",
      image: "../../../images/MediterraneanCruise.jpg",
      destination: "Mediterranean Sea",
      price: 2500,
      duration: "10 days",
      description: "Set sail across the Mediterranean on a short but unforgettable weekend getaway. Wander through charming streets, admire iconic landmarks, and indulge in delicious French cuisine. Whether you're a history enthusiast, an art lover, or just seeking the perfect Parisian experience, this trip offers it all.",
      itinerary: ["Day 1: Barcelona", "Day 2: Rome"]
    },
    {
      id: 5,
      name: "Trekking in Nepal",
      image: "../../../images/trekkingInNepal.jpg",
      destination: "Nepal",
      price: 2000,
      duration: "10 days",
      description: "Embark on a trek through the Himalayas on a short but unforgettable weekend getaway. Wander through charming streets, admire iconic landmarks, and indulge in delicious French cuisine. Whether you're a history enthusiast, an art lover, or just seeking the perfect Parisian experience, this trip offers it all.",
      itinerary: ["Day 1: Arrival in Kathmandu", "Day 2: Start Trekking"]
    },
    {
      id: 6,
      name: "New York City Break",
      image: "../../../images/newYorkCityBreak.jpg",
      destination: "New York, USA",
      price: 700,
      duration: "4 days",
      description: "Experience the sights of NYC on a short but unforgettable weekend getaway. Wander through charming streets, admire iconic landmarks, and indulge in delicious French cuisine. Whether you're a history enthusiast, an art lover, or just seeking the perfect Parisian experience, this trip offers it all.",
      itinerary: ["Day 1: Times Square", "Day 2: Statue of Liberty"]
    },
    {
      id: 7,
      name: "Beach Vacation in Bali",
      image: "../../../images/VacationInBali.jpg",
      destination: "Bali, Indonesia",
      price: 1200,
      duration: "6 days",
      description: "Relax on the beaches of Bali on a short but unforgettable weekend getaway. Wander through charming streets, admire iconic landmarks, and indulge in delicious French cuisine. Whether you're a history enthusiast, an art lover, or just seeking the perfect Parisian experience, this trip offers it all.",
      itinerary: ["Day 1: Arrival in Bali", "Day 2: Beach Day"]
    },
    {
      id: 8,
      name: "Cultural Tour in Egypt",
      image: "../../../images/CulturalTourInEgypt.jpg",
      destination: "Cairo, Egypt",
      price: 1500,
      duration: "5 days",
      description: "Explore the pyramids and ancient ruins on a short but unforgettable weekend getaway. Wander through charming streets, admire iconic landmarks, and indulge in delicious French cuisine. Whether you're a history enthusiast, an art lover, or just seeking the perfect Parisian experience, this trip offers it all.",
      itinerary: ["Day 1: Pyramids of Giza", "Day 2: Egyptian Museum"]
    },
    {
      id: 9,
      name: "Swiss Alps Adventure",
      image: "../../../images/SwissAlpsAdventure.jpg",
      destination: "Switzerland",
      price: 2200,
      duration: "7 days",
      description: "Ski and explore the Swiss Alps on a short but unforgettable weekend getaway. Wander through charming streets, admire iconic landmarks, and indulge in delicious French cuisine. Whether you're a history enthusiast, an art lover, or just seeking the perfect Parisian experience, this trip offers it all.",
      itinerary: ["Day 1: Zurich", "Day 2: Interlaken"]
    },
    {
      id: 10,
      name: "Greek Islands Escape",
      image: "../../../images/GreekIslandsEscape.jpg",
      destination: "Santorini, Greece",
      price: 1800,
      duration: "5 days",
      description: "Enjoy the beauty of the Greek islands on a short but unforgettable weekend getaway. Wander through charming streets, admire iconic landmarks, and indulge in delicious French cuisine. Whether you're a history enthusiast, an art lover, or just seeking the perfect Parisian experience, this trip offers it all.",
      itinerary: ["Day 1: Arrival in Santorini", "Day 2: Explore Oia"]
    },
    {
      id: 11,
      name: "Australian Outback",
      image: "../../../images/AustralianOutback.jpg",
      destination: "Australia",
      price: 3000,
      duration: "10 days",
      description: "Explore the vast Australian Outback on a short but unforgettable weekend getaway. Wander through charming streets, admire iconic landmarks, and indulge in delicious French cuisine. Whether you're a history enthusiast, an art lover, or just seeking the perfect Parisian experience, this trip offers it all.",
      itinerary: ["Day 1: Arrival in Alice Springs", "Day 2: Uluru"]
    },
    {
      id: 12,
      name: "Paris Fashion Week",
      image: "../../../images/ParisFashionWeek.jpg",
      destination: "Paris, France",
      price: 2500,
      duration: "4 days",
      description: "Attend Paris Fashion Week events on a short but unforgettable weekend getaway. Wander through charming streets, admire iconic landmarks, and indulge in delicious French cuisine. Whether you're a history enthusiast, an art lover, or just seeking the perfect Parisian experience, this trip offers it all.",
      itinerary: ["Day 1: Fashion Show", "Day 2: Designer Shops"]
    },
    {
      id: 13,
      name: "Wildlife in Tanzania",
      image: "../../../images/WildLifeInTanzania.jpg",
      destination: "Serengeti, Tanzania",
      price: 2200,
      duration: "8 days",
      description: "Witness the great migration on a short but unforgettable weekend getaway. Wander through charming streets, admire iconic landmarks, and indulge in delicious French cuisine. Whether you're a history enthusiast, an art lover, or just seeking the perfect Parisian experience, this trip offers it all.",
      itinerary: ["Day 1: Serengeti Safari", "Day 2: Ngorongoro Crater"]
    },
    {
      id: 14,
      name: "Northern Lights in Iceland",
      image: "../../../images/NorthernLightInIceLand.png",
      destination: "Reykjavik, Iceland",
      price: 1700,
      duration: "6 days",
      description: "Chase the Northern Lights in Iceland on a short but unforgettable weekend getaway. Wander through charming streets, admire iconic landmarks, and indulge in delicious French cuisine. Whether you're a history enthusiast, an art lover, or just seeking the perfect Parisian experience, this trip offers it all.",
      itinerary: ["Day 1: Reykjavik", "Day 2: Blue Lagoon"]
    },
    {
      id: 15,
      name: "Amazon Jungle Tour",
      image: "../../../images/AmazonJungleTour.png",
      destination: "Amazon, Brazil",
      price: 3000,
      duration: "7 days",
      description: "Explore the heart of the Amazon rainforest on a short but unforgettable weekend getaway. Wander through charming streets, admire iconic landmarks, and indulge in delicious French cuisine. Whether you're a history enthusiast, an art lover, or just seeking the perfect Parisian experience, this trip offers it all.",
      itinerary: ["Day 1: Arrival in Manaus", "Day 2: Amazon Boat Tour"]
    },
    {
      id: 16,
      name: "Venetian Getaway",
      image: "../../../images/VenetianGetaway.png",
      destination: "Venice, Italy",
      price: 1300,
      duration: "4 days",
      description: "Explore the canals and gondolas of Venice on a short but unforgettable weekend getaway. Wander through charming streets, admire iconic landmarks, and indulge in delicious French cuisine. Whether you're a history enthusiast, an art lover, or just seeking the perfect Parisian experience, this trip offers it all.",
      itinerary: ["Day 1: St. Mark's Square", "Day 2: Gondola Ride"]
    },
    {
      id: 17,
      name: "Caribbean Paradise",
      image: "../../../images/CaribbeanParadise.png",
      destination: "Caribbean",
      price: 2500,
      duration: "7 days",
      description: "Relax on beautiful Caribbean beaches on a short but unforgettable weekend getaway. Wander through charming streets, admire iconic landmarks, and indulge in delicious French cuisine. Whether you're a history enthusiast, an art lover, or just seeking the perfect Parisian experience, this trip offers it all.",
      itinerary: ["Day 1: Arrival in Barbados", "Day 2: Beach Day"]
    },
    {
      id: 18,
      name: "Hong Kong Adventure",
      image: "../../../images/HongKongAdventure.png",
      destination: "Hong Kong",
      price: 1100,
      duration: "5 days",
      description: "Explore the bustling streets of Hong Kong on a short but unforgettable weekend getaway. Wander through charming streets, admire iconic landmarks, and indulge in delicious French cuisine. Whether you're a history enthusiast, an art lover, or just seeking the perfect Parisian experience, this trip offers it all.",
      itinerary: ["Day 1: Victoria Peak", "Day 2: Temple Street Night Market"]
    },
    {
      id: 19,
      name: "Machu Picchu Expedition",
      image: "../../../images/MachuPicchuExpedition.png",
      destination: "Machu Picchu, Peru",
      price: 2000,
      duration: "6 days",
      description: "Hike to the ancient Inca city on a short but unforgettable weekend getaway. Wander through charming streets, admire iconic landmarks, and indulge in delicious French cuisine. Whether you're a history enthusiast, an art lover, or just seeking the perfect Parisian experience, this trip offers it all.",
      itinerary: ["Day 1: Arrival in Cusco", "Day 2: Machu Picchu Trek"]
    },
    {
      id: 20,
      name: "South Africa Tour",
      image: "../../../images/SouthAfricaTour.png",
      destination: "Cape Town, South Africa",
      price: 2300,
      duration: "8 days",
      description: "Visit South Africa's beautiful coast and wildlife on a short but unforgettable weekend getaway. Wander through charming streets, admire iconic landmarks, and indulge in delicious French cuisine. Whether you're a history enthusiast, an art lover, or just seeking the perfect Parisian experience, this trip offers it all.",
      itinerary: ["Day 1: Cape Town", "Day 2: Safari at Kruger Park"]
    },
    {
      id: 21,
      name: "Rome & Vatican City",
      image: "../../../images/RomeVaticanCity.png",
      destination: "Rome, Italy",
      price: 1200,
      duration: "5 days",
      description: "Explore the history of Rome and the Vatican on a short but unforgettable weekend getaway. Wander through charming streets, admire iconic landmarks, and indulge in delicious French cuisine. Whether you're a history enthusiast, an art lover, or just seeking the perfect Parisian experience, this trip offers it all.",
      itinerary: ["Day 1: Colosseum", "Day 2: Vatican Museums"]
    },
    {
      id: 22,
      name: "Dubai Luxury Tour",
      image: "../../../images/DubaiLuxuryTour.png",
      destination: "Dubai, UAE",
      price: 3500,
      duration: "6 days",
      description: "Stay in luxury hotels and experience Dubai on a short but unforgettable weekend getaway. Wander through charming streets, admire iconic landmarks, and indulge in delicious French cuisine. Whether you're a history enthusiast, an art lover, or just seeking the perfect Parisian experience, this trip offers it all.",
      itinerary: ["Day 1: Burj Khalifa", "Day 2: Desert Safari"]
    },
    {
      id: 23,
      name: "Canadian Rockies",
      image: "../../../images/CanadianRockies.png",
      destination: "Banff, Canada",
      price: 1800,
      duration: "7 days",
      description: "Hike and explore the Canadian Rockies on a short but unforgettable weekend getaway. Wander through charming streets, admire iconic landmarks, and indulge in delicious French cuisine. Whether you're a history enthusiast, an art lover, or just seeking the perfect Parisian experience, this trip offers it all.",
      itinerary: ["Day 1: Banff", "Day 2: Lake Louise"]
    },
    {
      id: 24,
      name: "Japan Cultural Experience",
      image: "../../../images/JapanCulturalExperience.png",
      destination: "Kyoto, Japan",
      price: 1600,
      duration: "6 days",
      description: "Discover Japan's rich culture on a short but unforgettable weekend getaway. Wander through charming streets, admire iconic landmarks, and indulge in delicious French cuisine. Whether you're a history enthusiast, an art lover, or just seeking the perfect Parisian experience, this trip offers it all.",
      itinerary: ["Day 1: Kyoto Temples", "Day 2: Tea Ceremony"]
    },
    {
      id: 25,
      name: "Bora Bora Honeymoon",
      image: "../../../images/BoraBoraHoneymoon.png",
      destination: "Bora Bora, French Polynesia",
      price: 4000,
      duration: "5 days",
      description: "Relax on the romantic island of Bora Bora on a short but unforgettable weekend getaway. Wander through charming streets, admire iconic landmarks, and indulge in delicious French cuisine. Whether you're a history enthusiast, an art lover, or just seeking the perfect Parisian experience, this trip offers it all.",
      itinerary: ["Day 1: Arrival", "Day 2: Lagoon Tour"]
    }
  ];
  
