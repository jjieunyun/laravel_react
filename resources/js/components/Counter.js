import React,{useState} from 'react';
import ReactDOM from 'react-dom';

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => prevCount -1);
    }

    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <span> {count} </span>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
};

if (document.getElementById('counter')) {
    ReactDOM.render(<Counter />,  document.getElementById('counter'));
}

if (document.getElementById('counter')) {
    ReactDOM.render(<Counter/>, document.getElementById('counter'));
}
