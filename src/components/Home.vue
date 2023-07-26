<script setup>
import { Vue3Lottie } from 'vue3-lottie';
import GlowButton from './GlowButton.vue';
import InstaIcon from '../assets/InstaIcon.vue';
</script>

<template>
    <div class="sm:h-[28rem] pt-24 md:pt-24 sm:pt-12 flex flex-col-reverse sm:flex-row">
        <div class="sm:w-1/2 h-full sm:text-left text-center flex justify-center flex-col gap-4">
            <h1
                class="font-bold sm:text-6xl text-3xl"
            >
                Criação de sites <span class="text-[#68378E] font-bold">profissionais</span>
            </h1>
            <h2 class="font-light">
                Criamos soluções web sob medida para sua empresa, combinando design atraente com funcionalidades avançadas. Impulsione sua presença online e alcance resultados excepcionais com nossos sites personalizados e responsivos.
            </h2>
            <div class="flex m-auto sm:m-0 gap-2 sm:gap-4">
                <GlowButton
                    class="mt-8"
                    text="Solicite um orçamento"
                    color="purple"
                    link="https://api.whatsapp.com/send?phone=5551999241928&text=Ol%C3%A1,%20me%20chamo%20Gustavo,%20em%20que%20posso%20ajudar?"
                    :newTab="true"
                ></GlowButton>
                <div class="mt-8 flex flex-row gap-1 sm:gap-4">
                    <InstaIcon link="https://www.instagram.com/creatifylabs/"/>
                </div>
            </div>
        </div>
        <div class="sm:w-1/2">
            <Vue3Lottie
                class="w-10/12 m-auto"
                animationLink="https://lottie.host/dfbef481-dbe1-4096-9ad7-0385db1b6eae/LKS2R5sH35.json"
                :height="120"
                :width="120"
            />
        </div>
    </div>
</template>