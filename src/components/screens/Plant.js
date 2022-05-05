import "./Plant.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Plant = ({ plant, addToGarden }) => {
    return (
        <div className="plant-cell">
            <div>
                <h4 className="plant-name">{plant.name}</h4>
            </div>

            {/* <FontAwesomeIcon icon="fa-solid fa-circle-plus" /> */}
            <div>
                <img className="plant-img" src={plant.image} />
            </div>

            <div className="btn-container">
                <button className="add-btn" onClick={() => addToGarden(plant)}>
                    +
                </button>
            </div>
        </div>
    );
};

export default Plant;
