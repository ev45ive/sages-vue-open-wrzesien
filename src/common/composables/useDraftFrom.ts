import { ref, watch, WatchSource } from "vue";

export function useDraftFrom<T extends object>(source: WatchSource<T | undefined>, initial: T) {
const draft = ref<T>(initial);

watch(source, (value) => (draft.value = { ...draft.value, ...value }), {
immediate: true,
});
return draft;
}
