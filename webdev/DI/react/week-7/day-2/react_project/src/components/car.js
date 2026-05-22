import { useState } from 'react';
import Garage from './garage';

function Car(carInfo) {
    const [colour, setColour] = useState("red");
    return (
        <div>
            <h1>This car is {colour}</h1>
            <button onClick={() => setColour("blue")}>Change colour</button>
            <h>This car is {carInfo.model}</h>
            <Garage size="small" />
        </div>
    );
}

export default Car;
