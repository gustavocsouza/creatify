<script setup>
const props = defineProps(['project']);
</script>

<template>
    <div>
        <div class="flex-col flex items-center justify-between gap-4">
            <a target="_blank" :href="project?.link">
                <img 
                    class="shadow-md w-full rounded shadow-[#c4c4c4]"
                    :src="project?.img" 
                    alt="Site JM Martinello"
                />
            </a>
            <div class="text-center">
                <p class="font-black text-2xl">{{ project?.title }}</p>
                <p class="uppercase text-[#68378E]">{{ project?.area }}</p>
            </div>
        </div>
    </div>
</template>
