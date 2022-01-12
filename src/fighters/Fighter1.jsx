class Fighter1 {
  constructor(name, maxPoints, strength, agility, vitality) {
    this.name = name
    this.maxPoints = maxPoints
    this.strength = strength
    this.agility = agility
    this.vitality = vitality
    this.state = {
      name: name,
      hp: vitality,
    }
  }
}

const fighter = new Fighter1('Bruce', 30, 10, 10, 10)
export default fighter
