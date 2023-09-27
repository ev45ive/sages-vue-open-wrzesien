<template>
  <slot v-bind="{ user, login, logout }"></slot>

  <!-- {{ $slots.default({ user, login, logout }) }} -->
</template>

<script setup lang="ts">
import { inject } from "vue";
import { USER_TOKEN } from "./tokens";

const userContext = inject(USER_TOKEN);
if (!userContext) throw new Error("missing user Context provider");

const { user, login, logout } = userContext;
</script>

<style scoped></style>
