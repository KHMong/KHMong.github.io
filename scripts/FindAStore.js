// Stores
const stores = 
[
    {
        image: "images/GodStyle/store01.jpg",
        location: "IOI City Mall",
        address: "IOI Resort City Management Office, Unit T2-3A-3 & Unit T2-3A-3A level 3A, IOI City Tower Two, Lebuh IRC, IOI Resort, 62502 Putrajaya",
        operationHour: "10:00 - 22:00",
        telephone: "03-86824621",
        link: "https://www.google.com/maps/search/IOI+Resort+City+Management+Office,+Unit+T2-3A-3+%26+Unit+T2-3A-3A+level+3A,+IOI+City+Tower+Two,+Lebuh+IRC,+IOI+Resort,+62502+Putrajaya/@2.968949,101.7065753,16z/data=!3m1!4b1?entry=ttu"
    },
    {
        image: "images/GodStyle/store02.jpg",
        location: "IOI Puchong",
        address: "G20 & G21, Ground Floor, IOI MALL PUCHONG, Batu 9, Jalan Puchong, Bandar Puchong Jaya, Selangor 47170 Puchong",
        operationHour: "10:00 - 22:00",
        telephone: "03-80801321",
        link: "https://www.google.com/maps/search/G20+%26+G21,+Ground+Floor,+IOI+MALL+PUCHONG,+Batu+9,+Jalan+Puchong,+Bandar+Puchong+Jaya,+Selangor+47170+Puchong/@3.0449395,101.6175333,18z/data=!3m1!4b1?entry=ttu"
    },
    {
        image: "images/GodStyle/store03.jpg",
        location: "Sunway Velocity",
        address: "Sunway Velocity Sales Gallery, Lot 1-64, 65, 66 & 67, Sunway Velocity Mall Lingkaran SV, Jln Cheras, 55100 Kuala Lumpur, Federal Territory of Kuala Lumpur",
        operationHour: "10:00 - 22:00",
        telephone: "03-89333842",
        link: "https://www.google.com/maps/search/Sunway+Velocity+Sales+Gallery,+Lot+1-64,+65,+66+%26+67,+Sunway+Velocity+Mall+Lingkaran+SV,+Jln+Cheras,+55100+Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur/@3.1276887,101.7216964,17z/data=!3m1!4b1?entry=ttu"
    }
];

// Trending 
let findAStoreHTML = '';

stores.forEach((store) =>
{
    findAStoreHTML +=
    `
        <div class="store-container">
            <div class="store-image-container">
                <img class="store-image" src="${store.image}">
            </div>
            <div class="store-detail-container">
                <table class="store-detail-info">
                    <tr>
                        <th class="store-location" colspan="2">${store.location}</th>
                    </tr>
                    <tr>
                        <td class="store-detail-title">Address:</td>
                        <td class="store-detail-content">${store.address}</td>
                    </tr>
                    <tr>
                        <td class="store-detail-title">Operation hour:</td>
                        <td class="store-detail-content">${store.operationHour}</td>
                    </tr>
                    <tr>
                        <td class="store-detail-title">Telephone:</td>
                        <td class="store-detail-content">${store.telephone}</td>
                    </tr>
                </table>
            </div>
            <a class="store-find-us-button-container" target="_blank" href="${store.link}">
                <button class="store-find-us-button">Find Us</button>
            </a>
        </div>
    `;
});

document.querySelector('.all-store-container').innerHTML = findAStoreHTML;