import React, {useState} from 'react';

const State = () => {
    return (
        <div className='main'>
            <div className='mainDiv'>
                <ul>
                    <dt>useState is Unique to Functional Components</dt>
                    <dd>Class components have a separate meaning of using and changing state.</dd>
                    <dt>useState Uses Array Destructuring</dt>
                    <dd>useState proves a state variable and a setState function</dd>
                    <dt>useState is a Hook</dt>
                    <dd>useState is a hook baked in React</dd>
                    <dt>Triggers Re-renders</dt>
                    <dd>Like with props changes, changing the state of a component re-renders the whole component.</dd>
                </ul>
                <StateExample />
            </div>
        </div>
    );
};

export default State;

function StateExample() {
    const [text, setText] = useState('');
    const [likeNum, setLikeNum] = useState(0);
    const [textColor, setTextColor] = useState('blue');

    return(
        <div>
            <input value={text} onChange={e => setText(e.target.value)}/>
            <br/>
            <img style ={{ width: '100px', height: '100px' }} src="https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png" onClick={e => setLikeNum(likeNum + 1)}/>
            <span>{likeNum}</span>
            <br/>
            <br/>
            <br/>
            <br/>
            <p style={{ color: textColor }} onMouseEnter={e => setTextColor('red')} onMouseLeave={e => setTextColor('blue')}>THE MOUSE IS BLUE</p>
        </div>
    );
};