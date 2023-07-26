<script setup>
import Navigation from './components/Navigation.vue';
import Home from './components/Home.vue';
import Projects from './components/Projects.vue';
import Services from "./components/Services.vue";

</script>

<template>
  <Navigation></Navigation>
  <main class="w-[90%] max-w-6xl m-auto flex flex-col pb-32">
    <Home id="home"></Home>
    <Services id="servicos"></Services>
    <Projects id="projetos"></Projects>
  </main>
</template>
