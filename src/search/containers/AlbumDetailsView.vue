<template>
  <div>
    <div>
      <Loader />
      <div class="row">
        <div class="col">
          <h1 class="display-3">Album titele</h1>
          <small class="text-muted">{{ albumId }}</small>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <AlbumCard :album="mockAlbums[0]" />
        </div>
        <div class="col">
          <dl>
            <dt>Artist</dt>
            <dd>album.artists[0].name</dd>
            <dt>Release date</dt>
            <dd>album.release_date</dd>
            <dt>Tracks</dt>
            <dd>album.tracks_number</dd>
          </dl>
          <div class="list-group">
            <div class="list-group-item">1. Track 01</div>
            <div class="list-group-item">2. Track 02</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { mockAlbums } from "../../common/fixtures/mockAlbums";
import Loader from "../../components/Loader.vue";
import AlbumCard from "../components/AlbumCard.vue";

// http://localhost:5173/music/albums/5Tby0U5VndHW0SomYO7Id7

// TODO: get id
useRoute().params;
const albumId = "123";

const album = mockAlbums[0];

// TODO: get data, loader
// useAlbum(albumId)

// TODO: show on screen
// - titele
// - albumId
// - AlbumCard album + images
// - Artist [0] .name
// - Release date
// - Tracks - show all tracks in list
</script>

<style scoped></style>
