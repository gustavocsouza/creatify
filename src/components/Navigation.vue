<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import LogoCreatifyVue from '../assets/LogoCreatify.vue';
import MenuIcon from '../assets/MenuIcon.vue';
import XIcon from '../assets/XIcon.vue';

const scrolledNav = ref(null);
const mobile = ref(true);
const mobileNav = ref(false);
const windowWidth = ref(null);

const toggleMobileNav = () => {
    mobileNav.value = !mobileNav.value;
}

onBeforeMount(() => {
    window.addEventListener('resize', checkScreen);
    checkScreen();
})

onMounted(() => {
    window.addEventListener('scroll', updateScroll);
})

const checkScreen = () => {
    windowWidth.value = window.innerWidth;
    if (windowWidth.value <= 750) {
        mobile.value = true;
        return;
    }

    mobile.value = false;
    mobileNav.value = false;
    return;
}

const updateScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
        scrolledNav.value = true;
        return;
    }

    scrolledNav.value = false;
    return;
}
</script>

<template>
    <header :class="{ 'scrolled-nav': scrolledNav }">
        <nav>
            <div class="branding">
                <a href="#home">
                    <LogoCreatifyVue class="w-32"></LogoCreatifyVue>
                </a>
            </div>
            <ul v-show="!mobile" class="navigation">
                <li class="link"><a href="#home">Home</a></li>
                <li class="link"><a href="#servicos">Serviços</a></li>
                <li class="link"><a href="#projetos">Projetos</a></li>
                <li class="link"><a target="_blank" href="https://api.whatsapp.com/send?phone=5551999241928&text=Ol%C3%A1,%20me%20chamo%20Gustavo,%20em%20que%20posso%20ajudar?">Contato</a></li>
            </ul>
            <div class="icon">
                <MenuIcon v-if="!mobileNav" class="menu-icon" @click="toggleMobileNav" v-show="mobile" :class="{ 'icon-active': mobileNav }"/>
                <XIcon v-else class="menu-icon" @click="toggleMobileNav" v-show="mobile" :class="{ 'icon-active': mobileNav }"/>
            </div>
            <Transition name="mobile-nav">
                <ul v-show="mobileNav" class="flex gap-4 pt-8 flex-col fixed w-full max-w-[14rem] shadow-lg shadow-[#818181] h-full bg-white top-0 left-0">
                    <li><a @click="mobileNav = false" class="font-semibold text-[#68378E]" href="#home">Home</a></li>
                    <li><a @click="mobileNav = false" class="font-semibold text-[#68378E]" href="#servicos">Serviços</a></li>
                    <li><a @click="mobileNav = false" class="font-semibold text-[#68378E]" href="#projetos">Projetos</a></li>
                    <li><a @click="mobileNav = false" class="font-semibold text-[#68378E]" target="_blank" href="https://api.whatsapp.com/send?phone=5551999241928&text=Ol%C3%A1,%20me%20chamo%20Gustavo,%20em%20que%20posso%20ajudar?">Contato</a></li>
                </ul>
            </Transition>
        </nav>
    </header>
</template>

<style scoped>
header {
    background-color: #f8f8f8;
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: .5s ease all;
}

nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 20px 0;
    transition: .5s ease all;
    width: 90%;
    margin: 0 auto;
}

ul, .link {
    font-weight: 500;
    list-style: none;
    text-decoration: none;
}

li {
    text-transform: uppercase;
    padding: 0 16px;
    margin-left: 16px;
}

.link {
    font-size: 14px;
    transition: .5s ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
}

.link:hover {
    color: #68378E;
    border-color: #68378E;
}

.branding {
    display: flex;
    align-items: center;
}

.branding img {
    width: 50px;
    transition: .5s ease all;
}

.navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
}

.icon {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 24px;
    height: 100%;
}

.menu-icon {
    cursor: pointer;
    transition: 0.8s ease all;
}

.icon-active {
    transform: rotate(180deg);
}

.scrolled-nav {
    background-color: #f8f8f8;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
}


.scrolled-nav nav {
    padding: 12px 0;

}

.scrolled-nav .branding img {
    width: 40px;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: 0.8s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
    transform: translateX(-250px);
}

.mobile-nav-enter-to,
.mobile-nav-leave-from {
    transform: translateX(0);
}

@media (min-width: 1152px) {
    nav {
        max-width: 1152px;
    }
}
</style>1