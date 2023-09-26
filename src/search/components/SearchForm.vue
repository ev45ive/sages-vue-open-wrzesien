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
import { ref } from "vue";

const $emit = defineEmits<{
  (e: "search", query: string): void;
}>();

const query = ref("");

const send = () => {
  $emit("search", query.value);
};
</script>

<style scoped></style>
