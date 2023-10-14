import {useState} from "react";

const CounterButton  = ({color}) => {
    const [count, setCount] = useState(0);
    const handleClickButton = () => {
        setCount(prev => prev+1);
    }
    return (
            <button id='counter'
                    style={{color,}}
                    onClick={handleClickButton}>
                Clicked {count} times
            </button>
    )
};
export default CounterButton;