import React from 'react';
import ArmorItem from './ArmorItem'
import { headData, chestData, legsData} from './JsonManager'
import { originalSort } from "../HelperFunctions"
import '../css/ArmorModal.css';

function ArmorModal(props) {

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
                <h1>Armor Modal</h1>
                {getItems().map(item => (
                    <ArmorItem key={item.itemID} onClick={() => handleArmorChange(props.modalType, item.itemID)} item={item} />
                ))}
            </div>
        </div>
    );
}

export default ArmorModal;