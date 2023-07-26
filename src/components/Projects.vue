<script setup>
    import { ref } from 'vue';
    import { supabase } from '../supabase';
    import Project from './Project.vue';
    import SectionTitle from './SectionTitle.vue';

    const projects = ref(null);

    const getProjects = async () => {
        const { data } = await supabase
            .from('projects')
            .select();

        projects.value = data;
    };

    getProjects();
</script>

<template>
    <div class="sm:mt-24 mt-20">
        <SectionTitle
            class="mb-24"
            text="Projetos"
            color="purple"
        ></SectionTitle>
        <div class="grid sm:grid-cols-12 grid-cols-4 gap-12">
            <Project 
                v-for="project in projects" class="col-span-4 hover:scale-105 transition-all duration-300"
                :key="project.id"
                :project="project"
            ></Project>
        </div>
    </div>
</template>