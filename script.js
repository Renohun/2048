document.addEventListener("DOMContentLoaded", function(){
    // let viewVector = []
    let tabla = document.getElementById("tablazat")

    for(let i = 0; i < 4; i++){

        let sor = document.createElement("tr")

        tabla.appendChild(sor)

        for(let j = 0; j < 4; j++){

            let cella = document.createElement("td")
            // viewVector.push(cella)
            // cella.classList.add(i+""+j)

            cella.dataset.x = i
            cella.dataset.y = j


            sor.appendChild(cella)
        }
    }


    
    let matrix = []

    // console.log(viewVector)
    // viewVector[7].style.backgroundColor="red";

    for(let i = 0; i < 4; i++){
        let sor = []

        for(let j = 0; j < 4; j++){
            sor.push("x")
        }
        matrix.push(sor)
    }

    for(let i = 0; i < 2; i++){
        let random = Math.floor(Math.random()*100)+1
        //console.log(random)

        if(1 <= random && random <= 90){//2es szam generalasa

            console.log("a")

            let ures

            do{

                ures = false

                let randomX = Math.floor(Math.random()*3)
                let randomY = Math.floor(Math.random()*3)

                if(matrix[randomX][randomY] == "x"){

                    ures = true

                    matrix[randomX][randomY] = "2"

                    let keresettCella = document.querySelector(`[data-x="${randomX}"][data-y="${randomY}"]`); // dataset-re valo kereses querySelectorral data-datasetNeve = amire keresel; backticket (`) hasznal
                    //console.log(keresettCella)
                    keresettCella.textContent = "2"
                }

            }while(!ures)

        }else if(91 <= random && random <= 100){//4es szam generalasa

            let ures

            console.log("b")

            do{

                ures = false

                let randomX = Math.floor(Math.random()*3)
                let randomY = Math.floor(Math.random()*3)

                if(matrix[randomX][randomY] == "x"){
                    ures = true
                    matrix[randomX][randomY] = "4"

                    // let keresettCella = document.getElementsByClassName(randomX+""+randomY)
                    // keresettCella[0].innerHTML = "4"

                    let keresettCella = document.querySelector(`[data-x="${randomX}"][data-y="${randomY}"]`);
                    keresettCella.textContent = "4"
                }

            }while(!ures)

        }
    }
    szinezes(matrix)
    document.addEventListener("keyup", function(gomb){ //Felfele nyomott gomb torteno esemenyek

        if(gomb.key == "w")
        { 
                //Alulrol fentre nezzuk az oszlopot

                for (let oszlop = 0; oszlop < 4; oszlop++) {
                let values = [];

                    for (let sor = 0; sor < 4; sor++) {

                        if (matrix[sor][oszlop] != "x") 
                        {
                            values.push(matrix[sor][oszlop]);
                        }
                        //console.log(values)
                    }

                    for (let i = 0; i < values.length - 1; i++) {
                        if (values[i] === values[i + 1]) {
                            values[i] = (parseInt(values[i]) * 2).toString();
                            values.splice(i + 1, 1); // iit kitoroljok a meg nem duplazzott erteket
                        }
                    }
                    while (values.length < 4) {
                        values.push("x"); // vissza rakjuk az x-ket hogy majd olvashassam
                    }

                    for (let sor = 0; sor < 4; sor++) {

                        matrix[sor][oszlop] = values[sor];

                        let cella = document.querySelector(`[data-x="${sor}"][data-y="${oszlop}"]`);

                        cella.textContent = matrix[sor][oszlop] === "x" ? "" : matrix[sor][oszlop]; // if allitas : elott igaz ag, utana meg a hamis ag
                        cella.className = ""; // torlom a szineket 
                    }
            }
            
            if(UjRandomSzam(matrix))
            {
                let celladb = 0

                for(let i = 0; i < matrix.length; i++){
                    for(let j = 0; j < matrix[i].length; j++){
                        if(matrix[i][j] != "2048"){
                            celladb++
                        }
                    }
                }
                if(celladb == 16){ alert("Vesztettel, nem erted el a 2048at es minden cella betelt mar"); szinezes(matrix) } else{ alert("Gyoztel elerted a 2048-at"); szinezes(matrix) }
            }
            else
            {
                szinezes(matrix)

                //Gyozelmi kondicio
                for(let i = 0; i < matrix.length; i++){
                    for(let j = 0; j < matrix[i].length; j++){

                        if(matrix[i][j] == "2048"){
                            alert("Gyoztel elerted a 2048-at")
                            return
                        }
                    }
                }
            }
            
        }
        else if (gomb.key === "s") 
        {

            for (let oszlop = 0; oszlop < 4; oszlop++) {
                let values = [];

                for (let sor = 3; sor >= 0; sor--) {
                    if (matrix[sor][oszlop] !== "x") {
                        values.push(matrix[sor][oszlop]);
                    }
                }

                for (let i = 0; i < values.length - 1; i++) {
                    if (values[i] === values[i + 1]) {
                        values[i] = (parseInt(values[i]) * 2).toString();
                        values.splice(i + 1, 1);
                    }
                }

                while (values.length < 4) {
                    values.push("x");
                }

                for (let sor = 3, i = 0; sor >= 0; sor--, i++) {
                    matrix[sor][oszlop] = values[i];
                    let cella = document.querySelector(`[data-x="${sor}"][data-y="${oszlop}"]`);
                    cella.textContent = matrix[sor][oszlop] === "x" ? "" : matrix[sor][oszlop];
                    cella.className = ""; 
                }
            }
            if(UjRandomSzam(matrix))
            {
                let celladb = 0

                for(let i = 0; i < matrix.length; i++){
                    for(let j = 0; j < matrix[i].length; j++){
                        if(matrix[i][j] != "2048"){
                            celladb++
                        }
                    }
                }
                if(celladb == 16){ alert("Vesztettel, nem erted el a 2048at es minden cella betelt mar"); szinezes(matrix) } else{ alert("Gyoztel elerted a 2048-at"); szinezes(matrix) }
            }
            else
            {
                szinezes(matrix)

                //Gyozelmi kondicio
                for(let i = 0; i < matrix.length; i++){
                    for(let j = 0; j < matrix[i].length; j++){

                        if(matrix[i][j] == "2048"){
                            alert("Gyoztel elerted a 2048-at")
                            return
                        }
                    }
                }
            }
        }
        else if (gomb.key === "d") 
        {
            for (let sor = 0; sor < 4; sor++) {

                let values = [];

                for (let oszlop = 0; oszlop < 4; oszlop++) {
                    if (matrix[sor][oszlop] !== "x") {
                        values.push(matrix[sor][oszlop]);
                    }
                }
                for (let i = 0; i < values.length - 1; i++) {
                    if (values[i] === values[i + 1]) {
                        values[i] = (parseInt(values[i]) * 2).toString();
                        values.splice(i + 1, 1);
                    }
                }
                while (values.length < 4) {
                    values.push("x");
                }
                for (let oszlop = 0; oszlop < 4; oszlop++) {
                    matrix[sor][oszlop] = values[oszlop];
                    let cella = document.querySelector(`[data-x="${sor}"][data-y="${oszlop}"]`);
                    cella.textContent = matrix[sor][oszlop] === "x" ? "" : matrix[sor][oszlop];
                    cella.className = "";
                }
            }
            if(UjRandomSzam(matrix))
            {
                let celladb = 0

                for(let i = 0; i < matrix.length; i++){
                    for(let j = 0; j < matrix[i].length; j++){
                        if(matrix[i][j] != "2048"){
                            celladb++
                        }
                    }
                }
                if(celladb == 16){ alert("Vesztettel, nem erted el a 2048at es minden cella betelt mar"); szinezes(matrix) } else{ alert("Gyoztel elerted a 2048-at"); szinezes(matrix) }
            }
            else
            {
                szinezes(matrix)

                //Gyozelmi kondicio
                for(let i = 0; i < matrix.length; i++){
                    for(let j = 0; j < matrix[i].length; j++){

                        if(matrix[i][j] == "2048"){
                            alert("Gyoztel elerted a 2048-at")
                            return
                        }
                    }
                }
            }
        }

        if (gomb.key === "a") 
        {
            for (let sor = 0; sor < 4; sor++) {
                let values = [];

                for (let oszlop = 3; oszlop >= 0; oszlop--) {
                    if (matrix[sor][oszlop] !== "x") {
                        values.push(matrix[sor][oszlop]);
                    }
                }

                for (let i = 0; i < values.length - 1; i++) {
                    if (values[i] === values[i + 1]) {
                        values[i] = (parseInt(values[i]) * 2).toString();
                        values.splice(i + 1, 1);
                    }
                }

                while (values.length < 4) {
                    values.push("x");
                }
                for (let oszlop = 3, i = 0; oszlop >= 0; oszlop--, i++) {

                    matrix[sor][oszlop] = values[i];

                    let cella = document.querySelector(`[data-x="${sor}"][data-y="${oszlop}"]`);
                    cella.textContent = matrix[sor][oszlop] === "x" ? "" : matrix[sor][oszlop];
                    cella.className = "";
                }
            }
            if(UjRandomSzam(matrix))
            {
                let celladb = 0

                for(let i = 0; i < matrix.length; i++){
                    for(let j = 0; j < matrix[i].length; j++){
                        if(matrix[i][j] != "2048"){
                            celladb++
                        }
                    }
                }
                if(celladb == 16){ alert("Vesztettel, nem erted el a 2048at es minden cella betelt mar"); szinezes(matrix) } else{ alert("Gyoztel elerted a 2048-at"); szinezes(matrix) }
            }
            else
            {
                szinezes(matrix)

                //Gyozelmi kondicio
                for(let i = 0; i < matrix.length; i++){
                    for(let j = 0; j < matrix[i].length; j++){

                        if(matrix[i][j] == "2048"){
                            alert("Gyoztel elerted a 2048-at")
                            return
                        }
                    }
                }
            }
        }
    })

    console.log(matrix)
    console.log(tabla)
})


