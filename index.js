require("dotenv").config();
const telegramBotInit = require("./src/telegram/init");

telegramBotInit(process.env.TOKEN);
