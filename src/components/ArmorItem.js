import React from 'react';
import '../css/ArmorItem.css'
import { getRarityColor } from "../HelperFunctions"

/**
 * Required props:
 *      - onClick(modalType, item.itemID)
 *      - item
 *      - modalType
 */
function ArmorItem(props) {

    const style = {
        color: getRarityColor(props.item.rarity),
        borderColor: getRarityColor(props.item.rarity)
    };

    return (
        <div key={props.item.itemID}
             className="itemDisplay"
             onClick={props.onClick}
             style={style}>
            <div className="itemImageContainer">
                {(props.item.itemID !== 0) && <img className="itemImage" src={`${process.env.PUBLIC_URL}/images/${props.item.itemID}.png`}
                      alt={props.item.name}/>}
            </div>
            <span className="itemCaption" style={style}>{props.item.name}</span>
        </div>
    );
}

export default ArmorItem;