package oslometoblig.obligatorisk;

public class Billett implements Comparable<Billett> {
    private int id;
    private String film, fornavn, etternavn, epost;
    private int antall, telefon;

    public Billett(int id, String film, String fornavn, String etternavn, String epost, int antall, int telefon) {
        this.id = id;
        this.film = film;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.epost = epost;
        this.antall = antall;
        this.telefon = telefon;
    }

    public Billett () {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }



    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }

    public int getAntall() {
        return antall;
    }

    public void setAntall(int antall) {
        this.antall = antall;
    }

    public int getTelefon() {
        return telefon;
    }

    public void setTelefon(int nummer) {
        this.telefon = nummer;
    }

    @Override
    public int compareTo(Billett billett){
        return this.getEtternavn().compareToIgnoreCase(billett.getEtternavn());
    }
}
