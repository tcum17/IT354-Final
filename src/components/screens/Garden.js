import React from "react";
import "./Garden.css";
import { Link } from "react-router-dom";

const Garden = ({ garden, deletePlant }) => {
    return (
        <div>
            <h1 className="title">My Garden</h1>
            <div className="garden-container"></div>
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
            <div className="garden-list">
                {garden.map((plant) => (
                    <div className="plant-container">
                        <div className="plant-card">
                            <h3 className="plantName">
                                {plant.name}
                                <i
                                    className="fas fa-times x-icon"
                                    onClick={() => deletePlant(plant)}
                                ></i>
                            </h3>
                            <div className="img-container">
                                <img className="garden-img" src={plant.image} />
                            </div>
                            <div className="plantInfo-container">
                                <ul className="plantInfo">
                                    <li>
                                        <b>Family:</b> {plant.family}
                                    </li>
                                    <li>
                                        <b>Category:</b> {plant.category}
                                    </li>
                                    <li>
                                        <b>Difficulty:</b> {plant.difficulty}
                                    </li>
                                    <li>
                                        <b>Size:</b> {plant.size}
                                    </li>
                                    <li>
                                        <b>Growth Rate:</b> {plant.growth}
                                    </li>
                                    <li>
                                        <b>Light Amount:</b> {plant.light}
                                    </li>
                                    <li>
                                        <b>Humidity:</b> {plant.humidity}
                                    </li>
                                    <li>
                                        <b>Toxicity:</b> {plant.toxicity}
                                    </li>
                                    <li>
                                        <b>Watering:</b> {plant.water}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Garden;
