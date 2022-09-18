/**
 *
 * @param {Number} tier - Rarity number, between -1 and 10
 * @returns {String} - Hex number as String
 */
export function getRarityColor(tier) {
    switch (tier) {
        case -1:
            return "#7f807f";
        case 0:
            return "#f3f3f3";
        case 1:
            return "#8988e9";
        case 2:
            return "#8aec8a";
        case 3:
            return "#e8b889";
        case 4:
            return "#f08e8d";
        case 5:
            return "#f590f5";
        case 6:
            return "#c294eb";
        case 7:
            return "#85e209";
        case 8:
            return "#e3e409";
        case 9:
            return "#04b2e3";
        case 10:
            return "#eb265d";
        default:
            return getRarityColor(-1);
    }
}

/**
 * Used in Array.sort to sort by Rarity
 * @param {ArmorItem} item1 - An Armor Item
 * @param {ArmorItem} item2 - The next Armor Item
 * @returns {number} - -1 = item1, 1 = item2, 0 = equal
 */
export const sortByRarity = (item1, item2) => {
    return item1.rarity - item2.rarity;
}

/**
 * Used in Array.sort to sort by name
 * @param {ArmorItem} item1 - An Armor Item
 * @param {ArmorItem} item2 - The next Armor Item
 * @returns {number} - -1 = item1, 1 = item2, 0 = equal
 */
export const sortByName = (item1, item2) => {
    let name1 = item1.name.toLowerCase();
    let name2 = item2.name.toLowerCase();

    if (name1 < name2) {
        return -1;
    }
    if (name1 > name2) {
        return 1;
    }
    return 0;
}

/**
 * Used in Array.sort to sort by the original order
 * @param {ArmorItem} item1 - An Armor Item
 * @param {ArmorItem} item2 - The next Armor Item
 * @returns {number} - -1 always, for the original order
 */
export const originalSort = (item1, item2) => {
    return -1;
}