<template>
  <div>
    <div class="row">
      <div class="col">
        <PlaylistList
          :playlists="playlists"
          :selected-id="selected?.id"
          @select="selectPlaylistById($event)"
        />
        <button class="btn btn-primary mt-5" @click="mode = 'creator'">
          Create New
        </button>
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

        <PlaylistEditor
          @cancel="showDetails"
          @save="createPlaylist($event)"
          v-else-if="mode === 'creator'"
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

const mode = ref<"details" | "editor" | "creator">("creator");

const playlists = ref<Playlist[]>(mockPlaylists);
const selected = ref<Playlist | undefined>(/* mockPlaylists[0] */);

const selectPlaylistById = (id: string) => {
  selected.value = playlists.value.find((p) => p.id === id);
};

const showDetails = () => (mode.value = "details");
const showEditor = () => (mode.value = "editor");

const savePlaylist = (draft: Playlist) => {
  const index = playlists.value.findIndex((p) => p.id === draft.id);
  playlists.value[index] = draft;
  selected.value = draft;
  mode.value = "details";
};
const createPlaylist = (draft: Playlist) => {
  draft.id = crypto.randomUUID();
  playlists.value.push(draft);
  selected.value = draft;
  mode.value = "details";
};
</script>

<style scoped></style>
