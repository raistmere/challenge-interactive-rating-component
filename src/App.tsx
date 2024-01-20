import { ReactNode, useEffect, useState } from 'react';
import './App.css'
import starIcon from "./assets/images/icon-star.svg";
import rateSelectedImage from "./assets/images/illustration-thank-you.svg";

function App() {
  const [selected, setSelected] = useState<String>("");
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  useEffect(() => {
    createNumRateButtons();
  }, [])

  const rateSelected = (numButton : HTMLButtonElement) => {
    let str : String = numButton.textContent ? numButton.textContent : "";
    console.log(str);
    setSelected(str);
    numButton.classList.add("selected");
  };

  const submitRating = () => {
    setIsSubmit(true);
  }

  const createNumRateButtons = () : ReactNode[] => {
    const elementButtonList : ReactNode[] = [];
    for (let i = 0; i < 5; i++) {
      let newElementButton: ReactNode = null;
      if((i+1) === Number(selected))
      {
        // Using index for key, might have to swap that out with a uuid or something.
        newElementButton = <button key={i} className="numButton selected" onClick={(e) => { rateSelected(e.currentTarget)} }>{i+1}</button>;
      }
      else {
        // Using index for key, might have to swap that out with a uuid or something.
        newElementButton = <button key={i} className="numButton" onClick={(e) => { rateSelected(e.currentTarget)} }>{i+1}</button>;
      }

      elementButtonList.push(newElementButton);
    }

    return elementButtonList;
  };

  return (
    <div id="wrapper">
      { isSubmit ? (
          <div className="thankYouBox">
            <img className='rateSelectedImage' src={rateSelectedImage} alt="An image of a processed task" />
            <div className="rateSelectedBox">
              <p>You selected {selected} out of 5</p>
            </div>
            <div className="textBox">
              <h1>Thank You!</h1>
              <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>
          </div> 
        ) : (
            <div className="rateBox">
            <div className="starBox">
              <img src={starIcon} alt="A gold star icon" />
            </div>
            <div className="textBox">
              <h1>How did we do?</h1>
              <h2>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</h2>
            </div>
            <div className="numButtonsBox">
              {createNumRateButtons()}
            </div>
            <button className="submitButton" onClick={submitRating}>SUBMIT</button>
          </div>
      )}

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  )
}

export default App
