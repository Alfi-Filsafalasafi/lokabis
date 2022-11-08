<template>
    <Carousel :items-to-show="1.15" :autoplay="5000" :wrap-around="true">
      <Slide v-for="slide in 10" :key="slide" class="p-6 min-h-[80vh]">
        <div class="carousel__item relative bg-primary opacity-40 w-full min-h-[83%] mt-28 rounded-[61px] flex items-center px-16 overflow-hidden">
            <h1 class="text-6xl text-left text-white font-medium leading-none -tracking-tighter">Solusi Brand <br> Usaha Mikro <br> <b>Naik kelas</b></h1>
            <div class="absolute -bottom-1/2 -right-[18%] w-[28rem] h-[28rem] bg-secondary rounded-full flex justify-center items-center">
                <div class="w-1/2 h-1/2 bg-primary rounded-full"></div>
            </div>
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
