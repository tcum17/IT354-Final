import React from "react";
import { useState } from "react";
import "./Catalogue.css";
import Plants from "./Plants";

const Catalogue = ({ plants, addToGarden, garden }) => {
    const categories = ["POPULAR", "SUCCULENT", "FOLIAGE", "FLOWERING"];
    const [categoryIndex, setCategoryIndex] = useState(0);

    return (
        <div>
            <h1 className="title">Plant Catalgoue</h1>
            <div className="container">
                <div className="categoryContainer">
                    {categories.map((item, index) => (
                        <h3
                            className={[
                                categoryIndex === index
                                    ? "categorySelected"
                                    : "category",
                            ]}
                            onClick={() => setCategoryIndex(index)}
                        >
                            {item}
                        </h3>
                    ))}
                </div>
            </div>
            {categoryIndex === 0 && (
                <Plants
                    plants={plants}
                    addToGarden={addToGarden}
                    garden={garden}
                />
            )}
            {categoryIndex === 1 && (
                <Plants
                    plants={plants.filter(
                        (plant) => plant.category === "succulent"
                    )}
                    addToGarden={addToGarden}
                    garden={garden}
                />
            )}
            {categoryIndex === 2 && (
                <Plants
                    plants={plants.filter(
                        (plant) => plant.category === "foliage"
                    )}
                    addToGarden={addToGarden}
                    garden={garden}
                />
            )}
            {categoryIndex === 3 && (
                <Plants
                    plants={plants.filter(
                        (plant) => plant.category === "flowering"
                    )}
                    addToGarden={addToGarden}
                    garden={garden}
                />
            )}
        </div>
    );
};

export default Catalogue;
