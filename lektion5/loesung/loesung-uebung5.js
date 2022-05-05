/**
 * Loesung - Uebung 5: Schleifen
 */

/**
 * 1) Geschrieben wurde hier unsere erste for Schleife. Wie bekannt deklariert man erst die Variable i, dann schreibt
 * man die Bedingung, wie lang die Schleife ausgeführt werden soll (hier, solange i kleiner ist als 6), und schluss
 * endlich erhöht man die Variable i um 1. Der code in der Schleife wird mit jedem Durchlauf ausgeführt, weswegen man
 * jedes Mal den Durchlauf mit der Nummer des Durchlaufs angezeigt bekommt.
 */
function aufgabe1() {
    console.debug("Aufgabe 1 ==========================");

    for(let i=1; i<6; i++) {
        console.debug("Durchlauf Nummer: " + i)
    }
}

/**
 * 2) Die for Schleife funktioniert hier genauso wie in Aufgabe 1. Den Unterschied macht hier das break. Sobald unsere
 * Variable i bei 3 ankommt, sorgt das break dafür, dass unsere Schleife abgebrochen wird. Folglich werden Durchlauf 1
 * und 3 ausgeführt aber Nummer 3 wird nicht zu Ende ausgeführt, da wir hier abbrechen.
 */
function aufgabe2() {
    console.debug("Aufgabe 2 ==========================");

    for(let i=1; i<6; i++) {
        if(i==3) {
            break
        }
        console.debug("Durchlauf Nummer: " + i)
    }
}

/**
 * 3) Die for Schleife funktioniert hier fast genauso wie in Aufgabe 2. Damit du mal siehst, dass eine Schleife auch
 * abwärts zählen kann, haben wir hier i-- benutzt. Die if Abfrage funktioniert auch genauso wie in Aufgabe 2. Nur haben
 * wir hier ein continue. Wenn wir also auf den Fall i = 3 kommen, so wird dieser schlichtweg, Dank dem continue,
 * übersprungen.
 */
function aufgabe3() {
    console.debug("Aufgabe 3 ==========================");

    for(let i=5; i>0; i--) {
        if(i==3) {
            continue
        }
        console.debug("Durchlauf Nummer: " + i)
    }
}

/**
 * 4) Diese Aufgabe kann zunächst etwas schwierig gewesen sein. Wenn du hier hängen geblieben bist, dann ist das absolut
 * kein Problem! Zunächst starten wir eine erste Schleife, welche 3 Mal durchlaufen werden soll. innerhalb dieser
 * ersten Schleife starten wir noch eine zweite. Diese soll 2 Mal durchlaufen werden. Wie du siehst, wird bei jedem
 * Durchlauf der ersten Schleife die zweite Schleife vollständig und wieder von vorne Durchlaufen! Das liegt daran, dass
 * die zweite Schleife nach "Zweite Schleife j: 2" beendet wird. Daraus folgt, dass beim nächsten Durchlauf von der
 * ersten Schleife die zweite Schleife wieder bei 1 anfängt und bis 2 läuft. Dies wiederholt sich so lange, bis die
 * zweite Schleife auch beendet ist. Wenn du hierzu noch Fragen hast, dann wende dich bitte noch einmal an einen Tutor!
 * Wir erklären dir das sehr gerne noch einmal.
 */
function aufgabe4() {
    console.debug("Aufgabe 4 ==========================")

    for(let i=1; i<4; i++) {
        for(let j=1; j<3; j++) {
            console.debug("Zweite Schleife j:" + j)
        }
        console.debug("Erste Schleife i:" + i)
    }
}

/**
 * 5) In dieser Aufgabe haben wir die while Schleife eingeführt. Im Gegensatz zu der for Schleife mussten wir hier die
 * Variable i vor der Schleife festlegen. Nun wird die Schleife so lange durchlaufen, wie die Bedingung i<6 erfüllt ist.
 * Wie du siehst, wird i hier auch innerhalb der Schleife erhöht, was bei "for" oben in der runden Klammer passiert ist.
 */
function aufgabe5() {
    console.debug("Aufgabe 5 ==========================");

    let i=1
    while(i<6) {
        console.debug(i)
        i++
    }
}

/**
 * 6) Zum Schluss haben wir hier noch die do while Schleife. Diese Funktioniert fast genauso wie die while Schleife.
 * Zunächst legt man die Variable fest, startet die do Schleife und legt erst ganz am Ende mit while fest, wie oft sie
 * Durchlaufen werden soll. In unserem Fall wird die Schleife 5 Mal durchlaufen. Das Benutzen von do hat einen besonderen
 * Vorteil, welchen du in Aufgabe 7 sehen wirst.
 */
function aufgabe6() {
    console.debug("Aufgabe 6 ==========================");

    let i=1
    do {
        console.debug(i)
        i++
    }
    while(i<6)
}

/**
 * 7) In dieser Aufgabe gab es nichts zu programmieren! Du solltest die lediglich einmal anschauen, wieso dieses do so
 * nützlich sein kann. Wie du siehst, ist die Bedingung von vorneherein nicht erfüllt. Somit dürfte bei den anderen
 * Schleifenarten die Schleife gar nicht erst durchlaufen werden. Das Schlüsselwort do erlaubt es uns jedoch, dass, egal
 * was passiert, die Schleife definitiv mindestens einmal durchlaufen wird.
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