<template>
  <header
    class="fixed top-0 left-0 z-50 w-screen transition-all ease-in-out"
    :class="{
      'backdrop-blur-sm': !scroll,
      'bg-gradient-to-b from-black/80': scroll,
    }"
  >
    <nav
      class="max-w-[70%] mx-auto px-8 py-4 flex items-center justify-between"
    >
      <div class="">
        <NuxtLink to="/">
          <GatoLogo />
        </NuxtLink>
      </div>
      <div class="flex justify-center items-center gap-2">
        <NuxtLink to="/explore">
          <UButton label="Explore" variant="soft" />
        </NuxtLink>
        <NuxtLink to="login">
          <UButton label="Login" />
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
import GatoLogo from "/public/gato-logo.svg";
import { useWindowScroll } from "@vueuse/core";

const { y } = useWindowScroll();

const scroll = computed(() => y.value > 850);
</script>
