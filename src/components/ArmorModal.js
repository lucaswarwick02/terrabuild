import React from 'react';
import '../css/ArmorModal.css';

function ArmorModal(props) {
    function handleClose () {
        document.getElementById("armorModal").style.display = "none";
    }

    const getTypeName = () => {
        switch (props.modalType) {
            case "head":
                return "head";
            case "chest":
                return "chest";
            case "legs":
                return "legs";
            default:
                return "head";
        }
    }

    const getTypeValue = () => {
        switch (props.modalType) {
            case "head":
                return props.data.head;
            case "chest":
                return props.data.chest;
            case "legs":
                return props.data.legs;
            default:
                return props.data.head;
        }
    }

    const getItems = () => {
        switch (props.modalType) {
            case "head":
                return props.headData;
            case "chest":
                return props.chestData;
            case "legs":
                return props.legsData;
            default:
                return props.headData;
        }
    }

    return (
        <div id="armorModal">
            <div id="armorModalContent">
                <h1>{getTypeName()} Modal</h1>
                <button id="modal-btn" onClick={handleClose}>Close Model</button>
                <div id="armorSelection">
                    <label htmlFor={getTypeName()}>{getTypeName()}</label>
                    <select value={getTypeValue()} name={getTypeName()} onChange={props.handleArmorChange}>
                        {getItems().map(item => (
                            <option key={item.itemID} value={item.itemID}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default ArmorModal;