<template>
  <div class="relative">
    <img
      :src="data.gameDto.principalImage_web || data.gameDto.imgCarouselWeb"
      alt="game banner"
      class="w-full h-[850px] object-cover opacity-80"
    />

    <div class="absolute bottom-0 left-20 p-10">
      <h1 class="text-3xl">{{ data.gameDto.name }}</h1>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const { data } = await useFetch(
  `https://mit8jvzvpe.us-east-1.awsapprunner.com/game/desktop/${route.params.slug}?location=ES`
);
</script>
