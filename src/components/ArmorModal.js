import React from 'react';
import '../css/ArmorModal.css';
import { headData, chestData, legsData} from './JsonManager'

function ArmorModal(props) {
    function handleClose () {
        document.getElementById("armorModal").style.display = "none";
    }
    
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

    // Updates the stored armor information
    const handleArmorChange = event => {
        props.setData( prev => ({
            ...prev,
            [event.target.name]: parseInt(event.target.value)
        }));
        handleClose();
    };

    return (
        <div id="armorModal">
            <div id="armorModalContent">
                <h1>{props.modalType} Modal</h1>
                {getItems().map(item => (
                    <button className="itemButton" key={item.itemID} name={props.modalType} value={item.itemID} onClick={handleArmorChange} >{item.name}</button>
                ))}
            </div>
        </div>
    );
}

export default ArmorModal;