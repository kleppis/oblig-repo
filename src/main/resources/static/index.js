let innFilm;
let innAntall;
let innFornavn;
let innEtternavn;
let innNumber;
let innEpost;

let input1 = false;
let input2 = false;
let input3 = false;
let input4 = false;
let input5 = false;
let input6 = false;


function settFilm(){
    let filmen = document.getElementById("filmValg").value;
    if (filmen === "uvalgt"){
        document.getElementById("filmValidation").innerHTML = "Du må velge film";

    } else {
        innFilm = filmen;
        input1 = true;
    }
}

function valideringAntall() {
    let antallet = document.getElementById("antall").value;
    if (antallet > 0){
        innAntall = antallet;
        document.getElementById("antallValidation").innerHTML = "";
        input2 = true;
    } else {
        document.getElementById("antallValidation").innerHTML = "Ugyldig antall billetter";
    }
}
function valideringFornavn() {
    let fornavnet = document.getElementById("fornavn").value;
    if (fornavnet === ""){
        document.getElementById("fornavnValidation").innerHTML = "Må fylle ut etternavn";
    } else {
        innFornavn = fornavnet;
        document.getElementById("fornavnValidation").innerHTML = "";
        input3 = true;
    }

}

function valideringEtternavn () {
    let etternavnet = document.getElementById("etternavn").value;
    if (etternavnet === ""){
        document.getElementById("etternavnValidation").innerHTML = "Må fylle ut fornavn";
    } else {
        innEtternavn = etternavnet;
        document.getElementById("etternavnValidation").innerHTML = "";
        input4 = true;

    }
}

function valideringNummer() {
    let nummeret = document.getElementById("number").value;
    if (nummeret % 1 === 0 && nummeret.length === 8){
        innNumber = nummeret;
        document.getElementById("numberValidation").innerHTML = "";
        input5 = true;
    } else {
        document.getElementById("numberValidation").innerHTML = "Nummer er ikke riktig"
    }
}

function valideringEpost() {
    let eposten = document.getElementById("email").value;
    if (eposten.includes("@") && eposten !== ""){
        innEpost = eposten;
        document.getElementById("epostValidation").innerHTML = "";
        input6 = true;
    } else {
        document.getElementById("epostValidation").innerHTML = "Ugyldig epost";
    }
}

let bestillinger = [];

function tomInput () {
    document.getElementById("filmValg").value = "uvalgt";
    document.getElementById("antall").value = '';
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("number").value = "";
    document.getElementById("email").value = "";

}

function leggTilBestilling () {


        let billett = {
            film: innFilm,
            antall: innAntall,
            fornavn: innFornavn,
            etternavn: innEtternavn,
            telefon: innNumber,
            epost: innEpost
        }
        bestillinger.push(billett);


    let ut = "<table><tr>" +
            "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Epost</th>" +
            "</tr>";
        for (let i of bestillinger) {
            ut += "<tr>";
            ut += "<td>" + i.film + "</td><td>" + i.antall + "</td><td>" + i.fornavn + "</td><td>" + i.etternavn + "</td><td>" + i.telefon + "</td><td>" + i.epost + "</td>";
            ut += "</tr>";
        }
        document.getElementById("kjopteBilletter").innerHTML = ut;
    }


function leggTilOgValider () {
    if (input1 && input2 && input3 && input4 && input5 && input6){
        tomInput();
        leggTilBestilling();
        innAntall = 0;
        input1 = input2 = input3 = input4 = input5 = input6 = false;
    } else {
        settFilm();
        valideringFornavn();
        valideringEtternavn();
        valideringNummer();
        valideringAntall();
        valideringEpost();
    }
}


function slettBilletter(){
    bestillinger = [];
    document.getElementById("kjopteBilletter").innerHTML = "";
}