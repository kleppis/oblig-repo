CREATE TABLE Film (
    id INTEGER NOT NULL AUTO_INCREMENT,
    film VARCHAR(100) NOT NULL,
    fornavn VARCHAR(50) NOT NULL,
    etternavn VARCHAR(50) NOT NULL,
    epost VARCHAR(50) NOT NULL,
    antall VARCHAR(10) NOT NULL,
    telefon CHAR(8) NOT NULL,
    PRIMARY KEY (id)
);