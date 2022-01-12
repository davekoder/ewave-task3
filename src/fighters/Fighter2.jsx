class Fighter2 {
  constructor(name, maxPoints, strength, agility, vitality) {
    this.name = name
    this.maxPoints = maxPoints
    this.strength = strength
    this.agility = agility
    this.vitality = vitality
  }
}

const fighter = new Fighter2('Tony', 30, 10, 10, 10)
export default fighter
