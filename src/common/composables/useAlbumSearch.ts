import { Ref, ref } from "vue";

import { mockAlbums } from "../fixtures/mockAlbums";

export function useAlbumSearch(query: Ref<string>) {
  const data = ref([]);

  // TODO: ???
  mockAlbums;

  return { data };
}
