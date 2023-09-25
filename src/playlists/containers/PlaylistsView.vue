<template>
  <div>
    <!-- .row>.col*2 -->
    <div class="row">
      <div class="col">
        <PlaylistList />
      </div>
      <div class="col">
        <button class="btn btn-danger">Cancel</button>
        <button class="btn btn-primary">Edit</button>
        
        <PlaylistDetails v-show="true" />
        <PlaylistEditor :hidden="true"/>
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

// export default defineComponent({
//   setup() {
//     return {};
//   },
//   components: { PlaylistDetails, PlaylistEditor, PlaylistList },
// });
</script>

<style scoped></style>
