package oslometoblig.obligatorisk;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Repository
public class BillettRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreBillett(Billett innBillett){
        String sql = "INSERT INTO Film (film, fornavn, etternavn, epost, antall, telefon) VALUES (?,?,?,?,?,?);";
        db.update(sql, innBillett.getFilm(), innBillett.getFornavn(), innBillett.getEtternavn(), innBillett.getEpost(), innBillett.getAntall(), innBillett.getTelefon());
    }

    public List<Billett> alleBilletter (){
        String sql = "SELECT * FROM FILM";
        List<Billett> allBilletter = db.query(sql,new BeanPropertyRowMapper(Billett.class));
        Collections.sort(allBilletter);
        return allBilletter;
    }

    public void slettAlleBilletter(){
        String sql = "DELETE FROM Film;";
        db.update(sql);
    }

    public void slettEn(int id){
        String sql = "DELETE FROM Film WHERE id=?;";
        db.update(sql, id);
    }

    public Billett hentBillett(int id){
        String sql = "SELECT * FROM Film WHERE ID =?;";
        List<Billett> billetten = db.query(sql, new BeanPropertyRowMapper<>(Billett.class), id);
        return billetten.get(0);
    }

    public void endreBillett(Billett innBillett){
        String sql = "UPDATE Film SET film=?, fornavn=?, etternavn=?, epost=?, antall=?, telefon=? WHERE id=?;";
        db.update(sql, innBillett.getFilm(), innBillett.getFornavn(), innBillett.getEtternavn(), innBillett.getEpost(), innBillett.getAntall(), innBillett.getTelefon(), innBillett.getId());

    }



}
