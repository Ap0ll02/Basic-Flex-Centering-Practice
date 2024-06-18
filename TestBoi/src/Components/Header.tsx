// Imports for useState to help with updating displayed variables
import { useState } from "react";

function Header() {
    // Score variable and it's setter variable
    const [score, setScore] = useState(0);

    const scoreUpdate = () => {
        setScore(score + 1);
    };

    return (
        // Outer Div Scoreboard, this can be thought of as
        // one square scoreboard, which can go on a page, but needs a holding
        // container to be aligned or placed.
        <div className="scoreboard">
            {/* Inner Elements, A button and a header */}
            <button onClick={scoreUpdate}>
            Click Me!</button>
            <h1>Score: {score}</h1>
        </div>
    );
}
export default Header