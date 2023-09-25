<template>
  <div>
    <!-- .row>.col*2 -->
    <div class="row">
      <div class="col">
        <!-- <PlaylistList  :value="playlists[0].name"  />
        <PlaylistList  :value="playlists[0]"  />
        <PlaylistList  :value="playlists"  /> -->

        <PlaylistList  :playlists="playlists"  />

        <!-- <input type="text" :value="playlists[0].name" > -->

      </div>
      <div class="col">

        <button class="btn btn-danger" @click="showDetails">Cancel</button>
        <button class="btn btn-primary" @click="showEditor">Edit</button>

        <PlaylistDetails v-if="mode === 'details'" />
        <PlaylistEditor v-else-if="mode === 'editor'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import PlaylistDetails from "../components/PlaylistDetails.vue";
import PlaylistEditor from "../components/PlaylistEditor.vue";
import PlaylistList from "../components/PlaylistList.vue";
import { mockPlaylists } from "../components/mockPlaylists";
import { Playlist } from "../../common/model/Playlist";

const mode = ref<"details" | "editor">("details");

const playlists = ref<Playlist[]>(mockPlaylists);

const showDetails = () => (mode.value = "details");
const showEditor = () => (mode.value = "editor");
</script>

<style scoped></style>
