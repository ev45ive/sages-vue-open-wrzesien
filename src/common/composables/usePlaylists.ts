import { ref, computed } from "vue";
import { mockPlaylists } from "../../playlists/components/mockPlaylists";
import { Playlist } from "../model/Playlist";

export function usePlaylists() {
  const playlists = ref<Playlist[]>(mockPlaylists);
  const selectedId = ref<Playlist["id"] | undefined>("123");

  const selected = computed(() =>
    playlists.value.find((p) => p.id === selectedId.value)
  );

  const select = (id: string) => (selectedId.value = id);

  const remove = (id: Playlist["id"]) => {
    const index = playlists.value.findIndex((p) => p.id === id);
    playlists.value.splice(index, 1);
    selectedId.value = undefined;
    // mode.value = "details";
  };

  const save = (draft: Playlist) => {
    const index = playlists.value.findIndex((p) => p.id === draft.id);
    playlists.value[index] = draft;
    // mode.value = "details";
  };

  const create = (draft: Playlist) => {
    draft.id = crypto.randomUUID();
    playlists.value.push(draft);
    selectedId.value = draft.id;
    // mode.value = "details";
  };

  return { playlists, selected, select, remove, save, create };
}
