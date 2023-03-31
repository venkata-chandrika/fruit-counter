// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mango: 0,
    banana: 0,
  }

  onMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="container">
        <div className="card-item">
          <h1>
            Bob ate <span className="count">{mango} </span>mangoes
            <span className="count">{banana} </span> bananas
          </h1>
          <div className="image-container">
            <div className="image-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button type="button" onClick={this.onMango} className="button">
                Eat mango
              </button>
            </div>
            <div className="image-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button type="button" onClick={this.onBanana} className="button">
                Eat banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
