export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  locales: ["en", "fr"],
  messages: {
    en: {
      welcome: "Welcome",
    },
    fr: {
      welcome: "Bienvenue",
    },
  },
}));
