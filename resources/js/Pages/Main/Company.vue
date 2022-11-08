<script setup>
import BreezeApp from '@/Layouts/App.vue';
import { Link } from '@inertiajs/inertia-vue3';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
})
</script>
<template>
    <BreezeApp
    :canLogin="canLogin"
    :canRegister="canRegister"
    >
        <template #header>
            <div class="relative w-full h-screen bg-primary pt-28 overflow-hidden">
                <img src="/img/company/Ellipse 21.png" class="absolute top-10 right-0 w-[20vmax] h-auto" alt="Ellipse 21">
                <img src="/img/company/Ellipse 21.png" class="absolute bottom-0 right-0 w-[20vmax] h-auto" alt="Ellipse 21.2">
                <img src="/img/company/beautiful-asian-muslim.png" class="absolute bottom-0 left-0 w-[60vmax] h-auto" alt="beautiful-asian-muslim">

                <div class="relative w-full h-full flex justify-center">
                    <div class="w-1/2 pl-12 pt-8">
                        <h1 class="text-6xl text-white font-semibold leading-10">Lokabis<br/>.com</h1>
                    </div>
                    <div class="w-1/2 flex items-center">
                        <div class="pt-10">
                            <h1 class="text-7xl text-white font-medium -tracking-tight leading-[1.15]">Solusi Brand <br/> Usaha Mikro <br/><span class="font-bold">Naik Kelas</span></h1>
                            <a href="#" class="inline-block px-6 py-2.5 mt-8 rounded-full bg-secondary border-2 border-transparent text-center text-lg font-semibold text-white shadow-md hover:bg-transparent hover:border-secondary hover:text-secondary focus:ring-4 focus:ring-secondary/50 focus:outline-none transition">Semua Layanan</a>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <!-- apa itu lokabis -->
        <div class="bg-white min-h-[65vh] flex justify-center items-center">
            <div class="container text-center">
                <h1 class="text-5xl font-bold text-primary leading-tight mb-4">Apa Itu <br> Lokabis.com ?</h1>
                <p class="text-2xl">
                    <span class="font-semibold">Lokabis.com</span> adalah <span class="font-semibold">Platform Freelancer Design dan IT</span> yang tujuannya adalah membantu para usaha mikro untuk mendapatkan tenaga kerja kreatif.
                </p>
            </div>
        </div>
        <!-- //apa itu lokabis -->

        <!--  -->
        <ListCard :business="business" :ontitle="false" />
        <!--  -->

        <!-- Our Team -->
        <div class="mt-20 py-14 bg-white">
            <h1 class="text-5xl font-bold text-primary leading-tight text-center mb-5">Our Team</h1>
            <ListCardPetik2 :datas="teams" :ontitle="false" class="bg-transparent" />
        </div>
        <!-- //Our Team -->

        <!-- banner -->
        <div class="grid grid-cols-4 gap-1 bg-white pt-16 pb-1">
            <div>
                <img src="img/asd/Group 371.png" alt="Group 371" class="w-full h-[300px] object-cover">
            </div>
            <div class="col-span-2">
                <img src="img/asd/Rectangle 99.png" alt="Rectangle 99.png" class="w-full h-[300px] object-cover">
            </div>
            <div>
                <img src="img/asd/Group 372.png" alt="Group 372.png" class="w-full h-[300px] object-cover">
            </div>

            <div>
                <img src="img/asd/Rectangle 104.png" alt="Rectangle 104.png" class="w-full h-[300px] object-cover">
            </div>
            <div>
                <img src="img/asd/Rectangle 103.png" alt="Rectangle 103.png" class="w-full h-[300px] object-cover">
            </div>
            <div>
                <img src="img/asd/Group 373.png" alt="Group 373.png" class="w-full h-[300px] object-cover">
            </div>
            <div>
                <img src="img/asd/Rectangle 101.png" alt="Rectangle 101.png" class="w-full h-[300px] object-cover">
            </div>
        </div>
        <!-- // banner -->
    </BreezeApp>
</template>

<script>
// sections
import ListCard from '@/Sections/ListCard.vue';
import ListCardPetik2 from '@/Sections/ListCardPetik2.vue';
export default {
    components: {
        ListCard,
        ListCardPetik2,
    },
    data() {
        return {
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
            teams: {
                title: '',
                ontitle: '',
                items: [
                    {
                        text: 'pilih paket yang tersedia lalu - penuhi pembayaran - beri brief yang sangat detail untuk calon freelancer anda',
                        name: 'Eko Sulistiyo',
                        position: 'Founder Nasbox corp'
                    },
                    {
                        text: 'pilih paket yang tersedia lalu - penuhi pembayaran - beri brief yang sangat detail untuk calon freelancer anda',
                        name: 'Eko Sulistiyo',
                        position: 'Founder Nasbox corp'
                    },
                    {
                        text: 'pilih paket yang tersedia lalu - penuhi pembayaran - beri brief yang sangat detail untuk calon freelancer anda',
                        name: 'Eko Sulistiyo',
                        position: 'Founder Nasbox corp'
                    },
                ]
            }
        }
    }
}
</script>
