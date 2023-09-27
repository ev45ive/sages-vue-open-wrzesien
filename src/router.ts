import { createRouter, createWebHistory } from "vue-router";
import AlbumSearchView from "./search/containers/AlbumSearchView.vue";
import AlbumDetailsView from "./search/containers/AlbumDetailsView.vue";
import Counter from "./components/Counter.vue";

const PlaylistsView = () => import("./playlists/containers/PlaylistsView.vue");
export const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active placki",
  routes: [
    {
      path: "/",
      redirect: "/music/search",
    },
    {
      path: "/counter",
      component: Counter,
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
          // async beforeEnter(to, from, next) {
          //   // String(to.query["q"]);
          //   // next({name:'Login'})
          //   // next(new Error(''))
          //   debugger;
          //   next(true);
          // },for
        },
        {
          path: "albums/:albumId",
          name: "AlbumDetails",
          component: AlbumDetailsView,
        },
      ],
    },
  ],
});

// router.afterEach((to, from, failure) => {
//   // if (isNavigationFailure(failure)) {
//   //   console.log("failed navigation", failure);
//   // }
// });
// router.beforeEach((to, from, next) => {
//   next();
// });
