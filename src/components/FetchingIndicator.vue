<template>
  <div class="container position-fixed">
    <p class="alert alert-info" v-if="isFetching">Loading</p>
  </div>
</template>

<script setup lang="ts">
import { useIsFetching } from "vue-query";

const isFetching = useIsFetching();
</script>
