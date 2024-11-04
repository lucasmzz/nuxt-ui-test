<template>
  <div class="">
    <div class="relative">
      <UCarousel
        ref="principalCarouseRef"
        v-slot="{ item }"
        :items="principalCarousel.items"
        :ui="{ item: 'basis-full' }"
        class="overflow-hidden"
        autoplay
        indicators
        arrows
      >
        <NuxtLink
          :to="`/game/${item.game.gameSlug}`"
          :key="item.game.gameSlug"
          class="w-full h-[550px] lg:h-[850px]"
        >
          <img
            :src="item.game.principalImage_web || item.game.imgCarouselWeb"
            class="w-full h-full object-cover"
            draggable="false"
          />
        </NuxtLink>
      </UCarousel>
      <div
        class="absolute bottom-0 left-0 h-[50px] w-full bg-gradient-to-t from-[#121212]"
      ></div>
    </div>

    <div class="my-10 w-[95%] lg:w-[70%] mx-auto">
      <div v-for="carousel in carousels" :key="carousel.title" class="my-10">
        <h1 class="mb-2 font-bold tracking-wider text-xl lg:text-3xl">
          {{ carousel.title }}
        </h1>
        <UCarousel v-slot="{ item }" :items="carousel.items" arrows>
          <NuxtLink
            :to="`/game/${item.game.gameSlug}`"
            :key="item.game.gameSlug"
          >
            <div
              class="mr-3 lg:mr-1 lg:scale-95 hover:scale-100 transition-all ease-in-out"
            >
              <img
                :src="item.game.principalImage_web"
                class="h-[180px] w-[100px] lg:h-[320px] lg:w-[230px] rounded-[4px] object-cover"
              />
            </div>
          </NuxtLink>
        </UCarousel>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch(
  "https://mit8jvzvpe.us-east-1.awsapprunner.com/carrousel/games/desktop?isMobile=false&location=ES"
);

const principalCarousel = computed(() =>
  data.value?.carrosuels.find((c) => c.name === "principal")
);

const carousels = computed(() =>
  data.value?.carrosuels.filter((c) => c.name !== "principal")
);

const principalCarouseRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!principalCarouseRef.value) return;

    if (principalCarouseRef.value.page === principalCarouseRef.value.pages) {
      return principalCarouseRef.value.select(0);
    }

    principalCarouseRef.value.next();
  }, 3000);
});
</script>
