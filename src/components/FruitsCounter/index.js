// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {item1: 0, item2: 0}

  Onitem1click = () => {
    this.setState(prevState => ({item1: prevState.item1 + 1}))
  }

  Onitem2click = () => {
    this.setState(prevState => ({item2: prevState.item2 + 1}))
  }

  render() {
    const {item1, item2} = this.state
    return (
      <div className="bg-container">
        <div className="fruit-conatiner">
          <h1 className="heading">
            Bob ate <span className="addcolor">{item1}</span> mangoes
            <span className="addcolor">{item2}</span> bananas
          </h1>
          <div className="fruits">
            <div className="mango">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image1"
              />
              <button className="fruit1" onClick={this.Onitem1click}>
                Eat Mango
              </button>
            </div>
            <div className="Banana">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image2"
              />
              <button className="fruit1" onClick={this.Onitem2click}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
