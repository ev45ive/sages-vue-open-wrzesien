<script setup lang="ts">
import PlaylistsView from "./playlists/containers/PlaylistsView.vue";
</script>

<template>
  <div>
    <!-- .container>.row>.col -->
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="display-3">Hello Vue</h1>
          <PlaylistsView />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
