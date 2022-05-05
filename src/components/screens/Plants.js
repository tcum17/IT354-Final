import React from "react";
import { useState } from "react";
import PLANTS from "../consts/plants";
import Plant from "./Plant";
import "./Plant.css";

const Plants = ({ plants, addToGarden, garden }) => {
    return (
        <div className="plant-container">
            {plants.map((plant) => (
                <Plant key={plant.id} plant={plant} addToGarden={addToGarden} />
            ))}
        </div>
    );
};

export default Plants;
