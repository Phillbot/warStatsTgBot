class TelegramUtils {
  static defaultLang = "en";
  static supportLangs = ["ru", "uk"];

  static getLangCode(tgLangCode) {
    return TelegramUtils.supportLangs.includes(tgLangCode)
      ? tgLangCode
      : TelegramUtils.defaultLang;
  }
}

module.exports = TelegramUtils;
