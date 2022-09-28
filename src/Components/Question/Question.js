import React from 'react';

const Question = () => {
    return (
        <div>
            <h3>How Does React Work?</h3>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            <h3>Props vs State in React?</h3>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
            <h3>useEffect use cases in React</h3>
            <p>1. Running on state change: validating input field <br />
                2. Running on state change: live filtering <br />
                3. Running on state change: trigger animation on new array value <br />
                4. Running on props change: update paragraph list on fetched API data update <br />
                5. Running on props change: updating fetched API data to get BTC updated price</p>
        </div>
    );
};

export default Question;