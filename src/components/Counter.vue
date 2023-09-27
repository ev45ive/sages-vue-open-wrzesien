<template>
  <div class="d-flex flex-column gap-3">
    <h1>{{ count }}</h1>
    <h3>{{ doubleCount }}</h3>

    <button @click="increment">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "../common/stores/counter";
import { storeToRefs } from "pinia";

const store = useCounterStore();
const { increment } = store;

const { count, doubleCount } = storeToRefs(store);
</script>

<style scoped></style>
