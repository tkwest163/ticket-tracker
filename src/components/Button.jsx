import { useState } from "react";
import plusButton from "../images/add_FILL0_wght400_GRAD0_opsz48.svg";
import minusButton from "../images/remove_FILL0_wght400_GRAD0_opsz48.svg";
import "./Button.scss";

const Button = () => {
    const [counter, setCounter] = useState(0);

const handleIncrement = () => {
  setCounter(counter + 1);
}

const handleDecrement = () => {
  counter > 0 ? setCounter(counter - 1) : alert("Value cannot be less than 0");
}


return (
<div className="counter-buttons">
    
<img src={minusButton}
    alt="minus button"
    onClick={handleDecrement}
    className="minus__button"
    />
    {counter}
    <img src={plusButton}
    alt="plus button"
    onClick={handleIncrement}
    className="plus__button"
    />
    
   
</div>
);
};

export default Button;