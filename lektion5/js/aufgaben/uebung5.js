/**
 * Uebung 5: Schleifen
 */

/**
 * 1) Schreibe deine for Schleife.
 */
function aufgabe1() {
  console.debug("Aufgabe 1 ==========================");

  //ToDo: füge ab hier Deinen Code ein
  for(let i=1; i < 6; i++) {
    console.debug("Durchlauf Nummer:", i)
  }
}

/**
 * 2) Füge break ein.
 */
function aufgabe2() {
  console.debug("Aufgabe 2 ==========================");

  for(let i=1; i<6; i++) {
    if(i==3)break; {

      //ToDo: füge ab hier Deinen Code ein
    }
    console.debug("Durchlauf Nummer: " + i)
  }
}

/**
 * 3) Füge wie bei der 2 ein if ein in welchem du continue einfügen sollst.
 */
function aufgabe3() {
  console.debug("Aufgabe 3 ==========================");

  for(let i=5; i>0; i--) {
    //ToDo: füge ab hier Deinen Code ein
    if(i==3)
    continue
    console.debug("Durchlauf Nummer: " + i)
  }
}

/**
 * 4) Schreibe deine verschachtelte for Schleife.
 */
function aufgabe4() {
  console.debug("Aufgabe 4 ==========================")
  let i;
  for (i=1; i<=3; i++) {
    for (j=1; j<=2; j++){
      console.log("Zweite Schleife j:", j)
    }
    console.log("Erste Schleife i:", i)
      }
  //ToDo: füge ab hier Deinen Code ein
}

/**
 * 5) Schreibe deine while Schleife.
 */
function aufgabe5() {
  console.debug("Aufgabe 5 ==========================");

  let i=1
  //ToDo: füge ab hier Deinen Code ein
  while (i <=5){
    console.debug(i)
    i +=1;
  }
}

/**
 * 6) Schreibe deine do while Schleife
 */
function aufgabe6() {
  console.debug("Aufgabe 6 ==========================");

  //ToDo: füge ab hier Deinen Code ein
  let  i = 1
  do {
    console.debug(i);
    i++
  }
while (i<6)
}

/**
 * 7) Zur Veranschaulichung. Du musst nicht selbst coden!
 */
function aufgabe7() {
  console.debug("Aufgabe 7 ==========================");

  let i=1
  do {
    console.debug(i)
    i++
  }
  while(i<0)
}

/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
  aufgabe1()
  aufgabe2()
  aufgabe3()
  aufgabe4()
  aufgabe5()
  aufgabe6()
  aufgabe7()
}
main()