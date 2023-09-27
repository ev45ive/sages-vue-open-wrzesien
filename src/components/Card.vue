<template>
  <div>
    <div class="card">
      <div class="card-header" v-if="$slots.header">
        <div class="card-title">
          <slot name="header"></slot>
        </div>
      </div>
      <div class="card-body">
        <!-- <slot name="default"></slot> -->
        <slot></slot>
      </div>
      <div class="card-footer" v-if="$slots.footer">
        <slot name="footer"> Default value </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
