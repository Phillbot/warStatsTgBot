const Commands = require("./commands/commands");
const TelegramUtils = require("./telegramUtils");

const TelegramBotRouter = (bot) => {
  bot.on("message", async (msg) => {
    const chatId = msg.chat.id;

    const langCode = TelegramUtils.getLangCode(msg.from.language_code);

    switch (msg.text) {
      case "/stats":
        Commands.getStats(chatId, bot, langCode);
        break;
    }
  });
};

module.exports = TelegramBotRouter;
