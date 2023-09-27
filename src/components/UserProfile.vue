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
import { Ref, inject } from "vue";
import { UserProfile } from "../common/model/User";

const {
  value: { user, login, logout },
} = inject("USER") as Ref<{
  user: UserProfile;
  login: () => void;
  logout: () => void;
}>;
</script>

<style scoped></style>
