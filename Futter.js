class Lebensmittelliste {
  liste = []

  constructor(artikel) {
    this.artikel = artikel
  }

  artikelHinzufuegen(artikel) {
    this.liste.push(artikel)
    console.debug(artikel,"wurde erfolgrreich hinzugefügt")
  }

  artikelsHinzufuegen(artikel) {

    for (let mehrereartikel of artikel) {
      this.liste.push(mehrereartikel)
      console.debug(mehrereartikel,"wurde erfolgrreich hinzugefügt")
    }

    //for (let i = 0; i < artikel.length; i++) {
    // this.liste.push(artikel[i])
    // }

  }

  sortieren() {
    this.liste.sort()
  }
}

class Lebensmittel {
  constructor(art,MHD,anzahl) {
    this.art = art
    this.MHD = MHD
    this.anzahl = anzahl
  }

}

let art1 = new Lebensmittel("Mehl","1/24",2)
let art2 = new Lebensmittel("Reis","3/24",1)
let art3 = new Lebensmittel("Banane",0,8)
let art4 = new Lebensmittel("Weltmeister",0,1)
let art5 = new Lebensmittel("Weizen Toast",0,2)
let art6 = new Lebensmittel("Vollkorn Toast",0,3)
let art7 = new Lebensmittel("Wasser",0,34)
let art8 = new Lebensmittel("Milch","12/22",49)
let art9 = new Lebensmittel("Gouda","22/5/22",1)
let art10 = new Lebensmittel("Tillsitter","26/5/22",2)
let art11 = new Lebensmittel("Kaffee","2/24",4)
let art12 = new Lebensmittel("Margarine",0,2)
let art13 = new Lebensmittel("Oliven Öl",0,3)
let art14 = new Lebensmittel("Frittier Öl 3L",0,2)
let art15 = new Lebensmittel("Öl 1L",0,4)
let art16 = new Lebensmittel("Kakao","5/23",2)
let art17 = new Lebensmittel("Paprika TK",0,3)
let art18 = new Lebensmittel("Hackfleisch 500G",0,)
let art19 = new Lebensmittel("Bratwurst 5er TK",0,4)
let art20 = new Lebensmittel("Schweinefilet",0,4)
let art21 = new Lebensmittel("")
let art22 = new Lebensmittel
let art23 = new Lebensmittel

let milchProdukte = new Lebensmittelliste("Milch Produkte")
let milchArray = [art8,art9,art10]
milchProdukte.artikelsHinzufuegen(milchArray)

let brotListe = new Lebensmittelliste("Brot")
brotListe.artikelHinzufuegen(art4)
brotListe.artikelHinzufuegen(art5)
brotListe.artikelHinzufuegen(art6)


let getraenkeListe = new Lebensmittelliste("Getränke")
getraenkeListe.artikelHinzufuegen(art7)
getraenkeListe.artikelHinzufuegen(art11)

let fruechteListe = new Lebensmittelliste("Früchte")
fruechteListe.artikelHinzufuegen(art3)

let getreideListe = new Lebensmittelliste("Getreide")
getreideListe.artikelHinzufuegen(art1,art2)

let fettListe = new Lebensmittelliste("Fette und Öle")
let fettArray = [art12,art13,art14,art15]
fettListe.artikelsHinzufuegen(fettArray)

let gruppenArray = [milchProdukte,brotListe,getreideListe,getraenkeListe,fettListe,fruechteListe]
//console.debug(gruppenArray)
for(let gruppe of gruppenArray ){
  console.debug("\n"+gruppe.artikel+":\n")

  for(let artikel of gruppe.liste){
    console.debug(artikel.art + " ,MHD: " + artikel.MHD + " ,Anzahl: " + artikel.anzahl)
  }
}