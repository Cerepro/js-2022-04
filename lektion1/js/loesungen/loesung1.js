/**
 * Tag 1: Variablen & Datentypen
 */

/**
 * Schreibe und fülle drei Variablen. Diese sollen als Bezeichner "artikel" +  eine aufsteigende Zahl haben.
 * Die Variablen erhalten folgende Zeichenketten: `Brokkoli`, `Reis`, `Streukäse`
 * Erzeuge mithilfe der Variablen eine Konsolenausgabe für jede Variable, die wie folgt aussieht:
 * `"artikel1 = " + artikel1`
 */
function tag1_Artikel() {
  console.debug("Aufgabe 1 --------------------------")
  let artikel1 = "Brokkoli"
  let artikel2 = "Reis"
  let artikel3 = `Streukäse`

  console.debug("artikel1 = " + artikel1)
  console.debug("artikel2 = " + artikel2)
  console.debug("artikel3 = " + artikel3)
}

/**
 * Erstelle eine Variable `gruppenCounter` und fülle sie mit dem Wert `1`.
 * Erstelle eine Variable `gruppenId` und fülle sie mit dem Wert `0`.
 * Erstelle eine Variable `gruppenIndex` und fülle sie mit dem Wert `1`.
 * Erstelle eine Variable `gruppenName` und fülle sie mit dem Wert `"Obst & Gemüse"`.
 * Erstelle eine Variable `artikelListe1` und fülle sie mit dem Wert `["Brokkoli"]`.
 * Erstelle eine Konsolenausgabe nach dem Schema aus Aufgabe 1, also wie folgt:
 * `"gruppenCounter = " + gruppenCounter`.
 * Gib auf diese Art alle Variablen aus.
 */
function tag1_Gruppe() {
  console.debug("\nAufgabe 2 --------------------------")
  let gruppenCounter = 1
  let gruppenId = 0
  let gruppenIndex = 1
  let gruppenName = "Obst & Gemüse"
  let artikelListe1 = ["Brokkoli"]

  console.debug("gruppenCounter = " + gruppenCounter)
  console.debug("gruppenId = " + gruppenId)
  console.debug("gruppenIndex = " + gruppenIndex)
  console.debug("gruppenName = " + gruppenName)
  console.debug("artikelListe1 = " + artikelListe1)
}

/**
 * Erstelle eine Variable `gruppenListe` ohne einen Wert.
 * Erstelle eine Variable `aktiveGruppe` und fülle sie mit dem Wert `null`.
 * Erstelle eine Variable `setup` und fülle sie mit dem Wert `"new Setup()"`.
 * Erstelle eine Konsolenausgabe nach dem Schema aus Aufgabe 1, also wie folgt:
 * `"gruppenListe = " + gruppenListe`.
 * Gib auf diese Art alle Variablen aus.
 */
function tag1_Einkaufsliste() {
  console.debug("\nAufgabe 3 --------------------------")
  let gruppenListe
  let aktiveGruppe = null
  let setup = "new Setup()"

  console.debug("gruppenListe = " + gruppenListe)
  console.debug("aktiveGruppe = " + aktiveGruppe)
  console.debug("setup = " + setup)
}

/**
 * Erstelle eine Variable `farbthema` und fülle sie mit dem Wert `Rot`.
 * Erstelle eine Variable `schriftGroesse` und fülle sie mit dem Wert `Groß`
 * Erstelle eine Variable `schriftFamilie` und fülle sie mit dem Wert `Roboto`
 * Erstelle eine Variable `bild` und fülle sie mit dem Wert `"../img/markt.jpg"`
 * Erstelle eine Konsolenausgabe nach dem Schema aus Aufgabe 1, also wie folgt:
 * `"farbthema = " + farbthema`
 * Gib auf diese Art alle Variablen aus.
 */
function tag1_zusatz_Einstellungen() {
  console.debug("\nZusatzaufgabe ----------------------")
  let farbthema = "Rot"
  let schriftGroesse = "Groß"
  let schriftFamilie = "Roboto"
  let bild = "../img/markt.jpg"

  console.debug("farbthema = " + farbthema)
  console.debug("schriftGroesse = " + schriftGroesse)
  console.debug("schriftFamilie = " + schriftFamilie)
  console.debug("bild = " + bild)
}


/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
  console.debug("[Tag 1] ============================")
  tag1_Artikel()
  tag1_Gruppe()
  tag1_Einkaufsliste()
  tag1_zusatz_Einstellungen()
}
main()
