import '../css/BuildSummary.css';
import React from 'react';
import { queryHead, queryChest, queryLegs, querySetBonus, querySetEffect } from './JsonManager'
import { complexBonusToString, combineComplexBonuses } from '../HelperFunctions'

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

    const combinedBonuses = combineComplexBonuses([headBonus, chestBonus, legsBonus, setBonus])

    return (
        <div id="buildSummary">
            <h3>Build Summary</h3>

            <p><span style={{textDecoration: "underline"}}>Total Armor:</span></p>
            <p>{totalArmor}</p>

            {combinedBonuses && <p><span style={{textDecoration: "underline"}}>Bonuses:</span></p>}
            {combinedBonuses && <p>{complexBonusToString(combinedBonuses)}</p>}

            {setEffect && <p><span style={{textDecoration: "underline"}}>Effects:</span></p>}
            {setEffect && <p>{setEffect}</p>}
        </div>
    );
}

export default BuildSummary;