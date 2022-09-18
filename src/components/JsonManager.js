import headJsonData from '../resources/head.json';
import chestJsonData from '../resources/chest.json';
import legsJsonData from '../resources/legs.json';
import armorSetsJsonData from '../resources/armor_sets.json'

/**
 * ArmorItem config
 * @typedef {Object} ArmorItem - A Terraria item
 * @property {Number} itemID - Internal ID of the item
 * @property {String} name - Vanity name of the item
 * @property {Number} rarity - Rarity used for color of the item
 * @property {Number} defence - Number of defence points
 * @property {String} bonus - Bonus the item gives, not the complete set
 */

/**
 * ArmorSetType config
 * @typedef {Object} ArmorSetType - Set bonus for an Armor Set
 * @property {Number[]} set - List of IDs for the Armor Set
 * @property {String} bonus - Set Bonus
 * @property {String} effect - Set Effect
 */

/** @type {ArmorItem[]} */
export const headData = JSON.parse(JSON.stringify(headJsonData));
/** @type {ArmorItem[]} */
export const chestData = JSON.parse(JSON.stringify(chestJsonData));
/** @type {ArmorItem[]} */
export const legsData = JSON.parse(JSON.stringify(legsJsonData));
/** @type {ArmorSetType[]} */
export const armorSetsData = JSON.parse(JSON.stringify(armorSetsJsonData));

/**
 *
 * @param {Number} id - Internal ID of the item
 * @returns {ArmorItem} - JSON Armor Item
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
 * @param {Number} id - Internal ID of the item
 * @returns {ArmorItem} - JSON Armor Item
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
 * @param {Number} id - Internal ID of the item
 * @returns {ArmorItem} - JSON Armor Item
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
 * @param {Number} headID - Internal ID of the head item
 * @param {Number} chestID - Internal ID of the chest item
 * @param {Number} legsID - Internal ID of the legs item
 * @returns {String|null} - Either return the Set Bonus, or null
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
 * @param {Number} headID - Internal ID of the head item
 * @param {Number} chestID - Internal ID of the chest item
 * @param {Number} legsID - Internal ID of the legs item
 * @returns {String|null} - Either return the Set Effect, or null
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