import '../css/BuildSummary.css';
import React, { useEffect } from 'react';
import { queryHead, queryChest, queryLegs, querySetBonus, querySetEffect } from './JsonManager'

function BuildSummary(props) {

    /**
     * Sum together the defence of each Armor piece
     * @type {Number}
     */
    const totalArmor = queryHead(props.data.head).defence + queryChest(props.data.chest).defence + queryLegs(props.data.legs).defence;

    /**
     * Query JSON for the Set Bonus
     * @type {String|null}
     */
    const setBonus = querySetBonus(props.data.head, props.data.chest, props.data.legs);
    /**
     * Query JSON for the Set Effect
     * @type {String|null}
     */
    const setEffect = querySetEffect(props.data.head, props.data.chest, props.data.legs);

    return (
        <div id="buildSummary">
            <h3>Build Summary</h3>
            <p><span style={{textDecoration: "underline"}}>Total Armor:</span> {totalArmor}</p>
            {setBonus && <p><span style={{textDecoration: "underline"}}>Set Bonus:</span> {setBonus}</p>}
            {setEffect && <p><span style={{textDecoration: "underline"}}>Set Effect:</span> {setEffect}</p>}
            <p>{queryHead(props.data.head).bonus}</p>
            <p>{queryChest(props.data.chest).bonus}</p>
            <p>{queryLegs(props.data.legs).bonus}</p>
        </div>
    );
}

export default BuildSummary;