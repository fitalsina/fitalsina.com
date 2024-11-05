const App = {
  load() {
    this.registerWorker();
  },

  async registerWorker() {
    try {
      if ("serviceWorker" in navigator) {
        await navigator.serviceWorker.register("/sw.js", {
          scope: "/",
        });
      }
    } catch(e) {
      console.warn(e);
    }
  }
}

window.addEventListener("load", () => App.load());
