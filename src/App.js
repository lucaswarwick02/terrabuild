import './App.css';
import headJsonData from './resources/head.json';
import chestJsonData from './resources/chest.json';
import legsJsonData from './resources/legs.json';
import React, { useState, useEffect } from 'react';

function App() {
    // * isLoading is used for making sure that content isn't rendered
    // * until the JSON data is loaded.
    const [isLoading, setIsLoading] = useState(true);

    // JSON arrays containing item information
    // Loaded after mount, `isLoading` used to display once loaded
    const [headData, setHeadData] = useState();
    const [chestData, setChestData] = useState();
    const [legsData, setLegsData] = useState();

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
                <h1>Header 1</h1>
                <form>
                    <select name="head" onChange={handleArmorChange} >
                        {headData.map( item => (
                            <option key={item.itemID} value={item.itemID} >
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <select name="chest" onChange={handleArmorChange} >
                        {chestData.map( item => (
                            <option key={item.itemID} value={item.itemID} >
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <select name="legs" onChange={handleArmorChange} >
                        {legsData.map( item => (
                            <option key={item.itemID} value={item.itemID} >
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <input type="submit" value="Submit" />
                </form>
                {data.head !== 0 && <><p>Armor 1: {data.head}</p></> }
                {data.chest !== 0 && <><p>Armor 2: {data.chest}</p></> }
                {data.legs !== 0 && <><p>Armor 3: {data.legs}</p></> }
            </div>
        );
    }
    else {
        return (<p>Loading...</p>);
    }
}

export default App;
