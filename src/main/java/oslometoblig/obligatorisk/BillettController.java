package oslometoblig.obligatorisk;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BillettController {

    @Autowired
    BillettRepository rep;

    @PostMapping("/lagre")
    public void lagreKunde(Billett billett){
        rep.lagreBillett(billett);
    }

    @GetMapping("/hentAlle")
    public List<Billett> hentAlle(){
        return rep.alleBilletter();
    }

    @GetMapping("/slettBilletter")
    public void slettAlle(){
        rep.slettAlleBilletter();
    }

    @GetMapping("/slettBillett")
    public void slettEn(int id){
        rep.slettEn(id);
    }

    @GetMapping("/hentBillett")
    public Billett hentBillett(int id){
        return rep.hentBillett(id);
    }

    @PostMapping("/endre")
    public void endre(Billett billett){rep.endreBillett(billett);}
}
