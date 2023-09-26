<template>
    <div>
        <div class="row">
            <div class="col">
                <SearchForm/>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <ResultsGrid/>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import ResultsGrid from '../components/ResultsGrid.vue';
import SearchForm from '../components/SearchForm.vue';


</script>

<style scoped>

</style>