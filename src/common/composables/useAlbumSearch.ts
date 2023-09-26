import { Ref, ref, watch } from "vue";
import axios from "axios";
import { Album } from "../model/Album";

export function useAlbumSearch(query: Ref<string>) {
  const results = ref<Album[]>([]);

  watch(query, async (query, _, onCleanup) => {
    if (!query) return;

    const ctrl = new AbortController();

    const { data } = await axios.get("albums.json", { signal: ctrl.signal });
    results.value = data;

    onCleanup(() => ctrl.abort());
  });

  return { data: results };
}
