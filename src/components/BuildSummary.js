import '../css/BuildSummary.css';
import React from 'react';

function BuildSummary(props) {

    function queryHead(id) {
        for (const item of props.headData) {
            if (item.itemID === id) {
                return item;
            }
        }

        return props.headData[0];
    }
    function queryChest(id) {
        for (const item of props.chestData) {
            if (item.itemID === id) {
                return item;
            }
        }

        return props.chestData[0];
    }
    function queryLegs(id) {
        for (const item of props.legsData) {
            if (item.itemID === id) {
                return item;
            }
        }

        return props.legsData[0];
    }

    function querySetBonus() {
        let armorSet = [props.data.head, props.data.chest, props.data.legs];
        for (const possibleSet of props.armorSetsData) {
            const isSet = JSON.stringify(armorSet) === JSON.stringify(possibleSet.set);
            if (isSet) {
                return possibleSet.setBonus;
            }
        }
        return null;
    }
    function querySetEffect() {
        let armorSet = [props.data.head, props.data.chest, props.data.legs];
        for (const possibleSet of props.armorSetsData) {
            const isSet = JSON.stringify(armorSet) === JSON.stringify(possibleSet.set);
            if (isSet) {
                return possibleSet.setEffect;
            }
        }
        return null;
    }

    return (
        <div id="buildSummary">
            <h3>Build Summary</h3>
            <p><span style={{textDecoration: "underline"}}>Total Armor:</span> {queryHead(props.data.head).defence + queryChest(props.data.chest).defence + queryLegs(props.data.legs).defence}</p>
            {querySetBonus() && <p><span style={{textDecoration: "underline"}}>Set Bonus:</span> {querySetBonus()}</p>}
            {querySetEffect() && <p><span style={{textDecoration: "underline"}}>Set Effect:</span> {querySetEffect()}</p>}
        </div>
    );
}

export default BuildSummary;