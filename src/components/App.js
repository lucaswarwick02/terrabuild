import React, { useState, useEffect } from 'react';
import BuildSummary from "./BuildSummary"
import Header from "./Header";
import SelectionModal from "./SelectionModal";
import ItemButton from "./ItemButton"
import {queryChest, queryHead, queryLegs, queryMovementAccessory} from "./JsonManager";
import '../css/App.css';

function App() {
    // * isLoading is used for making sure that content isn't rendered
    // * until the JSON data is loaded.
    const [isLoading, setIsLoading] = useState(true);
    const [modalType, setModalType] = useState("head");

    // Stores the data that the user has selected
    const [data, setData] = useState({
        head: 0,
        chest: 0,
        legs: 0,
        accessory1: 0
    });

    // Loads the JSON data into variables after initial mount
    useEffect(() => {
        setIsLoading(false);
    }, []);

    const selectionModalClick = modalType => () => {
        setModalType(modalType);
        document.getElementById("selectionModal").style.display = "block";
    }

    function handleClose () {
        document.getElementById("selectionModal").style.display = "none";
    }

    /**
     * Updates the stored armor information
     * @param event - From the HTMLElement, used for determining values
     */
    const handleChange = (name, value) => {
        setData( prev => ({
            ...prev,
            [name]: parseInt(value)
        }));
        handleClose();
    };

    if (!isLoading) {
        return (
            <div className="App">
                <Header />
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
                            <p className="itemHeader">Item</p>
                            <ItemButton onClick={selectionModalClick("accessory1")} item={queryMovementAccessory(data.accessory1)} />
                        </div>
                        <div style={{display: "inline-block"}}>
                            <p className="itemHeader">Item</p>
                            <ItemButton onClick={() => {}} item={queryHead(0)} />
                        </div>
                        <div style={{display: "inline-block"}}>
                            <p className="itemHeader">Item</p>
                            <ItemButton onClick={() => {}} item={queryHead(0)} />
                        </div>
                        <div style={{display: "inline-block"}}>
                            <p className="itemHeader">Item</p>
                            <ItemButton onClick={() => {}} item={queryHead(0)} />
                        </div>
                        <div style={{display: "inline-block"}}>
                            <p className="itemHeader">Item</p>
                            <ItemButton onClick={() => {}} item={queryHead(0)} />
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
    else {
        return (<p>Loading...</p>);
    }
}

export default App;
