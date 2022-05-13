class Artikel {
  static counter = 1
  name
  position
  gekauft = false
  id = Artikel.counter++

  constructor(name, position, gekauft, id) {
    this.name = name
    this.position = position
    this.gekauft = gekauft
    this.id = id
  }
}

export default Artikel