import '../css/App.css';
import headJsonData from '../resources/head.json';
import chestJsonData from '../resources/chest.json';
import legsJsonData from '../resources/legs.json';
import armorSetsJsonData from '../resources/armor_sets.json'
import React, { useState, useEffect } from 'react';

import BuildSummary from "./BuildSummary"
import Header from "./Header";
import ArmorModal from "./ArmorModal";

function App() {
    // * isLoading is used for making sure that content isn't rendered
    // * until the JSON data is loaded.
    const [isLoading, setIsLoading] = useState(true);

    // JSON arrays containing item information
    // Loaded after mount, `isLoading` used to display once loaded
    const [headData, setHeadData] = useState();
    const [chestData, setChestData] = useState();
    const [legsData, setLegsData] = useState();

    const [armorSetsData, setArmorSetsData] = useState();

    // Stores the data that the user has selected
    const [data, setData] = useState({
        head: 0,
        chest: 0,
        legs: 0
    });

    const [armorModalType, setArmorModalType] = useState("head");

    // Loads the JSON data into variables after initial mount
    useEffect(() => {
        setHeadData(JSON.parse(JSON.stringify(headJsonData)));
        setChestData(JSON.parse(JSON.stringify(chestJsonData)));
        setLegsData(JSON.parse(JSON.stringify(legsJsonData)));

        setArmorSetsData(JSON.parse(JSON.stringify(armorSetsJsonData)))

        setIsLoading(false);
    }, []);

    // Updates the stored armor information
    const handleArmorChange = event => {
        setData( prev => ({
            ...prev,
            [event.target.name]: parseInt(event.target.value)
        }));
    };

    const armorModalClick = armorModalType => () => {
        setArmorModalType(armorModalType);
        document.getElementById("armorModal").style.display = "block";
    }

    if (!isLoading) {
        return (
            <div className="App">
                <Header />
                <div id="buildSelection">
                    <button id="modal-btn" onClick={armorModalClick("head")}>Select Head</button>
                    <button id="modal-btn" onClick={armorModalClick("chest")}>Select Chest</button>
                    <button id="modal-btn" onClick={armorModalClick("legs")}>Select Legs</button>
                    <ArmorModal
                        data={data}
                        setData={setData}
                        handleArmorChange={handleArmorChange}
                        headData={headData}
                        chestData={chestData}
                        legsData={legsData}
                        modalType={armorModalType}
                    />
                </div>
                <BuildSummary data={data} headData={headData} chestData={chestData} legsData={legsData} armorSetsData={armorSetsData} />
            </div>
        );
    }
    else {
        return (<p>Loading...</p>);
    }
}

export default App;
