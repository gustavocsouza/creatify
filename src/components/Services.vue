<script setup>
import Service from './Service.vue';
import SectionTitle from './SectionTitle.vue';
import SiteInstitucionalIcon from '../assets/SiteInstitucionalIcon.vue';
import EcommerceIcon from '../assets/EcommerceIcon.vue';
import LandingPageIcon from '../assets/LandingPageIcon.vue';

const services = [
    {
        title: "Sites Institucionais",
        icon: SiteInstitucionalIcon,
        description: "Crie uma presença online profissional com nossos sites elegantes e informativos, destacando sua empresa e seus valores."
    },
    {
        title: "Landing Pages",
        icon: LandingPageIcon,
        description: "Converta visitantes em clientes com nossas Landing Pages otimizadas, oferecendo ofertas atraentes e chamadas claras para ação."
    },
    {
        title: "E-commerce",
        icon: EcommerceIcon,
        description: "Potencialize suas vendas com nossos sites E-commerce personalizados, projetados para oferecer uma experiência de compra intuitiva e cativante, garantindo o sucesso do seu negócio online."
    }
];
</script>

<template>
    <div class="sm:mt-40 mt-20">
        <SectionTitle
            class="mb-16"
            text="Serviços"
            color="purple"
        ></SectionTitle>
        <div class="sm:grid grid-cols-12 gap-12">
            <Service 
                v-for="(service, index) in services" class="sm:col-span-4 pb-12 col-span-12"
                :key="index"
                :service="service"
            ></Service>
        </div>
    </div>
</template>