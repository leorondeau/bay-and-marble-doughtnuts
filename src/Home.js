import React from 'react';
import { TakeNum } from './TakeNum';

export const Home = (props) => {


    const bakers = ["Anita", "Ginger", "Dusty", "Josephine"]



    return (
        <>
            <TakeNum />
            <h1>Welcome to Bay and Marble Doughnuts, {props.user.name}</h1>
            <p>We have great doughnuts</p>
            <h2>Our Bakers:</h2>
            <ul>
                {bakers.map((b, i) => <li key={i}>{b}</li>)}
            </ul>

        </>
    )
}