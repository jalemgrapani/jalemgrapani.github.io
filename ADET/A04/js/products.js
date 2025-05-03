var products = [
    {
        "category": "Donuts",
        "contents": [
            { "isAvailable": true, "name": "Alcapone", "price": 45, "image": "donuts/alcapone" },
            { "isAvailable": true, "name": "Avocado", "price": 45, "image": "donuts/avocado" },
            { "isAvailable": true, "name": "Berry Spears", "price": 45, "image": "donuts/berry-spears" },
            { "isAvailable": true, "name": "Black Jack", "price": 45, "image": "donuts/black-jack" },
            { "isAvailable": true, "name": "Caviar Strawberry", "price": 45, "image": "donuts/caviar-strawberry" },
            { "isAvailable": true, "name": "Cheese Cakelicious", "price": 45, "image": "donuts/cheese-cakelicious" },
            { "isAvailable": true, "name": "Choco Nutzy", "price": 45, "image": "donuts/choconutzy" },
            { "isAvailable": true, "name": "Chocolate Rainbow", "price": 45, "image": "donuts/chocolate-rainbow" },
            { "isAvailable": true, "name": "CocoLoco", "price": 45, "image": "donuts/coco-loco" },
            { "isAvailable": true, "name": "Copa Banana", "price": 45, "image": "donuts/copa-banana" },
            { "isAvailable": true, "name": "Don Mochino", "price": 45, "image": "donuts/don-mochino" },
            { "isAvailable": true, "name": "Forest Glam", "price": 45, "image": "donuts/forest-glam" },
            { "isAvailable": true, "name": "Glazzy", "price": 45, "image": "donuts/glazzy" },
            { "isAvailable": true, "name": "Green Tease", "price": 45, "image": "donuts/green-tease" },
            { "isAvailable": true, "name": "Heaven Berry", "price": 45, "image": "donuts/heaven-berry" },
            { "isAvailable": true, "name": "J.Pops", "price": 45, "image": "donuts/jpops" },
            { "isAvailable": true, "name": "Jacky Chunk", "price": 45, "image": "donuts/jacky-chunk" },
            { "isAvailable": true, "name": "Jcoccino", "price": 45, "image": "donuts/jcoccino" },
            { "isAvailable": true, "name": "Matcho Matcho", "price": 45, "image": "donuts/matcho-matcho" },
            { "isAvailable": true, "name": "Meisisipi", "price": 45, "image": "donuts/meisissippi" },
            { "isAvailable": true, "name": "Mr Green Tea", "price": 45, "image": "donuts/mr-green-tea" },
            { "isAvailable": true, "name": "Oreology", "price": 45, "image": "donuts/oreology" },
            { "isAvailable": true, "name": "Snow White", "price": 45, "image": "donuts/snow-white" },
            { "isAvailable": true, "name": "Sugar Ice", "price": 45, "image": "donuts/sugar-ice" },
            { "isAvailable": true, "name": "Tiramisu", "price": 45, "image": "donuts/tiramisu" },
            { "isAvailable": true, "name": "White Desert", "price": 45, "image": "donuts/white-desert" },
            { "isAvailable": true, "name": "Why Nut", "price": 45, "image": "donuts/why-nut" }
        ]
    },
    {
        "category": "J.Coffee",
        "contents": [
            { "isAvailable": true, "name": "Iced Jcoccino", "price": 135, "image": "jcoffee/ice-jcoccino" },
            { "isAvailable": true, "name": "Hot Latte", "price": 130, "image": "jcoffee/hot-latte" },
            { "isAvailable": true, "name": "Hot Americano", "price": 110, "image": "jcoffee/hot-americano" },
            { "isAvailable": true, "name": "Hot Caramel Jcoccino", "price": 120, "image": "jcoffee/hot-caramel-jcoccino" },
            { "isAvailable": true, "name": "Iced Latte", "price": 130, "image": "jcoffee/ice-latte" },
            { "isAvailable": true, "name": "Iced Hazelnut Latte", "price": 140, "image": "jcoffee/hazelnut-latte" },
            { "isAvailable": true, "name": "Hot Mocha Espresso", "price": 130, "image": "jcoffee/mocha-espresso-frappe" },
            { "isAvailable": true, "name": "Iced Caramel Jcoccino", "price": 140, "image": "jcoffee/ice-caramel-jcoccino" },
            { "isAvailable": true, "name": "Iced Americano", "price": 110, "image": "jcoffee/ice-americano" },
            { "isAvailable": true, "name": "Iced Mocha Espresso Frappe", "price": 140, "image": "jcoffee/ice-mocha-espresso-frappe" },
            { "isAvailable": true, "name": "Hot Jcoccino", "price": 130, "image": "jcoffee/hot-jcoccino" },
            { "isAvailable": true, "name": "Hot Hazelnut Latte", "price": 135, "image": "jcoffee/hot-hazelnut-latte" }
        ]
    },
    {
        "category": "Chocolate (Beverages)",
        "contents": [
            { "isAvailable": true, "name": "Hot Chocolate", "price": 120, "image": "chocolate/hot-chocolate" },
            { "isAvailable": true, "name": "Iced Chocolate", "price": 130, "image": "chocolate/iced-chocolate" }
        ]
    },
    {
        "category": "Tea",
        "contents": [
            { "isAvailable": true, "name": "Hot Green Tea Latte", "price": 110, "image": "tea/hot-green-tea-latte" },
            { "isAvailable": true, "name": "Hot Tea", "price": 90, "image": "tea/hot-tea" },
            { "isAvailable": true, "name": "Iced Green Tea Latte", "price": 115, "image": "tea/ice-green-tea-latte" },
            { "isAvailable": true, "name": "Iced Lemon Tea", "price": 95, "image": "tea/iced-lemon-tea" },
            { "isAvailable": true, "name": "Iced Thai Tea", "price": 105, "image": "tea/iced-thai-tea" }
        ]
    },
    {
        "category": "Frappe",
        "contents": [
            { "isAvailable": true, "name": "Avocado Frappe", "price": 150, "image": "frappe/avocado-frappe" },
            { "isAvailable": true, "name": "Caramel Frappe", "price": 150, "image": "frappe/caramel-frappe" },
            { "isAvailable": true, "name": "Choco Forest Frappe", "price": 150, "image": "frappe/choco-forest-frappe" },
            { "isAvailable": true, "name": "Oreo Cheesecake Frappe", "price": 150, "image": "frappe/oreo-cheesecake-frappe" },
            { "isAvailable": true, "name": "Blueberry Frappe", "price": 150, "image": "frappe/blueberry-frappe" },
            { "isAvailable": true, "name": "Strawberry Frappe", "price": 150, "image": "frappe/strawberry-frappe" }
        ]
    },
    {
        "category": "J.Club (Donut Sandwich)",
        "contents": [
            { "isAvailable": true, "name": "Cheezy Rich", "price": 150, "image": "jclub/cheezy-rich" },
            { "isAvailable": true, "name": "Katsu", "price": 140, "image": "jclub/katsu" },
            { "isAvailable": true, "name": "Red Velvet", "price": 145, "image": "jclub/red-velvet" },
            { "isAvailable": true, "name": "Sausage", "price": 155, "image": "jclub/sausage" }
        ]
    },
    {
        "category": "J.Cool (Frozen Yogurt)",
        "contents": [
            { "isAvailable": true, "name": "J.Cool Single", "price": 95, "image": "jcool/jcool-single" },
            { "isAvailable": true, "name": "J.Cool Couple", "price": 140, "image": "jcool/jcool-couple" },
            { "isAvailable": true, "name": "J.Cool Sharing", "price": 180, "image": "jcool/jcool-sharing" }
        ]
    }
];
