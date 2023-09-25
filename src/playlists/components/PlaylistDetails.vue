<template>
  <div>
    <!-- <h3 id="test">Details {{ message.toString() + '!' }}</h3> -->

    <dl v-bind:id="'playlist_' + playlist.id" :title="playlist.name">
      <dt>Name</dt>
      <dd>{{ playlist.name }}</dd>

      <dt>Public</dt>
      <dd
        :class="[
          { isPublic: playlist.public, isPrivate: !playlist.public },
          'placki',
        ]"
        v-on:click="togglePublic()"
      >
        {{ playlist.public ? "Yes" : "No" }}
      </dd>

      <dt>Description</dt>
      <dd>{{ playlist.description }}</dd>
    </dl>

    {{ playlist.tracks[0].name }}
  </div>
</template>

<script lang="ts">
//vbase-3-ts

import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  setup() {
    // Objects
    const playlistReactinve = reactive({
      id: "123",
      name: "Playlist 123",
      public: true,
      description: "Best playlist",
      tracks: [{ name: "Track 12" }],
    });

    // Values
    const playlistRef = ref({
      id: "123",
      name: "Playlist 123",
      public: true,
      description: "Best playlist",
      tracks: [{ name: "Track 12" }],
    });

    const togglePublic = () => {
      playlistReactinve.public = !playlistReactinve.public;
      playlistRef.value.public = !playlistRef.value.public;
      playlistRef.value.tracks[0].name = '234'
    };

    // Template API:
    return { playlist: playlistRef, togglePublic, staticNonReactive: 123 };
  },
  // data: () => ({
  //   message: "123",
  //   playlist: {
  //     id: "123",
  //     name: "Playlist 123",
  //     public: true,
  //     description: "Best playlist",
  //   },
  // }),
  // methods: {
  //   togglePublic() {
  //     this.playlist.public = !this.playlist.public;
  //   },
  // },
});
</script>

<style scoped>
.isPublic {
  color: red;
}
.isPrivate {
  color: green;
}
</style>
