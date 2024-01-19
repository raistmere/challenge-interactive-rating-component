import './App.css'
import starIcon from "./assets/images/icon-star.svg";
import rateSelectedImage from "./assets/images/illustration-thank-you.svg";

function App() {
  return (
    <div id="wrapper">

      {/* <div className="rateBox">
        <div className="starBox">
          <img src={starIcon} alt="A gold star icon" />
        </div>
        <div className="textBox">
          <h1>How did we do?</h1>
          <h2>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</h2>
        </div>
        <div className="numButtonsBox">
          <button className="numButton">1</button>
          <button className="numButton">2</button>
          <button className="numButton">3</button>
          <button className="numButton">4</button>
          <button className="numButton">5</button>
        </div>
        <button className="submitButton">SUBMIT</button>
      </div> */}

      <div className="thankYouBox">
        <img className='rateSelectedImage' src={rateSelectedImage} alt="An image of a processed task" />
        <div className="rateSelectedBox">
          <p>You selected 4 out of 5</p>
        </div>
        <div className="textBox">
          <h1>Thank You!</h1>
          <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
      </div>


      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  )
}

export default App
