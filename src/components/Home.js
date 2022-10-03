import React, { useState } from 'react';
import SelectionModal from "./SelectionModal";
import BuildSummary from "./BuildSummary"
import ItemButton from "./ItemButton"
import FadeIn from 'react-fade-in/lib/FadeIn';
import "../css/Home.css";
import {queryChest, queryHead, queryLegs, queryAccessories} from "./JsonManager";

function Home() {

    const [modalType, setModalType] = useState("head");

    // Stores the data that the user has selected
    const [data, setData] = useState({
        head: 0,
        chest: 0,
        legs: 0,
        accessory1: 0,
        accessory2: 0,
        accessory3: 0,
        accessory4: 0,
        accessory5: 0
    });

    const selectionModalClick = modalType => () => {
        setModalType(modalType);
        document.getElementById("selectionModal").style.display = "block";
    }

    const handleChange = (name, value) => {
        setData( prev => ({
            ...prev,
            [name]: parseInt(value)
        }));
        handleClose();
    };

    function handleClose () {
        document.getElementById("selectionModal").style.display = "none";
    }

    return (
        <div>
            <div id="buildSelection">
                <div>
                    <div style={{display: "inline-block"}}>
                        <p className="itemHeader">Head</p>
                        <ItemButton onClick={selectionModalClick("head")} item={queryHead(data.head)} />
                    </div>
                    <div style={{display: "inline-block"}}>
                        <p className="itemHeader">Chest</p>
                        <ItemButton onClick={selectionModalClick("chest")} item={queryChest(data.chest)} />
                    </div>
                    <div style={{display: "inline-block"}}>
                        <p className="itemHeader">Legs</p>
                        <ItemButton onClick={selectionModalClick("legs")} item={queryLegs(data.legs)} />
                    </div>
                </div>
                <div>
                    <div style={{display: "inline-block"}}>
                        <p className="itemHeader">Accessory 1</p>
                        <ItemButton onClick={selectionModalClick("accessory1")} item={queryAccessories(data.accessory1)} />
                    </div>
                    <div style={{display: "inline-block"}}>
                        <p className="itemHeader">Accessory 2</p>
                        <ItemButton onClick={selectionModalClick("accessory2")} item={queryAccessories(data.accessory2)} />
                    </div>
                    <div style={{display: "inline-block"}}>
                        <p className="itemHeader">Accessory 3</p>
                        <ItemButton onClick={selectionModalClick("accessory3")} item={queryAccessories(data.accessory3)} />
                    </div>
                    <div style={{display: "inline-block"}}>
                        <p className="itemHeader">Accessory 4</p>
                        <ItemButton onClick={selectionModalClick("accessory4")} item={queryAccessories(data.accessory4)} />
                    </div>
                    <div style={{display: "inline-block"}}>
                        <p className="itemHeader">Accessory 5</p>
                        <ItemButton onClick={selectionModalClick("accessory5")} item={queryAccessories(data.accessory5)} />
                    </div>
                </div>
                <SelectionModal
                    data={data}
                    setData={setData}
                    modalType={modalType}
                    onItemClick={handleChange}
                />
            </div>
            <BuildSummary data={data} />
        </div>
    );
}

export default Home;