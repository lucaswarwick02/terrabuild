import '../css/App.css';
import headJsonData from '../resources/head.json';
import chestJsonData from '../resources/chest.json';
import legsJsonData from '../resources/legs.json';
import armorSetsJsonData from '../resources/armor_sets.json'
import React, { useState, useEffect } from 'react';

import BuildSummary from "./BuildSummary"
import Header from "./Header";

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

    if (!isLoading) {
        return (
            <div className="App">
                <Header />
                <div id="buildSelection">
                    <button id="modal-btn" onClick={() => {document.getElementById("modal-row-1").style.display = "block";}}>Open Model</button>
                    <div id="modal-row-1" className="modal">
                        <div className="modal-content">
                            <button className="close" onClick={() => {document.getElementById("modal-row-1").style.display = "none";}}>&times;</button>
                            <p>Modal 1</p>
                        </div>
                    </div>
                    <form>
                        <div id="armorSelection">
                            <div id="headSelection">
                                <label htmlFor="head">Head</label>
                                <select value={data.head} name="head" onChange={handleArmorChange}>
                                    {headData.map(item => (
                                        <option key={item.itemID} value={item.itemID}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div id="chestSelection">
                                <label htmlFor="head">Chest</label>
                                <select value={data.chest} name="chest" onChange={handleArmorChange}>
                                    {chestData.map(item => (
                                        <option key={item.itemID} value={item.itemID}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div id="legsSelection">
                                <label htmlFor="legs">Legs</label>
                                <select value={data.legs} name="legs" onChange={handleArmorChange}>
                                    {legsData.map(item => (
                                        <option key={item.itemID} value={item.itemID}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </form>
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
