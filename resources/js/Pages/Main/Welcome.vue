<script setup>
import BreezeApp from '@/Layouts/App.vue';
import BreezeCarouselHeader from '@/Components/CarouselHeader.vue';
import BreezeCarouselBottom from '@/Components/CarouselBottom.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
})
</script>

<template>
    <Head title="Welcome" />
    <BreezeApp
    :canLogin="canLogin"
    :canRegister="canRegister"
    >
        <template #header>
            <div class="w-full h-[80vh]">
                <BreezeCarouselHeader/>
            </div>
        </template>

        <!-- Layanan paling populer -->
        <div class="container mx-auto mt-4">
            <div class="flex justify-between items-center">
                <h2 class="text-xl font-bold">Ettss.... <br> Berikut Layanan Paling Populer</h2>
                <a href="#" class="px-4 py-2 rounded-full min-w-[160px] max-w-[200px] text-center bg-secondary text-base font-semibold text-white hover:bg-secondary/75 focus:ring-4 focus:ring-secondary/50 focus:outline-none transition">Semua Layanan</a>
            </div>

            <Carousel :settings="settings" :breakpoints="breakpoints" class="mt-4">
                <Slide v-for="(popularService, index) in popularServices" :key="index" class="p-3.5">
                    <a href="#" class="carousel__item p-2.5 bg-white rounded-[2rem] shadow-sm">
                        <img :src="'/img/layanan_populer/' + popularService.img" :alt="popularService.img" class="w-full h-full rounded-[2rem]">
                        <div class="text-left my-3.5 ml-3">
                            <h3 class="text-2xl font-bold text-primary hover:text-primary/90">{{ popularService.title }}</h3>
                            <p class="text-sm font-normal">{{ popularService.description }}</p>
                        </div>
                    </a>
                </Slide>

                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
        <!-- // Layanan paling populer -->

        <!-- Kenapa lokabis? -->
        <ListCard :business="business" :ontitle="true" />
        <!-- //Kenapa lokabis? -->

        <!-- Tutorial -->
        <div class="bg-muted mt-20 px-10 py-24">
            <div class="container mx-auto flex flex-wrap justify-around">
                <div class="relative">
                    <iframe class="w-80 h-80 rounded-[3rem]" src="https://www.youtube.com/embed/Aaa4_5xy84Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="absolute -bottom-1/4 left-1/2 -translate-x-1/2 -translate-y-3/4 w-3/4 bg-white rounded-[20px] px-6 py-3 text-lg text-center text-primary font-bold leading-tight shadow-md">Ini Video Tutorialnya</div>
                </div>
                <div class="w-1/2 text-left">
                    <h2 class="text-4xl font-bold">Gimana Sih Cara Kerjanya?</h2>
                    <ul class="grid grid-rows-3 grid-flow-col gap-8 mt-8">
                        <li v-for="(tutorial, index) in tutorials" :key="index" class="flex items-center gap-2">
                            <div class="max-w-[25%]">
                                <span class="flex justify-center items-center bg-secondary w-12 h-12 rounded-2xl text-lg text-white font-bold">0{{ ++index }}</span>
                            </div>
                            <span class="text-base font-medium">{{ tutorial }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- //Tutorial -->

        <!-- Testimoni -->
        <div class="pt-20">
            <ListCardPetik2 :datas="testimonies" :ontitle="true" />
        </div>
        <!-- //Testimoni -->

        <!-- Rekomendasi Top Designer -->
        <div class="container mx-auto mt-20">
            <div class="flex justify-between items-center">
                <h2 class="text-2xl font-bold text-gray-900 leading-tight">Rekomendasi <br> Top Designer</h2>
                <a href="#" class="px-4 py-2 rounded-full min-w-[160px] max-w-[200px] text-center bg-secondary text-base font-semibold text-white hover:bg-secondary/75 focus:ring-4 focus:ring-secondary/50 focus:outline-none transition">Explore</a>
            </div>
            <div class="grid grid-cols-3 gap-6">
                <div v-for="i in 3" :key="i" class="rounded-[46px] overflow-hidden bg-white mt-6 shadow-lg">
                    <div class="relative">
                        <img src="https://picsum.photos/200" class="w-full h-56 bg-cover" alt="">
                        <a href="#" class="absolute -bottom-1/4 right-8 -translate-y-1/2 flex justify-center items-center bg-secondary rounded-full w-14 h-14">
                            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                    <div class="px-6 py-4">
                        <div class="flex items-center gap-3">
                            <img src="https://xsgames.co/randomusers/avatar.php?g=male" class="w-14 h-14 rounded-full" alt="">
                            <div>
                                <h4 class="text-base font-bold text-gray-900">Eko Sulisto</h4>
                                <p class="text-xs font-normal text-gray-900">Founder Nasbox corp</p>
                            </div>
                        </div>
                        <p class="text-base font-semibold text-gray-900 leading-tight mt-4">Gaperlu lagi post instgram lagi kami siap membantu</p>
                    </div>
                    <hr class="my-2 bg-primary h-[2px]">
                    <div class="px-6 py-4 flex justify-between items-center">
                        <div class="flex items-center gap-1">
                            <svg class="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <span class="text-lg font-semibold text-medium opacity-30">4,5 (123)</span>
                        </div>
                        <a href="#" class="px-6 py-3 rounded-full max-w-[200px] text-center bg-primary text-base font-medium text-white hover:bg-primary/75 focus:ring-4 focus:ring-primary/50 focus:outline-none transition">Rp. 200.000</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- // Rekomendasi Top Designer -->

        <!-- Carousel -->
        <BreezeCarouselBottom/>
        <!-- //Carousel -->
    </BreezeApp>
</template>
<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

// Setions
import ListCard from '@/Sections/ListCard.vue';
import ListCardPetik2 from '@/Sections/ListCardPetik2.vue';

export default defineComponent({
  name: 'Breakpoints',
  components: {
    Carousel,
    Slide,
    Navigation,
    ListCard,
    ListCardPetik2,
  },
  data: () => ({
    popularServices: [
        {
            'img': 'design.png',
            'title': 'Design Logo',
            'description': 'Bangun brand kamu & temukan yang cocok',
        },
        {
            'img': 'web-design.png',
            'title': 'Web Design',
            'description': 'Bangun brand kamu & temukan yang cocok',
        },
        {
            'img': 'packaging.png',
            'title': 'Packaging',
            'description': 'Bangun brand kamu & temukan yang cocok',
        },
        {
            'img': 'landing-page.png',
            'title': 'Landing Page',
            'description': 'Bangun brand kamu & temukan yang cocok',
        },
//
        {
            'img': 'design.png',
            'title': 'Design Logo',
            'description': 'Bangun brand kamu & temukan yang cocok',
        },
        {
            'img': 'web-design.png',
            'title': 'Web Design',
            'description': 'Bangun brand kamu & temukan yang cocok',
        },
        {
            'img': 'packaging.png',
            'title': 'Packaging',
            'description': 'Bangun brand kamu & temukan yang cocok',
        },
        {
            'img': 'landing-page.png',
            'title': 'Landing Page',
            'description': 'Bangun brand kamu & temukan yang cocok',
        },
    ],
    business: [
        {
            'img': 'profit.png',
            'text': 'Membantu Bisnis Anda Growth',
        },
        {
            'img': 'money.png',
            'text': 'Jaminan Uang Kembali',
        },
        {
            'img': 'solution.png',
            'text': 'Banyak Layanan Yan Sesuai Budget Anda',
        },
    ],
    tutorials: [
        'Temukan Freelancer Paling The Best',
        'Pilih Paket Nampol',
        'Bayar Dulu Yaa Jangan Lupa',
        'Projek Dikerjakan',
        'Review Projek',
        'Selesai',
    ],
    testimonies: {
        title: 'Testimoni',
        subtitle: 'Mereka yang sudah menggunakan dan puas dengan layanan kami',
        items: [
            {
                text: 'pilih paket yang tersedia lalu - penuhi pembayaran - beri brief yang sangat detail untuk calon freelancer anda ',
                name: 'Eko Sulisto',
                position: 'Founder Nasbox corp',
            },
            {
                text: 'pilih paket yang tersedia lalu - penuhi pembayaran - beri brief yang sangat detail untuk calon freelancer anda ',
                name: 'Eko Sulisto',
                position: 'Founder Nasbox corp',
            },
            {
                text: 'pilih paket yang tersedia lalu - penuhi pembayaran - beri brief yang sangat detail untuk calon freelancer anda ',
                name: 'Eko Sulisto',
                position: 'Founder Nasbox corp',
            },
        ]
    },
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: 'start',
      },
    },
  }),
})
</script>
