import React, { useState, useEffect } from 'react';
import BuildSummary from "./BuildSummary"
import Header from "./Header";
import ArmorModal from "./ArmorModal";
import '../css/App.css';
import {queryChest, queryHead, queryLegs} from "./JsonManager";


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

    const armorModalClick = armorModalType => () => {
        setArmorModalType(armorModalType);
        document.getElementById("armorModal").style.display = "block";
    }

    if (!isLoading) {
        return (
            <div className="App">
                <Header />
                <div id="buildSelection">
                    <button id="modal-btn" onClick={armorModalClick("head")}>{queryHead(data.head).name}</button>
                    <button id="modal-btn" onClick={armorModalClick("chest")}>{queryChest(data.chest).name}</button>
                    <button id="modal-btn" onClick={armorModalClick("legs")}>{queryLegs(data.legs).name}</button>
                    <ArmorModal
                        data={data}
                        setData={setData}
                        modalType={armorModalType}
                    />
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
