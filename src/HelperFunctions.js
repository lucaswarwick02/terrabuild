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

export const bonusToString = (name, value) => {
    switch (name) {
        case "defence":
            return "+" + value + " defence";
        case "miningSpeed":
            return "+" + value + "% mining speed";
        case "damageIncrease":
            return "+" + value + "% damage";
        case "movementSpeed":
            return "+" + value + "% movement speed";
        case "criticalStrikeChance":
            return "+" + value + "% critical strike chance";
        case "fishingPower":
            return "+" + value + "% fishing power";
        case "thornsDamage":
            return value + " thorns damage";
        case "rangedCriticalStrikeChance":
            return "+" + value + "% ranged critical strike chance";
        case "rangedDamage":
            return "+" + value + "% ranged damage";
        case "chanceNotToConsumeAmmo":
            return "+" + value + "% chance to not consume ammo";
        case "minionCapacity":
            return "+" + value + " minion capacity";
        case "minionDamage":
            return "+" + value + "% minion damage";
        case "whipRange":
            return "+" + value + "% whip range";
        case "whipSpeed":
            return "+" + value + "% whip speed";
        case "knockbackImmunity":
            return "Grants immunity to knockback";
        case "magicDamage":
            return "+" + value + "% magic damage";
        case "freeSpaceGun":
            return "Space Gun costs 0 mana";
        case "manaCapacity":
            return "+" + value + " mana capacity";
        case "magicCriticalStrikeChance":
            return "+" + value + "% magic critical strike chance";
        case "manaUsage":
            return value + "mana usage";
        case "meleeSpeed":
            return "+" + value + "% melee speed";
        case "damage":
            return "+" + value + "% damage";
        case "crimsonHealthRegen":
            return "Greatly increased life regeneration";
        case "meleeCriticalStrikeChance":
            return "+" + value + "% melee critical strike chance";
        case "meleeDamage":
            return "+" + value + "% melee damage"
        case "fireImmunity":
            return "Cannot be set on fire";
        default:
            return "INVALID NAME";
    }
}

export const complexBonusToString = complexBonus => {
    let bonusText = "";
    Object.keys(complexBonus).forEach((value, index) => {
        bonusText += bonusToString(value, complexBonus[value]);
    });

    return bonusText;
}

/**
 *
 * @param {Object[]} complexBonusList
 */
export const combineComplexBonuses = complexBonusList => {
    // Copy the list, then we can iterate through
    const copiedComplexBonusList = complexBonusList.map(obj => {
        return Object.assign({}, obj);
    });

    return copiedComplexBonusList.reduce((total, bonus) => {
        // Iterate through bonus and add to the running total
        Object.keys(bonus).forEach(key => {
            if (key in total) {
                // Add values
                total[key] += bonus[key];
            }
            else {
                // Add as new
                total[key] = bonus[key];
            }
        });
        return total;
    });
}
