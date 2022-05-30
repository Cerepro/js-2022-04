/**         Es gibt 5 DATENTYPEN
 * */


/** Datentyp 1: Ist eine Zahl (z.B. 8 )**/

let zahl = 8

/** Datentyp 2: Ist ein string (ist immer ein text und wird mit "" ) gekennzeichnet (z.B. Hallo Welt )**/

let string = "Hallo Welt"

/** Datentyp 3: Ist ein Boolean (ein Boolean ist immer die Aussage "wahr" oder "falsch") (true & false )**/

let boolean = true & false

/** Datentyp 4: Ist ein Object (z.B. map, array, variable )**/

//let pizza = ["Tomate", "Salami", 8, true] <---  das ist ein Array [Ein Array funktioniert wie eine Liste!]

let object = {
  name: "Martin Richter",
  alter: 32,
  groeße: 1.82

}
console.debug(object)

/** Datentyp 5: Ist eine function (eine function ist hat eine Funktion wie ein Miniprogramm) (z.B. function heute() )**/

function heute() {
  let ampel = "gruen"

  if (ampel == "gruen") {
    console.debug("Die Farbe ist grün", true)
  }
}
heute()
//let _function = function heute () {
  //console.debug(heute, true)
//}

