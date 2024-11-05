const App = {
  load() {
    this.registerWorker();
    this.activateTurbolinks();
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
  },

  activateTurbolinks() {
    const script = document.createElement("script");
    script.src = "/_template/lib/turbolinks.js";
    document.head.appendChild(script);
  }
}

window.addEventListener("load", () => App.load());
