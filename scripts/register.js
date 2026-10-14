Hooks.once("init", () => {
  Babele.get().register({
    module: "my-compendium-ru",
    lang: "ru",
    dir: "compendium"
  });
});
