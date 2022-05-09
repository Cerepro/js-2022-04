/**
 * Uebung 6: Funktionen
 */

/**
 * 1) Hier hast du ganz einfach deine bereits bekannte console.debug Funktion geschrieben. Lass dich von der Punkt schreibweise
 * nicht beirren. Das hat was mit Klassen zu tun, welche du erst in der nächsten Lektion lernst!
 */
function aufgabe1() {
  console.debug("Aufgabe 1 ==========================")

  console.debug("Diese Funktion kenne ich bereits!")
}

/**
 * 2) Hier hast du deinen ersten Parameter geschrieben. Du hast deine Funktion erstellt mit dem Schluesselwort function,
 * ihr den namen sagHallo gegeben und dann in den runden Klammern den geforderten Parameter definiert. In den geschweiften
 * Klammern steht, was die Funktion denn tatsächlich macht. Wie du siehst, haben wir hier die debug Funktion innerhalb der
 * sagHallo funktion verwendet. Also weiß die sagHallo funktion, dass du direkt den Parameter ausgeben möchtest!
 */
function aufgabe2() {
  console.debug("Aufgabe 2 ==========================")

  function sagHallo(name) {
    console.debug("Hallo " + name)
  }

  sagHallo("Peter")
}

/**
 * 3) Hier hast du dein erstes Argument benutzt. Die sagBye Funktion funktioniert genauso, wie die sagHallo Funktion aus
 * Aufgabe 2. Wenn du hier in deine sagBye Funktion das Argument Peter benutzt, dann wird mit Peter die Funktion ausgeführt.
 * Sprich das, was in den geschweiften Klammern steht. Dort steht bei uns die bekannte console.debug Funktion. In dieser
 * wird dann Bye + dem eingegebenen Argument Peter ausgegeben!
 */
function aufgabe3() {
  console.debug("Aufgabe 3 ==========================");

  function sagBye(name) {
    console.debug("Bye " + name)
  }

  sagBye("Peter")
}

/**
 * 4) Diese Funktion, welche du nun komplett selbst geschrieben hast, funktioniert genauso wie die Funktionen aus Aufhabe
 * 2 und 3. Erst schreibst du die Funktion, legst den Parameter fest, programmierst, in den geschweiften Klammern, was die
 * Funktion tun soll und rufst am Ende die Funktion mit dem Argument auf.
 */
function aufgabe4() {
  console.debug("Aufgabe 4 ==========================");

  function willkommenZurueck(name) {
    console.debug("Da bist du ja wieder " + name)
  }

  willkommenZurueck("Peter")
}

/**
 * 5) Hier hast du deinen eigenen return geschrieben. Returns sind wichtig, um Werte auch tatsächlich zurückzugeben. Genutzt
 * werden returns meistens in mathematischen Funktionen, wie hier der Multiplikation. Wenn du also nun als Argument zwei
 * Zahlen eingibst, weiß das Programm, dass du das Ergebnis der Multiplikation behalten möchtest. Die console.debug Funktion
 * sorgt dann dafür, dass das Ergebnis auch wirklich ausgegeben wird.
 */
function aufgabe5() {
  console.debug("Aufgabe 5 ==========================");

  function multiplizieren(a, b) {
    return a * b
  }

  console.debug(multiplizieren(3, 5))
}

/**
 * 6) Hier hast du deine erste rekursive Funktion geschrieben. Typische Beispiele für eine rekursive Funktion sind immer
 * entweder die Fakultaet oder die Fibonacci-Folge. Entschieden haben wir uns hier für die Fakultaet, da die Fakultaet,
 * da diese das einfachere Konzept der beiden ist. Die Funktion funktioniert genauso wie jede andere Funktion, die wir bisher
 * benutzt haben. Der Einzige unterschied: Sie ruft sich selbst immer wieder auf! Was bedeutet das also nun für unsere
 * Fakultaet?
 * Zunächst haben wir die Funktion wieder mit function erstellt und ihr den Namen fakultaet gegeben. Den Parameter haben
 * wir als eine Variable a gewaehlt. Für diese benutzen wir später als Argument eine Zahl.
 * im nächsten Schritt müssen wir als Erstes die Abbruchbedingung festlegen. Diese sorgt dafür, dass unsere Funktion nicht
 * unendlich oft ausgeführt wird. 0 macht Sinn für die Fakultaet, da wir bei negativen Zahlen nicht weiterkommen mit der
 * Fakultaet.
 * Genau für den Fall, dass unsere Zahl 0 ist, geben wir 1 zurück, da die Fakultaet von 0 gleich 1 ist.
 * Ansonsten wird die Fakultät erneut mit aufgerufen, wobei diese mit dem aktuellen a multipliziert wird. Beim rekursiven
 * Aufrufen wird die Funktion dann mit dem Parameter a-1 benutzt, damit unser Wert sich auch tatsaechlich Richtung 0
 * verringert.
 * Schlussendlich benutzen wir dann noch die console.debug Funktion, um unseren gewünschten Wert auszugeben!
 */
function aufgabe6() {
  console.debug("Aufgabe 6 ==========================");

  function fakultaet(a) {
    if (a == 0) {
      return 1;
    }
    return fakultaet(a - 1) * a;
  }

  console.debug(fakultaet(5))
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
}
main()