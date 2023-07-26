<script setup>
const props = defineProps(['text', 'color', 'link', 'newTab']);

const colorClass = {
    blue: "bg-[#024873] drop-shadow-glowBlue",
    pink: "bg-[#BF2C7D] drop-shadow-glowPink",
    purple: "bg-[#522B6F] drop-shadow-glowDarkPurple hover:bg-[#68378E] hover:drop-shadow-glowPurple",
}
</script>
<template>
    <a 
        :href="props.link"
        class="text-white cursor-pointer text-center w-64 py-2 px-8 rounded-full mt-2 font-bold transition-all duration-300"
        :class="colorClass[color]"
        :target="newTab ? '_blank' : ''"
    >
        {{ text }}
    </a>

</template>