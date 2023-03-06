const TelegramBot = require("node-telegram-bot-api");
const TelegramBotRouter = require("./telegramBotRouter");

const telegramBotInit = (TOKEN) => {
  const bot = new TelegramBot(TOKEN, {
    polling: true,
  });

  TelegramBotRouter(bot);
};

module.exports = telegramBotInit;
