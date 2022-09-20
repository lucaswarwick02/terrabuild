import '../css/BuildSummary.css';
import React, { useEffect } from 'react';
import { queryHead, queryChest, queryLegs, querySetBonus, querySetEffect } from './JsonManager'
import { bonusToString, complexBonusToString, combineComplexBonuses } from '../HelperFunctions'

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

    const headBonus = queryHead(props.data.head).bonus;
    const chestBonus = queryChest(props.data.chest).bonus;
    const legsBonus = queryLegs(props.data.legs).bonus;

    return (
        <div id="buildSummary">
            <h3>Build Summary</h3>
            <p><span style={{textDecoration: "underline"}}>Total Armor:</span> {totalArmor}</p>
            {setBonus && <p><span style={{textDecoration: "underline"}}>Set Bonus:</span> {JSON.stringify(setBonus)}</p>}
            {setEffect && <p><span style={{textDecoration: "underline"}}>Set Effect:</span> {setEffect}</p>}
            <p>{complexBonusToString(combineComplexBonuses([headBonus, chestBonus, legsBonus]))}</p>
        </div>
    );
}

export default BuildSummary;