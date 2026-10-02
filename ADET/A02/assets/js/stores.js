// Sample data: replace with your real branches
var stores = [
    { name: "Sta. Rosa Branch", address: "SM City Sta. Rosa, Laguna", hours: "10:00 AM – 9:00 PM", phone: "(049) 555-0101" },
    { name: "Calamba Branch", address: "SM City Calamba, Laguna", hours: "10:00 AM – 9:00 PM", phone: "(049) 555-0102" },
    { name: "San Pablo Branch", address: "SM City San Pablo, Laguna", hours: "10:00 AM – 8:00 PM", phone: "(049) 555-0103" },
    { name: "Lucena Branch", address: "Robinsons Place Lucena, Quezon", hours: "10:00 AM – 8:00 PM", phone: "(042) 555-0104" },
    { name: "Batangas Branch", address: "SM City Batangas, Batangas City", hours: "10:00 AM – 9:00 PM", phone: "(043) 555-0105" },
    { name: "Manila Branch", address: "SM City Manila, Ermita, Manila", hours: "10:00 AM – 9:00 PM", phone: "(02) 555-0106" }
];

var container = document.getElementById("storeCardContainer");

for (var i = 0; i < stores.length; i++) {
    container.innerHTML += `
    <div class='col-12 col-md-6 col-lg-4'>
        <div class='store-card'>
            <h4 class='store-name'>` + stores[i].name + `</h4>
            <div class='store-row'><span class='store-label'>Address</span><span class='store-value'>` + stores[i].address + `</span></div>
            <div class='store-row'><span class='store-label'>Open daily</span><span class='store-value'>` + stores[i].hours + `</span></div>
            <div class='store-row'><span class='store-label'>Phone</span><span class='store-value'>` + stores[i].phone + `</span></div>
        </div>
    </div>`;
}