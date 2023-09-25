<template>
  <div>
    <!-- <h3 id="test">Details {{ message.toString() + '!' }}</h3> -->

    <dl v-bind:id="'playlist_' + playlist.id" :title="playlist.name">
      <dt>Name</dt>
      <dd>{{ playlist.name }}</dd>

      <dt>Public</dt>
      <dd :class="{ isPublic: playlist.public, isPrivate: !playlist.public }">
        {{ playlist.public ? "Yes" : "No" }}
      </dd>
      <!-- <dd :class="playlist.public ? 'isPublic' : 'isPrivate'">
        {{ playlist.public ? "Yes" : "No" }}
      </dd> -->
      <!-- <dd :style="{ color: playlist.public ? 'red' : 'green' }">
        {{ playlist.public ? "Yes" : "No" }}
      </dd> -->

      <dt>Description</dt>
      <dd>{{ playlist.description }}</dd>
    </dl>
  </div>
</template>

<script lang="ts">
//vbase-3-ts

import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    message: "123",
    playlist: {
      id: "123",
      name: "Playlist 123",
      public: true,
      description: "Best playlist",
    },
  }),
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
