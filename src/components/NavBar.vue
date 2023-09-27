<template>
  <div>
    <nav
      class="navbar navbar-expand-sm bg-body-tertiary mb-3 bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div class="container">
        <RouterLink class="navbar-brand" to="/">MusicApp</RouterLink>
        <button class="navbar-toggler" type="button" @click="open = !open">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" :class="{ show: open }">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/playlists" active-class="active"
                >Playlists</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink
                class="nav-link"
                :to="{ name: 'AlbumSearch', query: { q: '' } }"
                >Search</RouterLink
              >
            </li>
          </ul>
          <UserProfile v-slot="{ user, login, logout }">
            <div class="ms-auto d-flex align-items-center gap-2 text-white-50">
              <template v-if="user">
                <p>Welcome, {{ user.display_name }}</p>
                <button class="btn btn-dark float-end" @click="logout">
                  Logout
                </button>
              </template>
              <template v-else>
                <p>Welcome, Guest</p>
                <button class="btn btn-dark float-end" @click="login">
                  Login
                </button>
              </template>
            </div>
          </UserProfile>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import UserProfile from "./UserProfile.vue";

const open = ref(false);
</script>

<style scoped></style>
