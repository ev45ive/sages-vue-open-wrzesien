<template>
  <div>
    <div class="row">
      <div class="col">
        <PlaylistList
          :playlists="playlists"
          :selected-id="selected.id"
          @select="selectPlaylistById($event)"
        />
      </div>
      <div class="col">
        <PlaylistDetails
          :playlist="selected"
          @edit="showEditor"
          v-if="mode === 'details'"
        />

        <PlaylistEditor
          @cancel="showDetails"
          @save="savePlaylist($event)"
          :playlist="selected"
          v-else-if="mode === 'editor'"
        />
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
const selected = ref<Playlist>(mockPlaylists[0]);

const selectPlaylistById = (id: string) => {
  selected.value = playlists.value.find((p) => p.id === id)!;
};

const showDetails = () => (mode.value = "details");
const showEditor = () => (mode.value = "editor");
const savePlaylist = (draft: Playlist) => {
  mode.value = "editor";
  selected.value = draft;
};
</script>

<style scoped></style>
