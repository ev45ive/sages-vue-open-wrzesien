import { createApp, h } from "vue";
import "./style.css";
import App from "./App.vue";

import HelloWorld from "./components/HelloWorld.vue";
// createApp(App).mount('#app')

(window as any).app = createApp({
  // Component provided template option but runtime compilation is not supported in this build of Vue.
  // Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".
  //   template: "<h1>alam kota {{ message }} <HelloWorld/> </h1>",
  render() {
    console.log("Re-Rendering...");

    // Virtual DOM:
    return h("div", null, [
      h("h1", { class: "Placki" }, "Ala ma kota!"),
      h("h2", {}, this.message),
      h("h2", {}, this.placki),
      h(HelloWorld, { msg: this.message }),
    ]);
  },
  data() {
    return {
      message: "Hello Vue!",
      placki: "123",
    };
  },
}).mount("#app");
