<script setup>
const props = defineProps(['text', 'color']);

const colorClass = {
    blue: "text-[#024873]",
    pink: "text-[#BF2C7D]",
    purple: "text-[#68378E]",
}
</script>

<template>
    <div>
        <div class="flex flex-row opacity-5 items-center justify-center">
            <h3 
                class="text-center uppercase text-7xl font-light font-spectral"
                :class="`${colorClass[color]}`"
            >
                <strong class="font-bold">{{ text }}</strong>
            </h3>
        </div>
        <div class="flex -mt-[3.7rem] flex-row items-center justify-center">
            <h3 
                class="text-center text-4xl font-light font-spectral"
                :class="`${colorClass[color]}`"
            >
                <strong class="font-bold">{{ text }}</strong>
            </h3>
        </div>
    </div>
</template>