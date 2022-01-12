import React, { Component } from 'react'
import fighter1 from '../fighters/Fighter1'
import fighter2 from '../fighters/Fighter2'

class Arena extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fighter1: {
        name: '',
        hp: '',
      },
      fighter2: {
        name: '',
        hp: '',
      },
    }
    this.getFighter1 = this.getFighter1.bind(this)
    this.dealDamage1 = this.dealDamage1.bind(this)
    this.getFighter2 = this.getFighter2.bind(this)
    this.dealDamage2 = this.dealDamage2.bind(this)
  }

  getFighter1() {
    this.setState((state) => ({
      fighter1: {
        name: (state.fighter1.name = fighter1.name),
        hp: (state.fighter1.hp = 50 + fighter1.vitality * 10),
      },
    }))
  }
  dealDamage1() {
    this.setState((state) => ({
      fighter2: {
        name: (state.fighter2.name = fighter2.name),
        hp: state.fighter2.hp - 10,
      },
    }))
  }
  getFighter2() {
    this.setState((state) => ({
      fighter2: {
        name: (state.fighter2.name = fighter2.name),
        hp: (state.fighter2.hp = 50 + fighter1.vitality * 10),
      },
    }))
  }
  dealDamage2() {
    this.setState((state) => ({
      fighter1: {
        name: (state.fighter1.name = fighter1.name),
        hp: state.fighter1.hp - 10,
      },
    }))
  }
  render() {
    return (
      <div>
        <h1>Task 3</h1>
        <div>
          <h2>Fighter 1 Name: {this.state.fighter1.name}</h2>
          <h2>Fighter 1 Hp: {this.state.fighter1.hp}</h2>
          <button onClick={this.getFighter1}>Get Details</button>
          <button onClick={this.dealDamage1}>Deal Damage</button>
        </div>
        <div>
          <h2>Fighter 2 Name: {this.state.fighter2.name}</h2>
          <h2>Fighter 2 Hp: {this.state.fighter2.hp}</h2>
          <button onClick={this.getFighter2}>Get Details</button>
          <button onClick={this.dealDamage2}>Deal Damage</button>
        </div>
      </div>
    )
  }
}

export default Arena
