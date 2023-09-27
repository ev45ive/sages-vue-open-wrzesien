<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      v-model="query"
      v-bind="$attrs"
      />
      <!-- :placeholder="$attrs['placeholder'] as any || 'Search'" -->
      
    <button class="btn btn-outline-secondary" @click="send">Search</button>
 
  </div>
</template>

<script setup lang="ts">
import { ref, useAttrs, watch } from "vue";
import { watchDebounced } from "@vueuse/core";

defineOptions({
  inheritAttrs:false,
})
const $attrs = useAttrs()
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
