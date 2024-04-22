$(function (){
    formaterData()
})

function tomInput () {
    $("#filmValg").val("uvalgt");
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#number").val("");
    $("#email").val("");
}
function lagreData(){
const billett = {
    film: $("#filmValg").val(),
    antall: $("#antall").val(),
    fornavn: $("#fornavn").val(),
    etternavn: $("#etternavn").val(),
    telefon: $("#number").val(),
    epost: $("#email").val()
}
    $.post("http://localhost:8080/lagre", billett, function(response) {
        console.log("Data lagret", response);
        formaterData();
        tomInput();
        input1, input2,input3, input4, input5, input6 = false;
    }).fail(function(error) {
        console.error("Feil ved lagring av data", error);
    });}

let erGyldig;

function leggTilOgValider() {
    valideringEpost();
    valideringFornavn();
    valideringEtternavn();
    valideringNummer();
    valideringAntall();
    settFilm();

    erGyldig = input1 * input2 * input3 * input4 * input5 * input6;
    if (erGyldig){
        lagreData();
    } else {
        console.log("Ugyldige inputs")
    }
}



function formaterData(){
    let ut = "<table class='table table-striped'><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>Epost</th><th></th><th></th></tr>";
    $.get("/hentAlle", function(data) {
        // Iterer gjennom hver billett i mottatt data
        for (const b of data) {
            ut += "<tr>";
            ut += "<td>" + b.film + "</td>";
            ut += "<td>" + b.antall + "</td>";
            ut += "<td>" + b.fornavn + "</td>";
            ut += "<td>" + b.etternavn + "</td>";
            ut += "<td>" + b.telefon + "</td>";
            ut += "<td>" + b.epost + "</td>";
            ut += "<td>" + "<button  class='btn btn-info' onclick='endreBestilling("+b.id+")'>Endre</button>" + "</td>";
            ut += "<td>" + "<button class='btn btn-danger' onclick='slettEn("+b.id+")'>Slett</button>" + "</td>";
            ut += "</tr>";
            console.log(b.id);
        }
        ut += "</table>";
        $("#kjopteBilletter").html(ut);

    });
}


function slettBilletter() {
    $.get("/slettBilletter", function (data) {
        console.log("Data slettet", data);
        // Oppdater eller tøm tabellen/visningen som viser billettene
        $("#kjopteBilletter").html(""); // Tømmer tabellen
        formaterData(); // Hvis du vil hente oppdatert data igjen
    });
}

function slettEn(id){
    let url = "/slettBillett?id="+id;
    $.get(url, function (){
        formaterData()
    })
}

function endreBestilling(id){
    window.location.href = "/endre-billett.html?"+id
}

