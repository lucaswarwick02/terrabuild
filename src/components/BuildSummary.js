import '../css/BuildSummary.css';
import React from 'react';
import {
    queryHead,
    queryChest,
    queryLegs,
    querySetBonus,
    querySetEffect,
    queryAccessories
} from './JsonManager';
import {db} from './firebase';
import {collection, addDoc, Timestamp} from 'firebase/firestore';
import { complexBonusToArray, combineComplexBonuses } from '../HelperFunctions';

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

    const combinedBonuses = combineComplexBonuses([headBonus, chestBonus, legsBonus, setBonus]);

    const accessory1Bonus = queryAccessories(props.data.accessory1).bonus;
    const accessory2Bonus = queryAccessories(props.data.accessory2).bonus;
    const accessory3Bonus = queryAccessories(props.data.accessory3).bonus;
    const accessory4Bonus = queryAccessories(props.data.accessory4).bonus;
    const accessory5Bonus = queryAccessories(props.data.accessory5).bonus;
    const combinedAccessoriesBonus = combineComplexBonuses([accessory1Bonus, accessory2Bonus, accessory3Bonus, accessory4Bonus, accessory5Bonus]);

    const getStyle = id => {
        const element = document.getElementById(id);
        let numberOfLines = 0;
        if (element !== null) {
            numberOfLines = element.childElementCount - 1;
        }

        if (numberOfLines >= 10) {
            return { fontSize: "1.5vh" };
        }
        else {
            return { fontSize: "2.5vh" }
        }
    };

    const handleClick = async (e) => {
        const build = {
            head: props.data.head,
            chest: props.data.chest,
            legs: props.data.legs,
        }
        try {
            await addDoc(collection(db, 'builds'), build)
        } catch (err) {
            alert(err)
        }
    }


    return (
        <div id="buildSummary">
            <div className="summarySection" id="armorSummary">
                <h4>Armor Summary</h4>
                <p style={getStyle("armorSummary")} >Armor Defence: {totalArmor}</p>
                {complexBonusToArray(combinedBonuses).map(s => (<p style={getStyle("armorSummary")} >{s}</p>))}
                <p style={getStyle("armorSummary")} >{setEffect}</p>
            </div><div className="summarySection" id="accessorySummary">
                <h4>Accessory Summary</h4>
                {complexBonusToArray(combinedAccessoriesBonus).map(s => (<p style={getStyle("accessorySummary")} >{s}</p>))}
            </div><div className="summarySection" id="totalSummary">
                <h4>Total Summary</h4>
                <button onClick={handleClick} className="addTask" name="addTask">Add Task</button>
            </div>

        </div>
    );
}

export default BuildSummary;