
const raw = [
    [1,'H','Hydrogen','1.008','nonmetal',1,1],
    [2,'He','Helium','4.0026','noble',1,18],
    [3,'Li','Lithium','6.94','alkali',2,1],
    [4,'Be','Beryllium','9.012','alkaline',2,2],
    [5,'B','Boron','10.81','metalloid',2,13],
    [6,'C','Carbon','12.011','nonmetal',2,14],
    [7,'N','Nitrogen','14.007','nonmetal',2,15],
    [8,'O','Oxygen','15.999','nonmetal',2,16],
    [9,'F','Fluorine','18.998','halogen',2,17],
    [10,'Ne','Neon','20.18','noble',2,18],
    [11,'Na','Sodium','22.99','alkali',3,1],
    [12,'Mg','Magnesium','24.305','alkaline',3,2],
    [13,'Al','Aluminium','26.982','post',3,13],
    [14,'Si','Silicon','28.085','metalloid',3,14],
    [15,'P','Phosphorus','30.974','nonmetal',3,15],
    [16,'S','Sulfur','32.06','nonmetal',3,16],
    [17,'Cl','Chlorine','35.45','halogen',3,17],
    [18,'Ar','Argon','39.948','noble',3,18],
    [19,'K','Potassium','39.098','alkali',4,1],
    [20,'Ca','Calcium','40.078','alkaline',4,2],
    [21,'Sc','Scandium','44.956','transition',4,3],
    [22,'Ti','Titanium','47.867','transition',4,4],
    [23,'V','Vanadium','50.942','transition',4,5],
    [24,'Cr','Chromium','51.996','transition',4,6],
    [25,'Mn','Manganese','54.938','transition',4,7],
    [26,'Fe','Iron','55.845','transition',4,8],
    [27,'Co','Cobalt','58.933','transition',4,9],
    [28,'Ni','Nickel','58.693','transition',4,10],
    [29,'Cu','Copper','63.546','transition',4,11],
    [30,'Zn','Zinc','65.38','transition',4,12],
    [31,'Ga','Gallium','69.723','post',4,13],
    [32,'Ge','Germanium','72.63','metalloid',4,14],
    [33,'As','Arsenic','74.922','metalloid',4,15],
    [34,'Se','Selenium','78.971','nonmetal',4,16],
    [35,'Br','Bromine','79.904','halogen',4,17],
    [36,'Kr','Krypton','83.798','noble',4,18],
    [37,'Rb','Rubidium','85.468','alkali',5,1],
    [38,'Sr','Strontium','87.62','alkaline',5,2],
    [39,'Y','Yttrium','88.906','transition',5,3],
    [40,'Zr','Zirconium','91.224','transition',5,4],
    [41,'Nb','Niobium','92.906','transition',5,5],
    [42,'Mo','Molybdenum','95.95','transition',5,6],
    [43,'Tc','Technetium','98','transition',5,7],
    [44,'Ru','Ruthenium','101.07','transition',5,8],
    [45,'Rh','Rhodium','102.91','transition',5,9],
    [46,'Pd','Palladium','106.42','transition',5,10],
    [47,'Ag','Silver','107.87','transition',5,11],
    [48,'Cd','Cadmium','112.41','transition',5,12],
    [49,'In','Indium','114.82','post',5,13],
    [50,'Sn','Tin','118.71','post',5,14],
    [51,'Sb','Antimony','121.76','metalloid',5,15],
    [52,'Te','Tellurium','127.60','metalloid',5,16],
    [53,'I','Iodine','126.90','halogen',5,17],
    [54,'Xe','Xenon','131.29','noble',5,18],
    [55,'Cs','Caesium','132.91','alkali',6,1],
    [56,'Ba','Barium','137.33','alkaline',6,2],
    [57,'La','Lanthanum','138.91','lanth',6,3],
    [58,'Ce','Cerium','140.12','lanth',6,4],
    [59,'Pr','Praseodymium','140.91','lanth',6,5],
    [60,'Nd','Neodymium','144.24','lanth',6,6],
    [61,'Pm','Promethium','145','lanth',6,7],
    [62,'Sm','Samarium','150.36','lanth',6,8],
    [63,'Eu','Europium','151.96','lanth',6,9],
    [64,'Gd','Gadolinium','157.25','lanth',6,10],
    [65,'Tb','Terbium','158.93','lanth',6,11],
    [66,'Dy','Dysprosium','162.50','lanth',6,12],
    [67,'Ho','Holmium','164.93','lanth',6,13],
    [68,'Er','Erbium','167.26','lanth',6,14],
    [69,'Tm','Thulium','168.93','lanth',6,15],
    [70,'Yb','Ytterbium','173.05','lanth',6,16],
    [71,'Lu','Lutetium','174.97','lanth',6,17],
    [72,'Hf','Hafnium','178.49','transition',6,4],
    [73,'Ta','Tantalum','180.95','transition',6,5],
    [74,'W','Tungsten','183.84','transition',6,6],
    [75,'Re','Rhenium','186.21','transition',6,7],
    [76,'Os','Osmium','190.23','transition',6,8],
    [77,'Ir','Iridium','192.22','transition',6,9],
    [78,'Pt','Platinum','195.08','transition',6,10],
    [79,'Au','Gold','196.97','transition',6,11],
    [80,'Hg','Mercury','200.59','transition',6,12],
    [81,'Tl','Thallium','204.38','post',6,13],
    [82,'Pb','Lead','207.2','post',6,14],
    [83,'Bi','Bismuth','208.98','post',6,15],
    [84,'Po','Polonium','209','post',6,16],
    [85,'At','Astatine','210','halogen',6,17],
    [86,'Rn','Radon','222','noble',6,18],
    [87,'Fr','Francium','223','alkali',7,1],
    [88,'Ra','Radium','226','alkaline',7,2],
    [89,'Ac','Actinium','227','act',7,3],
    [90,'Th','Thorium','232.04','act',7,4],
    [91,'Pa','Protactinium','231.04','act',7,5],
    [92,'U','Uranium','238.03','act',7,6],
    [93,'Np','Neptunium','237','act',7,7],
    [94,'Pu','Plutonium','244','act',7,8],
    [95,'Am','Americium','243','act',7,9],
    [96,'Cm','Curium','247','act',7,10],
    [97,'Bk','Berkelium','247','act',7,11],
    [98,'Cf','Californium','251','act',7,12],
    [99,'Es','Einsteinium','252','act',7,13],
    [100,'Fm','Fermium','257','act',7,14],
    [101,'Md','Mendelevium','258','act',7,15],
    [102,'No','Nobelium','259','act',7,16],
    [103,'Lr','Lawrencium','266','act',7,17],
    [104,'Rf','Rutherfordium','267','transition',7,4],
    [105,'Db','Dubnium','268','transition',7,5],
    [106,'Sg','Seaborgium','269','transition',7,6],
    [107,'Bh','Bohrium','270','transition',7,7],
    [108,'Hs','Hassium','277','transition',7,8],
    [109,'Mt','Meitnerium','278','transition',7,9],
    [110,'Ds','Darmstadtium','281','transition',7,10],
    [111,'Rg','Roentgenium','282','transition',7,11],
    [112,'Cn','Copernicium','285','transition',7,12],
    [113,'Nh','Nihonium','286','post',7,13],
    [114,'Fl','Flerovium','289','post',7,14],
    [115,'Mc','Moscovium','290','post',7,15],
    [116,'Lv','Livermorium','293','post',7,16],
    [117,'Ts','Tennessine','294','halogen',7,17],
    [118,'Og','Oganesson','294','noble',7,18]
    ];
    
    const categories = {
        alkali: "Alkali Metals",
        alkaline: "Alkaline Earth Metals",
        transition: "Transition Metals",
        post: "Post-Transition Metals",
        metalloid: "Metalloids",
        nonmetal: "Nonmetals",
        halogen: "Halogens",
        noble: "Noble Gases",
        lanth: "Lanthanides",
        act: "Actinides"
    };
    
    const table = document.getElementById("table");
    const series = document.getElementById("series");
    const search = document.getElementById("search");
    const legend = document.getElementById("legend");
    
    // Create category legend
    
    Object.entries(categories).forEach(([key, name]) => {
        const item = document.createElement("span");
        item.innerHTML = `<i class="dot ${key}"></i>${name}`;
        legend.appendChild(item);
    });
    
    // Create element cards
    
    function createCard(element) {
        const card = document.createElement("button");
    
        card.className = `element ${element[4]}`;
    
        card.innerHTML = `
            <span class="number">${element[0]}</span>
            <strong class="symbol">${element[1]}</strong>
            <span class="name">${element[2]}</span>
        `;
    
        card.style.gridColumn = element[6];
        card.style.gridRow = element[5];
    
        card.dataset.search =
            (element[1] + " " + element[2]).toLowerCase();
    
        card.addEventListener("click", () => {
            showDetails(element);
        });
    
        return card;
    }
    
    // Separate lanthanides and actinides
    
    const lanthanides = [];
    const actinides = [];
    
    raw.forEach(element => {
        if (element[0] >= 58 && element[0] <= 71) {
            lanthanides.push(element);
        }
        else if (element[0] >= 90 && element[0] <= 103) {
            actinides.push(element);
        }
        else {
            table.appendChild(createCard(element));
        }
    });
    
    // Add extra rows
    
    function addSeries(title, elements) {
        const heading = document.createElement("div");
    
        heading.className = "series-title";
        heading.textContent = title;
    
        series.appendChild(heading);
    
        elements.forEach((element, index) => {
            const card = createCard(element);
    
            card.style.gridColumn = index + 1;
            series.appendChild(card);
        });
    }
    
    addSeries("Lanthanides (58–71)", lanthanides);
    addSeries("Actinides (90–103)", actinides);
    
    // Show element details
    
    function showDetails(element) {
        document.getElementById("dSymbol").textContent = element[1];
    
        document.getElementById("dName").textContent = element[2];
    
        document.getElementById("dNumber").textContent =
            "Atomic Number: " + element[0];
    
        document.getElementById("dMass").textContent =
            "Atomic Mass: " + element[3] + " u";
    
        document.getElementById("dCategory").textContent =
            "Category: " + categories[element[4]];
    
        document.getElementById("details").classList.add("show");
    
        document.getElementById("details").scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    }
    
    // Close details
    
    document.getElementById("close").addEventListener("click", () => {
        document.getElementById("details").classList.remove("show");
    });
    
    // Search by name or symbol
    
    search.addEventListener("input", () => {
        const query = search.value.toLowerCase().trim();
    
        document.querySelectorAll(".element").forEach(card => {
            const match = card.dataset.search.includes(query);
    
            card.style.opacity = match ? "1" : "0.15";
        });
    });
    