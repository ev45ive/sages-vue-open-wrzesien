<template>
  <form @submit.prevent="send">
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Search"
        v-model="query"
      />
      <button class="btn btn-outline-secondary" type="submit">Search</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { watchDebounced } from "@vueuse/core";

const props = defineProps<{ query: string }>();
const $emit = defineEmits<{
  (e: "search", query: string): void;
}>();

const query = ref(props.query);

watch(
  () => props.query,
  (q) => (query.value = q)
);

watchDebounced(query, (q) => $emit("search", q), { debounce: 500 });

const send = () => {
  $emit("search", query.value);
};
</script>

<style scoped></style>
