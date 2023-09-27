import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import PlaylistsView from "./playlists/containers/PlaylistsView.vue";
import AlbumSearchView from "./search/containers/AlbumSearchView.vue";
import AlbumDetailsView from "./search/containers/AlbumDetailsView.vue";
// const routes:RouteRecordRaw[] = [];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active placki",
  routes: [
    {
      path: "/",
      redirect: "/music/search",
    },
    {
      path: "/playlists",
      component: PlaylistsView,
    },
    {
      path: "/music",
      children: [
        {
          path: "search",
          name: "AlbumSearch",
          component: AlbumSearchView,
          props: { title: "Placki" },
          async beforeEnter(to, from, next) {
            // String(to.query["q"]);
            // next({name:'Login'})
            // next(new Error(''))
            debugger;
            next(true);
          },
        },
        {
          path: "albums/:albumId",
          component: AlbumDetailsView,
        },
      ],
    },
  ],
});

router.afterEach((to, from, failure) => {
  // if (isNavigationFailure(failure)) {
  //   console.log("failed navigation", failure);
  // }
});
router.beforeEach((to, from, next) => {
  next();
});

const app = createApp(App).use(router);

app.mount("#app");

/* (window as any).app = createApp({
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
 */
