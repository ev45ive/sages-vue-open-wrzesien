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
  </div>
</template>

<script lang="ts">
//vbase-3-ts

import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const playlist = ref({
      id: "123",
      name: "Playlist 123",
      public: true,
      description: "Best playlist",
    });

    const togglePublic = () => {
      playlist.value.public = !playlist.value.public;
    };

    return { playlist, togglePublic };
  },
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
