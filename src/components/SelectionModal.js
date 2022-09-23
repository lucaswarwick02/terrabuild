import React, { useState } from 'react';
import ItemButton from './ItemButton'
import { headData, chestData, legsData, movementAccessoriesData } from './JsonManager'
import { originalSort, sortByName, sortByRarity } from "../HelperFunctions"
import '../css/SelectionModal.css';

function SelectionModal(props) {

    const [filterText, setFilterText] = useState("");
    const [sortType, setSortType] = useState("None");

    /**
     * Removes the Modal
     */
    function handleClose () {
        document.getElementById("armorModal").style.display = "none";
    }

    /**
     * Get a certain set of items depending on the
     * @returns {ItemButton[]} - Array of JSON objects for Armor Items
     */
    const getItems = () => {
        switch (props.modalType) {
            case "head":
                return headData.sort(originalSort);
            case "chest":
                return chestData.sort(originalSort);
            case "legs":
                return legsData.sort(originalSort);
            case "accessory1":
                return movementAccessoriesData.sort(originalSort);
            default:
                return headData.sort(originalSort);
        }
    }

    const getFilteredItems = () => {
        const sortedItems = getItems().sort(sortFunction(sortType));

        return sortedItems.filter(item => {
            const mainString = item.name.toLowerCase();
            const substring = filterText.toLowerCase();
            return mainString.includes(substring);
        });
    };

    const sortFunction = sortString => {
        switch (sortString) {
            case "None":
                return originalSort;
            case "Name":
                return sortByName;
            case "Rarity":
                return sortByRarity;
            default:
                return originalSort;
        }
    }

    return (
        <div id="selectionModal">
            <div id="modalContent">
                <h1 id="modalHeading">Armor Modal</h1>
                <div id="filter">
                    <input id="filterByText" type="text" size="30" onChange={event => {setFilterText(event.target.value)}} />
                    <input type="radio" name="sortBy" onClick={() => { setSortType("None"); }} /> None
                    <input type="radio" name="sortBy" onClick={() => { setSortType("Name"); }} /> Name
                    <input type="radio" name="sortBy" onClick={() => { setSortType("Rarity"); }} /> Rarity
                </div>
                <div className="modalContainer">
                    {getFilteredItems().map(item => (
                        <ItemButton key={item.itemID} onClick={() => props.onItemClick(props.modalType, item.itemID)} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SelectionModal;