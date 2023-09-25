<template>
  <div>
    <!-- .row>.col*2 -->
    <div class="row">
      <div class="col">
        <PlaylistList />
      </div>
      <div class="col">
        <PlaylistDetails />
        <PlaylistEditor />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PlaylistDetails from "../components/PlaylistDetails.vue";
import PlaylistEditor from "../components/PlaylistEditor.vue";
import PlaylistList from "../components/PlaylistList.vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: { PlaylistDetails, PlaylistEditor, PlaylistList },
});
</script>

<style scoped></style>
