const axios = require("axios");
const WarStatsAPI = require("../api");
const GetStatsUtils = require("./getStatsUtils");

class Commands {
  static getStats = async (chatId, bot, langCode) => {
    const {
      data: { data },
    } = await axios.get(WarStatsAPI.baseUrl + WarStatsAPI.commands.stats);

    const header = `<b> ${data.date} </b> \n\n`;
    const dayOfWar = ` ${data.day} \n\n`;
    const statsString = GetStatsUtils.makeStatsString(data, langCode);

    await bot.sendMessage(chatId, header + dayOfWar + statsString, {
      parse_mode: "HTML",
    });
  };
}

module.exports = Commands;
