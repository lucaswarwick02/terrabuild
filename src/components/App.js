import React, { useState, useEffect } from 'react';
import BuildSummary from "./BuildSummary"
import Header from "./Header";
import ArmorModal from "./ArmorModal";
import ArmorItem from "./ArmorItem"
import {queryChest, queryHead, queryLegs} from "./JsonManager";
import '../css/App.css';

function App() {
    // * isLoading is used for making sure that content isn't rendered
    // * until the JSON data is loaded.
    const [isLoading, setIsLoading] = useState(true);
    const [armorModalType, setArmorModalType] = useState("head");

    // Stores the data that the user has selected
    const [data, setData] = useState({
        head: 0,
        chest: 0,
        legs: 0
    });

    // Loads the JSON data into variables after initial mount
    useEffect(() => {
        setIsLoading(false);
    }, []);

    /**
     * Update the type of Armor Modal displayed
     * @param {String} armorModalType - Either "head", "chest" or "legs"
     * @returns {(function(): void)} - Required to work with onClick
     */
    const armorModalClick = armorModalType => () => {
        setArmorModalType(armorModalType);
        document.getElementById("armorModal").style.display = "block";
    }

    if (!isLoading) {
        return (
            <div className="App">
                <Header />
                <div id="buildSelection">
                    <div>
                        <div style={{display: "inline-block"}}>
                            <p className="itemHeader">Head</p>
                            <ArmorItem onClick={armorModalClick("head")} item={queryHead(data.head)} />
                        </div>
                        <div style={{display: "inline-block"}}>
                            <p className="itemHeader">Chest</p>
                            <ArmorItem onClick={armorModalClick("chest")} item={queryChest(data.chest)} />
                        </div>
                        <div style={{display: "inline-block"}}>
                            <p className="itemHeader">Legs</p>
                            <ArmorItem onClick={armorModalClick("legs")} item={queryLegs(data.legs)} />
                        </div>
                        <ArmorModal
                            data={data}
                            setData={setData}
                            modalType={armorModalType}
                        />
                    </div>
                    <div>
                        {/* TODO This will be used for adding accessories */}
                        <div style={{display: "inline-block"}}>
                            <p className="itemHeader">Item</p>
                            <ArmorItem onClick={() => {}} item={queryHead(0)} />
                        </div>
                        <div style={{display: "inline-block"}}>
                            <p className="itemHeader">Item</p>
                            <ArmorItem onClick={() => {}} item={queryHead(0)} />
                        </div>
                        <div style={{display: "inline-block"}}>
                            <p className="itemHeader">Item</p>
                            <ArmorItem onClick={() => {}} item={queryHead(0)} />
                        </div>
                        <div style={{display: "inline-block"}}>
                            <p className="itemHeader">Item</p>
                            <ArmorItem onClick={() => {}} item={queryHead(0)} />
                        </div>
                        <div style={{display: "inline-block"}}>
                            <p className="itemHeader">Item</p>
                            <ArmorItem onClick={() => {}} item={queryHead(0)} />
                        </div>
                        {/* TODO AccessoryModal */}
                    </div>
                </div>
                <BuildSummary data={data} />
            </div>
        );
    }
    else {
        return (<p>Loading...</p>);
    }
}

export default App;
