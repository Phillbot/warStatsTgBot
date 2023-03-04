const TelegramBot = require("node-telegram-bot-api");
const TelegramBotRouter = require("./telegramBotRouter");

require("dotenv").config();

const telegramBotInit = () => {
  const bot = new TelegramBot(process.env.TOKEN, {
    polling: true,
  });

  TelegramBotRouter(bot);
};

module.exports = telegramBotInit;
