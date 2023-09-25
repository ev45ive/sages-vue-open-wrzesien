import { defineComponent } from "vue";

export default defineComponent({
setup( /* props, ctx */) {
const playlist = ref({
id: "123",
name: "Playlist 123",
public: true,
description: "Best playlist",
});

return { playlist };
},
//   data() {
//     return {
//       playlist: {
//         id: "123",
//         name: "Playlist 123",
//         public: true,
//         description: "Best playlist",
//       },
//     };
//   },
});
