const Utils = require("../../utils");

class GetStatsUtils {
  static dayOfWar = {
    ru: "День войны:",
    uk: "День війни",
    default: "Day of war",
  };

  static statsObjKeys = {
    personnel_units: {
      ru: "Личный состав",
      uk: "Особовий склад",
      en: "Personnel units",
    },
    tanks: {
      ru: "Танки",
      uk: "Танки",
      en: "Tanks",
    },
    armoured_fighting_vehicles: {
      ru: "Боевые бронированные машины",
      uk: "Бойові броньовані машини",
      en: "Armoured fighting vehicles",
    },
    artillery_systems: {
      ru: "Артиллерийские системы",
      uk: "Артилерійські системи",
      en: "Artillery systems",
    },
    mlrs: {
      ru: "РСЗО",
      uk: "РСЗВ",
      en: "MLRS",
    },
    aa_warfare_systems: {
      ru: "Системы ПВО",
      uk: "Системи ППО",
      en: "AA warfare systems",
    },
    planes: {
      ru: "Самолеты",
      uk: "Літаки",
      en: "Planes",
    },
    helicopters: {
      ru: "Вертолеты",
      uk: "Гелікоптери",
      en: "Helicopters",
    },
    vehicles_fuel_tanks: {
      ru: "Топливные баки",
      uk: "Паливні баки",
      en: "Vehicles fuel tanks",
    },
    warships_cutters: {
      ru: "Корабли",
      uk: "Кораблі",
      en: "Warships cutters",
    },
    cruise_missiles: {
      ru: "Крылатые ракеты",
      uk: "Крилаті ракети",
      en: "Cruise missiles",
    },
    uav_systems: {
      ru: "БПЛА",
      uk: "БПЛА",
      en: "Uav systems",
    },
    special_military_equip: {
      ru: "Специальная техника",
      uk: "Спеціальна техніка",
      en: "Special military equip",
    },
    atgm_srbm_systems: {
      ru: "Системы ПТРК",
      uk: "Системи ПТРК",
      en: "ATGM SRBM systems",
    },
  };

  static formatStatsObj(statsObj, langCode) {
    return {
      [GetStatsUtils.statsObjKeys["personnel_units"][langCode]]:
        statsObj.personnel_units,
      [GetStatsUtils.statsObjKeys["tanks"][langCode]]: statsObj.tanks,
      [GetStatsUtils.statsObjKeys["armoured_fighting_vehicles"][langCode]]:
        statsObj.armoured_fighting_vehicles,
      [GetStatsUtils.statsObjKeys["artillery_systems"][langCode]]:
        statsObj.artillery_systems,
      [GetStatsUtils.statsObjKeys["mlrs"][langCode]]: statsObj.mlrs,
      [GetStatsUtils.statsObjKeys["aa_warfare_systems"][langCode]]:
        statsObj.aa_warfare_systems,
      [GetStatsUtils.statsObjKeys["planes"][langCode]]: statsObj.planes,
      [GetStatsUtils.statsObjKeys["helicopters"][langCode]]:
        statsObj.helicopters,
      [GetStatsUtils.statsObjKeys["vehicles_fuel_tanks"][langCode]]:
        statsObj.vehicles_fuel_tanks,
      [GetStatsUtils.statsObjKeys["warships_cutters"][langCode]]:
        statsObj.warships_cutters,
      [GetStatsUtils.statsObjKeys["cruise_missiles"][langCode]]:
        statsObj.cruise_missiles,
      [GetStatsUtils.statsObjKeys["uav_systems"][langCode]]:
        statsObj.uav_systems,
      [GetStatsUtils.statsObjKeys["special_military_equip"][langCode]]:
        statsObj.special_military_equip,
      [GetStatsUtils.statsObjKeys["atgm_srbm_systems"][langCode]]:
        statsObj.atgm_srbm_systems,
    };
  }

  static getIncrease(value) {
    return value ? `(+${value})` : "";
  }

  static makeStatsString(data, langCode) {
    const statsObj = GetStatsUtils.formatStatsObj(
      Utils.deepCopy(data.stats),
      langCode
    );

    const increaseObj = GetStatsUtils.formatStatsObj(
      Utils.deepCopy(data.increase),
      langCode
    );

    const statsArray = Object.keys(statsObj).map((key) => {
      const increase = GetStatsUtils.getIncrease(increaseObj[key]);
      return `${key} - ${statsObj[key]} ${increase}\n`;
    });

    return statsArray?.join("") || "";
  }
}

module.exports = GetStatsUtils;
