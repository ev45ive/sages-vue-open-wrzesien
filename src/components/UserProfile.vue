<template>
  <div class="ms-auto d-flex align-items-center gap-2 text-white-50">
    <template v-if="user">
      <p>Welcome, {{ user.display_name }}</p>
      <button class="btn btn-dark float-end" @click="logout">Logout</button>
    </template>
    <template v-else>
      <p>Welcome, Guest</p>
      <button class="btn btn-dark float-end" @click="login">Login</button>
    </template>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { USER_TOKEN } from "./tokens";

const userContext = inject(USER_TOKEN);
if (!userContext) throw new Error("missing user Context provider");

const { user, login, logout } = userContext;
</script>

<style scoped></style>
