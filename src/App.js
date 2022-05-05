import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/screens/Home";
import Catalogue from "./components/screens/Catalogue";
import { Routes, Route, Link } from "react-router-dom";
import PLANTS from "./components/consts/plants";
import { useState } from "react";
import Garden from "./components/screens/Garden";

function App() {
    const [garden, setGarden] = useState(() => {
        const saved = localStorage.getItem("garden");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });

    useEffect(() => {
        localStorage.setItem("garden", JSON.stringify(garden));
    }, [garden]);

    const addToGarden = (plant) => {
        console.log("Success");
        alert("Added " + plant.name + " to garden");
        setGarden([...garden, { ...plant }]);
    };

    const deletePlant = (plantToRemove) => {
        console.log("Delete", plantToRemove.name);
        setGarden(garden.filter((plant) => plant !== plantToRemove));
    };

    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home garden={garden} />} />
                <Route
                    exact
                    path="/catalogue"
                    element={
                        <Catalogue
                            plants={PLANTS}
                            garden={garden}
                            addToGarden={addToGarden}
                        />
                    }
                />
                <Route
                    exact
                    path="/garden"
                    element={
                        <Garden garden={garden} deletePlant={deletePlant} />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
