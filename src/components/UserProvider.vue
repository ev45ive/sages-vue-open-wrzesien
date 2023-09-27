<template>
  <slot />
</template>

<script setup lang="ts">
import { onMounted, provide } from "vue";
import { useUser } from "../common/composables/useAlbumSearch";
import { checkLogin, login, logout } from "../common/services/Auth";
import { USER_TOKEN } from "./tokens";

onMounted(() => checkLogin());

// Using QueryClientProvider
const { data: user } = useUser();

// TIP: always provide ref/computed
provide(USER_TOKEN, {
  user,
  login,
  logout,
});
</script>

<style scoped></style>
