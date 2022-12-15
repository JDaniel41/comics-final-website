import React from "react";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import Benefits from "./components/Benefits";
import MeetTheCharacters from "./components/MeetTheCharacters";
import TheWhy from "./components/TheWhy";

function App() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Summary />
            <MeetTheCharacters />
            <Benefits />
            <TheWhy />
        </div>
    );
}

export default App;
