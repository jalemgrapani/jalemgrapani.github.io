// Data
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var categories = [
    { name: "All", icon: "fa-border-all" },
    { name: "Beaches and Lagoons", icon: "fa-umbrella-beach" },
    { name: "Parks and Lakes", icon: "fa-tree" },
    { name: "Adventure and Diving", icon: "fa-person-swimming" }
];

var spots = [
    {
        name: "El Nido",
        place: "North Palawan",
        category: "Beaches and Lagoons",
        badge: "Island Hopping",
        image: "assets/img/el%20nido.avif",
        text: "Towering limestone cliffs, clear water and vibrant marine life for island hopping and diving.",
        tip: "Go on an early island-hopping tour to reach the lagoons before the crowds."
    },
    {
        name: "Big Lagoon",
        place: "El Nido",
        category: "Beaches and Lagoons",
        badge: "Kayaking",
        image: "assets/img/biglagoon.jpg",
        text: "Emerald water ringed by limestone cliffs, perfect for kayaking and photos.",
        tip: "Go early to paddle before the tour boats arrive."
    },
    {
        name: "Small Lagoon",
        place: "El Nido",
        category: "Beaches and Lagoons",
        badge: "Snorkeling",
        image: "assets/img/small-lagoon.jpg",
        text: "A hidden lagoon reached through a small cave, ideal for swimming.",
        tip: "The entrance is narrow, so go early to avoid waiting."
    },
    {
        name: "Nacpan Beach",
        place: "El Nido",
        category: "Beaches and Lagoons",
        badge: "Sunsets",
        image: "assets/img/nacpan.webp",
        text: "A pristine 4-kilometer stretch of white sand for relaxing and sunbathing.",
        tip: "Stay for sunset, but bring your own food and water."
    },
    {
        name: "Secret Beach",
        place: "El Nido",
        category: "Beaches and Lagoons",
        badge: "Hidden Gem",
        image: "assets/img/secretbeach.jpg",
        text: "A secluded beach behind limestone walls, reached by swimming through a narrow passage.",
        tip: "Wear water shoes and expect a short swim to get in."
    },
    {
        name: "Long Beach",
        place: "San Vicente",
        category: "Beaches and Lagoons",
        badge: "Quiet Shore",
        image: "assets/img/longbeach.webp",
        text: "A 14-kilometer white sand beach, among the longest in the country and less crowded.",
        tip: "Bring cash and sun protection, since there is little shade."
    },
    {
        name: "Malcapuya Island",
        place: "Coron",
        category: "Beaches and Lagoons",
        badge: "White Sand",
        image: "assets/img/malcapuya.jpg",
        text: "A quiet island with powdery white sand and calm, clear shallows.",
        tip: "Bring snacks and water, since facilities are basic."
    },
    {
        name: "Puerto Princesa Underground River",
        place: "Puerto Princesa",
        category: "Parks and Lakes",
        badge: "UNESCO Site",
        image: "assets/img/subterranean.jpg",
        text: "A UNESCO World Heritage Site with limestone karst scenery and a navigable underground river.",
        tip: "Tours need a permit, so book ahead, especially in the dry season."
    },
    {
        name: "Kayangan Lake",
        place: "Coron",
        category: "Parks and Lakes",
        badge: "Swimming",
        image: "assets/img/kayangan.webp",
        text: "Crystal-clear water and sweeping views, often called the cleanest lake in Asia.",
        tip: "Bring a camera and be ready for a short climb for the best view."
    },
    {
        name: "Twin Lagoon",
        place: "Coron",
        category: "Parks and Lakes",
        badge: "Cliff Jumping",
        image: "assets/img/twinlagoon.webp",
        text: "Saltwater and freshwater meet in a dramatic lagoon for swimming and cliff jumping.",
        tip: "Check the tide and water conditions before you jump."
    },
    {
        name: "Calauit Safari Park",
        place: "Busuanga",
        category: "Parks and Lakes",
        badge: "Wildlife",
        image: "assets/img/calauit.jpg",
        text: "A wildlife reserve where giraffes and zebras roam alongside native Palawan animals.",
        tip: "Join a guided tour early in the day, when it is cooler."
    },
    {
        name: "Coron Bay Shipwrecks",
        place: "Coron",
        category: "Adventure and Diving",
        badge: "Diving",
        image: "assets/img/coronbay.jpg",
        text: "World-class wreck dives among Japanese ships sunk in World War II.",
        tip: "Wreck dives need a certified diver, so book with a licensed operator."
    },
    {
        name: "Tubbataha Reef",
        place: "Sulu Sea",
        category: "Adventure and Diving",
        badge: "UNESCO Site",
        image: "assets/img/tubbataha.jpg",
        text: "A UNESCO marine site and diver's paradise with dense coral reefs and abundant sea life.",
        tip: "Most trips go by live-aboard dive boat in the diving season, so book early."
    },
    {
        name: "Port Barton",
        place: "San Vicente",
        category: "Adventure and Diving",
        badge: "Island Hopping",
        image: "assets/img/port.jpeg",
        text: "A laid-back fishing village with island tours and pristine beaches.",
        tip: "Join a morning island-hopping tour for calmer seas."
    },
    {
        name: "Pamuayan Waterfalls",
        place: "Port Barton",
        category: "Adventure and Diving",
        badge: "Trekking",
        image: "assets/img/pamuayan.webp",
        text: "A scenic trek near Port Barton ending at natural swimming pools.",
        tip: "Wear shoes with good grip, since the trail can be slippery."
    },
    {
        name: "Honda Bay",
        place: "Puerto Princesa",
        category: "Adventure and Diving",
        badge: "Snorkeling",
        image: "assets/img/hondabay.webp",
        text: "A popular island hopping trip from Puerto Princesa with sandbars and reefs.",
        tip: "Go on a weekday to avoid the crowds at the sandbars."
    },
    {
        name: "Ugong Rock",
        place: "Puerto Princesa",
        category: "Adventure and Diving",
        badge: "Climbing",
        image: "assets/img/ugong-rock.jpg",
        text: "A limestone formation with a cave to explore, a climb up and a zipline down.",
        tip: "Wear shoes with good grip and go in the morning before it gets hot."
    },
    {
        name: "Mount Tapyas",
        place: "Coron",
        category: "Adventure and Diving",
        badge: "Viewpoint",
        image: "assets/img/mt-tapyas.jpg",
        text: "A climb of about 700 steps to a cross and sweeping views of Coron Bay.",
        tip: "Climb at sunrise or late afternoon to avoid the midday heat."
    }
];