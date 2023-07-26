<script setup>
const props = defineProps(['service']);
</script>

<template>
    <div>
        <div class="flex-col flex items-center justify-between gap-4">
            <component
                :is="service.icon"
            ></component>        
        
            <div class="text-center">
                <p class="font-black md:text-lg text-2xl">{{ service.title }}</p>
                <hr 
                    class="drop-shadow-glowPurple mt-2 mb-6 w-32 m-auto"
                    style="height:2px; border-width:0; color:#68378E; background-color:#68378E"
                >
                <p class="px-6 text-sm">{{ service.description }}</p>
            </div>
        </div>
    </div>
</template>
