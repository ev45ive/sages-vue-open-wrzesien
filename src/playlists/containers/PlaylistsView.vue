<template>
  <div>
    <!-- .row>.col*2 -->
    <div class="row">
      <div class="col">
        <PlaylistList />
      </div>
      <div class="col">
        <button class="btn btn-danger" @click="showDetails">Cancel</button>
        <button class="btn btn-primary" v-on:click="showEditor()">Edit</button>

        <PlaylistDetails v-show="mode === 'details'" />
        <PlaylistEditor :hidden="mode !== 'editor'"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import PlaylistDetails from "../components/PlaylistDetails.vue";
import PlaylistEditor from "../components/PlaylistEditor.vue";
import PlaylistList from "../components/PlaylistList.vue";

const mode = ref<"details" | "editor">("details");

const showDetails = () => (mode.value = "details");
const showEditor = () => (mode.value = "editor");

</script>

<style scoped></style>
