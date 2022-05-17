class Artikel {
    // React benötigt eindeutige IDs für seine Elemente, welche dieser Zähler erzeugt
    static counter = 1
    // Felder
    name;
    gekauft;
    index;
    id;

    /**
     * Erzeugt einen {@link Artikel}
     * @param {string}artikelName - Name des neuen Artikels
     * @param {number} position - Position innerhalb der Artikelliste
     */
    constructor(artikelName, position) {
        this.name = artikelName
        this.gekauft = false
        this.index = position
        this.id = Artikel.counter++
    }
}

class Gruppe {
    // React benötigt eindeutige IDs für seine Elemente, welche dieser Zähler erzeugt
    static counter = 1
    name; artikelListe; index; id;

    constructor(name, index) {
        this.id = Gruppe.counter++
        this.index = index
        this.name = name
        this.artikelListe = []
    }

    artikelAuflisten(gekauft) {
        for (let artikel of this.artikelListe) {
            if (artikel.gekauft == gekauft) {
                console.debug(`  ${artikel.name}`)
            }
        }
    }


}

class Shopping {

    aktiveGruppe = null
    // this.setup = new Setup()
    gruppenListe = [];

    gruppeFinden(name) {
        let gefundeneGruppe = this.gruppenListe.indexOf(name)
        if (gefundeneGruppe > -1) {
            return this.gruppenListe[gefundeneGruppe]
        } else {
            console.warn("Gruppe \"" + name + "\" nicht gefunden")
            return null
        }
    }

    gruppeHinzufuegen(name) {
        const gleicheGruppen = this.gruppenListe.indexOf(name)
        // keine Gruppe mit diesem Namen vorhanden
        if (gleicheGruppen == -1) {
            let neueGruppe = name
            this.gruppenListe.push(neueGruppe)
            this.aktiveGruppe = neueGruppe
            console.debug("[App] Gruppe \"" + neueGruppe + "\" hinzugefügt")
            return neueGruppe
        } else {
            console.warn("Gruppe \"" + name + "\" existiert schon!")
        }
    }

}

export {Gruppe, Artikel, Shopping}