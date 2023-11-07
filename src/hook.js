import { useState } from "react";
import "./hook.css";
function HookComponent(){
    const [numberOfClicks , setNumberOfClicks] = useState(0);

    function onClickFunction(){
        const newNumberOfClicks = numberOfClicks + 1;
        setNumberOfClicks(newNumberOfClicks);
    }

    return(
        <div>
            <span>
                {numberOfClicks}
            </span>
            <button id="myButton" onClick={onClickFunction}>click</button>
        </div>
    );
}
export default HookComponent;