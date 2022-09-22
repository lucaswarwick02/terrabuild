import React, { useState } from 'react';
import ArmorItem from './ArmorItem'
import { headData, chestData, legsData} from './JsonManager'
import { originalSort, sortByName, sortByRarity } from "../HelperFunctions"
import '../css/ArmorModal.css';

function ArmorModal(props) {

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
     * @returns {ArmorItem[]} - Array of JSON objects for Armor Items
     */
    const getItems = () => {
        switch (props.modalType) {
            case "head":
                return headData.sort(originalSort);
            case "chest":
                return chestData.sort(originalSort);
            case "legs":
                return legsData.sort(originalSort);
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

    /**
     * Updates the stored armor information
     * @param event - From the HTMLElement, used for determining values
     */
    const handleArmorChange = (name, value) => {
        props.setData( prev => ({
            ...prev,
            [name]: parseInt(value)
        }));
        handleClose();
    };

    return (
        <div id="armorModal">
            <div id="armorModalContent">
                <h1 id="armorModalHeading">Armor Modal</h1>
                <div id="filter">
                    <input id="filterByText" type="text" size="30" onChange={event => {setFilterText(event.target.value)}} />
                    <input type="radio" name="sortBy" onClick={() => { setSortType("None"); }} /> None
                    <input type="radio" name="sortBy" onClick={() => { setSortType("Name"); }} /> Name
                    <input type="radio" name="sortBy" onClick={() => { setSortType("Rarity"); }} /> Rarity
                </div>
                <div className="selectionContainer">
                    {getFilteredItems().map(item => (
                        <ArmorItem key={item.itemID} onClick={() => handleArmorChange(props.modalType, item.itemID)} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ArmorModal;