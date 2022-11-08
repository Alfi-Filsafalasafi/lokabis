<template>
    <Carousel :items-to-show="1.15" :autoplay="5000" :wrap-around="true">
      <Slide v-for="slide in 10" :key="slide" class="p-6 min-h-screen">
        <div class="carousel__item relative bg-primary opacity-40 w-full min-h-[65%] mt-24 rounded-[61px] flex items-end p-16 overflow-hidden">
            <h1 class="mb-6 text-[3.5rem] text-left text-white font-medium leading-none -tracking-tight">
                Local Freelance<br>For <span class="font-playfair-display">Local Business</span>
            </h1>
        </div>
      </Slide>
    </Carousel>
  </template>

  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Slide } from 'vue3-carousel'

  import 'vue3-carousel/dist/carousel.css'

  export default defineComponent({
    name: 'WrapAround',
    components: {
      Carousel,
      Slide,
    },
  })
  </script>

<style scoped>

/* .carousel__viewport {
  perspective: 2000px;
} */

/* .carousel__track {
  transform-style: preserve-3d;
} */

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  /* transform: rotateY(-20deg) scale(0.9); */
}

.carousel__slide--active > .carousel__item {
  /* transform: rotateY(20deg) scale(0.9); */
  opacity: 1;
}

.carousel__slide--prev {
  opacity: 1;
  /* transform: rotateY(-10deg) scale(0.95); */
}

.carousel__slide--next {
  opacity: 1;
  /* transform: rotateY(10deg) scale(0.95); */
}

.carousel__slide--active {
  opacity: 1;
  /* transform: rotateY(0) scale(1.1); */
}
</style>