function szinezes(matrix){

    // fv. meghivando mindenegyes gombnyomas utan

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){

                let jelenlegiCella = document.querySelector(`[data-x = "${i}"][data-y = "${j}"]`)

                switch(jelenlegiCella.textContent){

                    case "2":
                        jelenlegiCella.classList.add("elso")
                        break;
                    case "4":
                        jelenlegiCella.classList.add("masodik")
                        break;
                    case "8":
                        jelenlegiCella.classList.add("harmadik")
                        break;
                    case "16":
                        jelenlegiCella.classList.add("negyedik")
                        break;
                    case "32":
                        jelenlegiCella.classList.add("otodik")
                        break;
                    case "64":
                        jelenlegiCella.classList.add("hatodik")
                        break;
                    case "128":
                        jelenlegiCella.classList.add("hetedik")
                        break;
                    case "256":
                        jelenlegiCella.classList.add("nyolcadik")
                        break;
                    case "512":
                        jelenlegiCella.classList.add("kilencedik")
                        break;
                    case "1024":
                        jelenlegiCella.classList.add("tizedik")
                        break;
                    case "2048":
                        jelenlegiCella.classList.add("tizenegyedik")
                        break;
                }

        }
    }
}


function UjRandomSzam(matrix){
    
    console.log(matrix)

    let VeresegCheck = false

    let uresTomb = []

    for(let i = 0; i < matrix.length; i++)
    {
        for(let j = 0; j < matrix[i].length; j++)
        {
            if(matrix[i][j] === "x")
            {
                uresTomb.push("x")
            }
        }
    }

    if(uresTomb.length != 0)
    {
        let rnd = Math.floor(Math.random()*100)+1

        if(1 <= rnd && rnd <= 90) //2es szam eselye
        {
            let Ures

            do
            {
                Ures = false

                let rndX = Math.floor(Math.random()*4)
                let rndY = Math.floor(Math.random()*4)

                if(matrix[rndX][rndY] === "x")
                {
                    let cella = document.querySelector(`[data-x = "${rndX}"][data-y = "${rndY}"]`)

                    cella.textContent = "2"
                    matrix[rndX][rndY] = "2"

                    Ures = true
                }
                else {Ures = false}

            }while(!Ures)
        }
        else if (91 <= rnd && rnd <= 100)    
        {
            let Ures

            do
            {
                Ures = false

                let rndX = Math.floor(Math.random()*4)
                let rndY = Math.floor(Math.random()*4)

                if(matrix[rndX][rndY] === "x")
                {
                    let cella = document.querySelector(`[data-x = "${rndX}"][data-y = "${rndY}"]`)

                    cella.textContent = "4"
                    matrix[rndX][rndY] = "4"

                    Ures = true
                }
                
                else{Ures = false}

            }while(!Ures)
        }
    }else{ VeresegCheck = true; return VeresegCheck} // hogy ne csinaljunk egy vegtelen ciklust, igy nem crashel

    /* Ez egy szar megoldas
    let uresTomb = []

    for(let i = 0; i < 4; i++)
    {
        for(let j = 0; j < 4; j++)
        {
            if(matrix[i][j] === "x")
            {
                uresTomb.push({x: i, y: j}) // ures koordinatak eltarolasa
            }
        }
    }

    if(uresTomb.length != 0)
    {
        let talalt

        do
        {
            talalt = false

            let rndX = Math.floor(Math.random()*3)
            let rndY = Math.floor(Math.random()*3)

            for(let i = 0; i < uresTomb.length; i++)
            {
                if(uresTomb[i] == {x: rndX, y: rndY})
                {
                    let rnd = Math.floor(Math.random()*100)+1

                    talalt = true

                    if(1 <= rnd && 90 >= rnd)
                    {
                        let cella = document.querySelector(`[data-x = "${rndX}"][data-y = "${rndY}"]`)

                        matrix[rndX][rndY] = "2"
                        cella.textContent = "2"

                    }else if (91 <= rnd && 100 >= rnd)
                    {
                        let cella = document.querySelector(`[data-x = "${rndX}"][data-y = "${rndY}"]`)

                        matrix[rndX][rndY] = "4"
                        cella.textContent = "4"
                    }
                }
            }

        }while(!talalt)
    }*/

}