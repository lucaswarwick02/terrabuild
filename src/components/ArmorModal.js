import React from 'react';
import '../css/ArmorModal.css';
import { headData, chestData, legsData} from './JsonManager'

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
                return headData;
            case "chest":
                return chestData;
            case "legs":
                return legsData;
            default:
                return headData;
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

    /**
     *
     * @param {ArmorItem} item - JSON Object of an Armor Item
     * @returns {JSX.Element} - Item Display
     */
    const createItemDisplay = item => {
        return (
            <div key={item.itemID}
                 className="itemDisplay"
                 onClick={() => {handleArmorChange(props.modalType, item.itemID)}}>
                <div className="itemImageContainer">
                    <img className="itemImage" src={`${process.env.PUBLIC_URL}/images/${item.itemID}.png`}
                         alt={item.name}/>
                </div>
                <span className="itemCaption">{item.name}</span>
            </div>
        );
    };

    return (
        <div id="armorModal">
            <div id="armorModalContent">
                <h1>{props.modalType} Modal</h1>
                {getItems().map(item => (
                    createItemDisplay(item)
                ))}
            </div>
        </div>
    );
}

export default ArmorModal;