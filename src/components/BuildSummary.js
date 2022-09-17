import '../css/BuildSummary.css';
import React, { useEffect } from 'react';
import { queryHead, queryChest, queryLegs, querySetBonus, querySetEffect } from './JsonManager'

function BuildSummary(props) {

    const totalArmor = queryHead(props.data.head).defence + queryChest(props.data.chest).defence + queryLegs(props.data.legs).defence;

    const setBonus = querySetBonus(props.data.head, props.data.chest, props.data.legs);
    const setEffect = querySetEffect(props.data.head, props.data.chest, props.data.legs);

    return (
        <div id="buildSummary">
            <h3>Build Summary</h3>
            <p><span style={{textDecoration: "underline"}}>Total Armor:</span> {totalArmor}</p>
            {setBonus && <p><span style={{textDecoration: "underline"}}>Set Bonus:</span> {setBonus}</p>}
            {setEffect && <p><span style={{textDecoration: "underline"}}>Set Effect:</span> {setEffect}</p>}
        </div>
    );
}

export default BuildSummary;