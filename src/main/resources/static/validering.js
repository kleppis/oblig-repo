let input1, input2, input3, input4, input5, input6 = false;


function settFilm(){
    let filmen = $("#filmValg").val();
    console.log(filmen)
    if (filmen === "uvalgt" || filmen === null){
        $("#filmValidation").html("Du måste velge film");
        input1 = false;
    } else {
        $("#filmValidation").html("");
        input1 = true;
    }
}

function valideringAntall() {
    let antallet = $("#antall").val();
    if (antallet > 0){
        $("#antallValidation").html("");
        input2 = true;
    } else {
        $("#antallValidation").html("Ugyldig antall billetter");
        input2 = false;
    }
}

function valideringFornavn() {
    let fornavnet = $("#fornavn").val();
    if (fornavnet === ""){
        $("#fornavnValidation").html("Må fylle ut fornavn");
        input3 = false;
    } else {
        $("#fornavnValidation").html("");
        input3 = true;
    }

}

function valideringEtternavn () {
    let etternavnet = $("#etternavn").val();
    if (etternavnet === ""){
        $("#etternavnValidation").html("Må fylle ut fornavn");
        input4 = false;
    } else {
        $("#etternavnValidation").html("");
        input4 = true;
    }
}

function valideringNummer() {
    let nummeret = $("#number").val();
    if (nummeret % 1 === 0 && nummeret.length === 8){
        $("#numberValidation").html("");
        input5 = true;
    } else {
        $("#numberValidation").html("Nummeret er ikke riktig");
        input5 = false;
    }
}

function valideringEpost() {
    let eposten = $("#email").val();
    // Regex for å sjekke om e-postadressen er gyldig
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(eposten)) {
        $("#epostValidation").html("");
        input6 = true;
    } else {
        $("#epostValidation").html("Ugyldig epost");
        input6 = false;
    }
}