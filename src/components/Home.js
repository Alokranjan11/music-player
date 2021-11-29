import React from "react";
// import CurrentPlay from "./CurrentPlay";
import "./Home.css";
import List from "./List.js"

const Home = () => {
    return (
        <div>
            <div className="home">
                <img src="/img/music.jpeg" alt="musicpic"/>
            </div>
            <List></List>
        </div>
    );
};
export default Home;
