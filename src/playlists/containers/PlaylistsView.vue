<template>
  <div>
    <div class="row">
      <div class="col">
        <PlaylistList
          :playlists="playlists"
          :selected-id="selected?.id"
          @remove="removePlaylist"
          @select="selectPlaylistById($event)"
        />
        <button class="btn btn-primary mt-5" @click="mode = 'creator'">
          Create New
        </button>
      </div>
      <div class="col">
        <KeepAlive>
          <PlaylistDetails
            :playlist="selected"
            @edit="showEditor"
            v-if="mode === 'details'" />

          <PlaylistEditor
            @cancel="showDetails"
            @save="savePlaylist($event)"
            :playlist="selected"
            v-else-if="mode === 'editor'" />

          <PlaylistEditor
            @cancel="showDetails"
            @save="createPlaylist($event)"
            v-else-if="mode === 'creator'"
        /></KeepAlive>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import PlaylistDetails from "../components/PlaylistDetails.vue";
import PlaylistEditor from "../components/PlaylistEditor.vue";
import PlaylistList from "../components/PlaylistList.vue";
import { mockPlaylists } from "../components/mockPlaylists";
import { Playlist } from "../../common/model/Playlist";

const mode = ref<"details" | "editor" | "creator">("details");

const playlists = ref<Playlist[]>(mockPlaylists);
const selectedId = ref<Playlist["id"] | undefined>("123");

const selected = computed(() =>
  playlists.value.find((p) => p.id === selectedId.value)
);

const selectPlaylistById = (id: string) => (selectedId.value = id);

const showDetails = () => (mode.value = "details");
const showEditor = () => (mode.value = "editor");

const removePlaylist = (id: Playlist["id"]) => {
  const index = playlists.value.findIndex((p) => p.id === id);
  playlists.value.splice(index, 1);
  selectedId.value = undefined;
  mode.value = "details";
};

const savePlaylist = (draft: Playlist) => {
  const index = playlists.value.findIndex((p) => p.id === draft.id);
  playlists.value[index] = draft;
  mode.value = "details";
};

const createPlaylist = (draft: Playlist) => {
  draft.id = crypto.randomUUID();
  playlists.value.push(draft);
  selectedId.value = draft.id;
  mode.value = "details";
};
</script>

<style scoped></style>
