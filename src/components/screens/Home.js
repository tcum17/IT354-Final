import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Plant from "./Plant";

const Home = ({ garden }) => {
    return (
        <div>
            <h1 className="title">Welcome!</h1>
            {garden.length === 0 && (
                <div>
                    <h3 className="subtitle">
                        There are currently no plants in your garden
                    </h3>
                    <div className="btnContainer">
                        <Link className="route-btn" to={"/catalogue"}>
                            Click Here to Add Plants
                        </Link>
                    </div>
                </div>
            )}
            <h2 className="subtitle">Plants to Water Today:</h2>
            <div class="garden-list">
                {garden
                    .filter((plant) => plant.interval < 7)
                    .map((plant) => (
                        <div>
                            <h3 className="plantName">{plant.name}</h3>
                            <div className="img-container">
                                <img className="garden-img" src={plant.image} />
                            </div>
                            <div className="plantInfo-container">
                                <ul className="plantInfo">
                                    <li>
                                        <b>Water Today:</b>
                                    </li>
                                    <li>
                                        <b>Watering:</b> {plant.water}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Home;
