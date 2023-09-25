<template>
  <div>
    <!-- <h3>Details {{ message.toString() + '!' }}</h3> -->

    <dl>
      <dt>Name</dt>
      <dd>tutaj nazwa</dd>
      <dt>Public</dt>
      <dd>No</dd>
      <dt>Description</dt>
      <dd>opis tutaj</dd>
    </dl>
  </div>
</template>

<script lang="ts">
//vbase-3-ts

import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    message: "123",
    playlist: {
      id: "123",
      name: "Playlist 123",
      public: true,
      description: "Best playlist",
    },
  }),
});
</script>

<style scoped></style>
