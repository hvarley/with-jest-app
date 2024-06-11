"use client";

import { useState } from 'react'
interface Props {
    // scooterID: number;
}

const Madetech: React.FC<Props> = () => {
    const [hired, setHired] = useState(false)

    return (
        <div>
            <h2 data-testid="test-h1">INTERVIEW KATA</h2>
            <button onClick={() => setHired(true)} data-testid="test-button1">Hire Scooter</button>
            <p data-testid="scooters-hired">Scooter hired: {hired ? "true" : "false"}</p>

        </div>
    );
};

export default Madetech;