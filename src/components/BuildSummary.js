import '../css/BuildSummary.css';
import React from 'react';
import { queryHead, queryChest, queryLegs, querySetBonus, querySetEffect } from './JsonManager'
import { complexBonusToArray, combineComplexBonuses } from '../HelperFunctions'

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

    const getStyle = id => {
        const numberOfLines = document.getElementById(id).childElementCount - 1;

        if (numberOfLines >= 10) {
            return { fontSize: "1.5vh" };
        }
        else {
            return { fontSize: "2.5vh" }
        }
    };


    return (
        <div id="buildSummary">
            <div className="summarySection" id="armorSummary">
                <h4>Armor Summary</h4>
                {/*<p style={getStyle("armorSummary")} >Armor Defence: {totalArmor}</p>*/}
                {/*{complexBonusToArray(combinedBonuses).map(s => (<p style={getStyle("armorSummary")} >{s}</p>))}*/}
                {/*<p style={getStyle("armorSummary")} >{setEffect}</p>*/}
            </div><div className="summarySection" id="accessorySummary">
                <h4>Accessory Summary</h4>
            </div><div className="summarySection" id="totalSummary">
                <h4>Total Summary</h4>
            </div>

        </div>
    );
}

export default BuildSummary;