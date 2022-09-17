import headJsonData from '../resources/head.json';
import chestJsonData from '../resources/chest.json';
import legsJsonData from '../resources/legs.json';
import armorSetsJsonData from '../resources/armor_sets.json'

/**
 * ArmorItem config
 * @typedef {Object} ArmorItem
 * @property {Number} itemID
 * @property {String} name
 * @property {Number} defence
 * @property {String} bonus
 */

/**
 * ArmorSetType config
 * @typedef {Object} ArmorSetType
 * @property {Number[]} set
 * @property {String} bonus
 * @property {String} effect
 */

/** @type {ArmorSetType} */
export const headData = JSON.parse(JSON.stringify(headJsonData));
/** @type {ArmorSetType} */
export const chestData = JSON.parse(JSON.stringify(chestJsonData));
/** @type {ArmorSetType} */
export const legsData = JSON.parse(JSON.stringify(legsJsonData));
/** @type {ArmorSetType} */
export const armorSetsData = JSON.parse(JSON.stringify(armorSetsJsonData));

/**
 *
 * @param {Number} id
 * @returns {ArmorItem}
 */
export function queryHead(id) {
    for (const item of headData) {
        if (item.itemID === id) {
            return item;
        }
    }
    return headData[0];
}

/**
 *
 * @param {Number} id
 * @returns {ArmorItem}
 */
export function queryChest(id) {
    for (const item of chestData) {
        if (item.itemID === id) {
            return item;
        }
    }
    return chestData[0];
}

/**
 *
 * @param {Number} id
 * @returns {ArmorItem}
 */
export function queryLegs(id) {
    for (const item of legsData) {
        if (item.itemID === id) {
            return item;
        }
    }
    return legsData[0];
}

/**
 *
 * @param {Number} headID
 * @param {Number} chestID
 * @param {Number} legsID
 * @returns {String|null}
 */
export function querySetBonus(headID, chestID, legsID) {
    let armorSet = [headID, chestID, legsID];
    for (const possibleSet of armorSetsData) {
        const isSet = JSON.stringify(armorSet) === JSON.stringify(possibleSet.set);
        if (isSet) {
            return possibleSet.bonus;
        }
    }
    return null;
}

/**
 *
 * @param {Number} headID
 * @param {Number} chestID
 * @param {Number} legsID
 * @returns {String|null}
 */
export function querySetEffect(headID, chestID, legsID) {
    let armorSet = [headID, chestID, legsID];
    for (const possibleSet of armorSetsData) {
        const isSet = JSON.stringify(armorSet) === JSON.stringify(possibleSet.set);
        if (isSet) {
            return possibleSet.effect;
        }
    }
    return null;
}