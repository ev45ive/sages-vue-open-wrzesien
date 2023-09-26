import { ref, watch } from "vue";
import { musicAPI } from "../services/musicAPI";



export function useFetch<T, P>(url: string, params?: P) {
const results = ref<T>();
const error = ref<Error>();
const isLoading = ref(false);

watch(
() => params,
async (query, _, onCleanup) => {
if (!query) return;
const ctrl = new AbortController();
isLoading.value = true;
try {
const { data } = await musicAPI.get<T>(url, {
params,
signal: ctrl.signal,
});
results.value = data;
error.value = undefined;
} catch (e: unknown) {
if (e instanceof Error) error.value = e;
} finally {
isLoading.value = false;
}
onCleanup(() => ctrl.abort());
},
{
deep: true,
}
);

return { data: results, error, isLoading };
}
