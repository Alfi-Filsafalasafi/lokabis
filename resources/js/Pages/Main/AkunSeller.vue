<script setup>
import { Head } from '@inertiajs/inertia-vue3';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
})
</script>
<template>
  <Head title="seller account" />

  <BreezeApp2
  :canLogin="canLogin"
  :canRegister="canRegister"
  >
  <div class="pt-48 pb-24 px-14 grid grid-cols-3 gap-8">
    <div class="px-4">
        <div class="w-full bg-white rounded-3xl p-4 pt-6">
            <div class="flex justify-end items-center gap-1">
                <span class="inline-block w-3 h-3 bg-green-400 rounded-full"></span>
                <span class="text-green-400 text-sm">Online</span>
            </div>
            <div class="flex flex-col justify-center items-center mb-16">
                <img src="https://picsum.photos/180" class="border rounded-full object-cover mb-4" alt="">
                <h1 class="text-3xl text-gray-900 font-bold">visxcreative</h1>
                <p class="text-sm text-purple-900">we create entrepreneur</p>
                <div class="flex items-center gap-1 mt-2">
                    <svg class="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <span class="text-base font-semibold text-medium opacity-30">4,5 (123)</span>
                </div>
            </div>
            <a href="#" class="inline-block w-full py-3 bg-secondary text-xl text-white text-center font-bold rounded-full hover:text-gray-50 hover:bg-secondary/90 focus:outline-none focus:ring focus:ring-secondary/50 transition-all">Chat</a>
        </div>
        <div class="w-full bg-white rounded-3xl p-6 mt-6">
            <div class="border-b-2 border-primary pb-4 mb-4">
                <h3 class="text-lg font-bold">Deskripsi</h3>
                <p class="text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis facere, quisquam atque consequatur rem sint praesentium eligendi reprehenderit quibusdam excepturi aut voluptas vero, magnam sapiente!</p>
            </div>
            <div class="border-b-2 border-primary pb-4 mb-4">
                <h3 class="text-lg font-bold">Alamat</h3>
                <p class="text-base">Jalan Pulosari 1 No8F Blimbing, Kota Malang, Jawa Timur</p>
            </div>
            <div>
                <h3 class="text-lg font-bold">Skill Saya</h3>
                <div class="flex flex-wrap gap-4 mt-3">
                    <span class="px-4 py-2 bg-primary rounded-full text-base text-white font-medium">Design Logo</span>
                    <span class="px-4 py-2 bg-primary rounded-full text-base text-white font-medium">UI Design</span>
                    <span class="px-4 py-2 bg-primary rounded-full text-base text-white font-medium">Social Media Design</span>
                    <span class="px-4 py-2 bg-primary rounded-full text-base text-white font-medium">Packaging</span>
                </div>
            </div>
        </div>
        <div class="w-full bg-white rounded-3xl p-6 mt-6">
            <div class="flex items-center gap-6 mb-6">
                <img src="img/lainnya/term&service.png" class="w-20 h-auto object-cover" alt="">
                <h3 class="text-xl font-bold">Term & Service</h3>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis recusandae architecto minima facilis delectus dolore non amet eos tempora expedita!
            </p>
        </div>
    </div>
    <div class="col-span-2">
        <h1 class="text-2xl text-gray-900 font-bold m-4 mb-6">Paket</h1>

        <div class="grid grid-cols-3 gap-4">
            <div v-for="i in 4" :key="i" class="bg-white rounded-3xl p-3">
                <img src="https://picsum.photos/150" class="w-full h-44 object-cover rounded-3xl" alt="">
                <h1 class="my-3 text-lg text-gray-900 font-bold leading-tight">Gaperlu lagi post instagram lagi kami siap membantu</h1>
                <hr class="bg-primary h-[2px]">
                <div class="mt-3 flex justify-between items-center">
                    <div class="flex items-center gap-1">
                        <svg class="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <span class="text-sm font-semibold text-medium opacity-30">4,5 (123)</span>
                    </div>
                    <a href="#" class="px-4 py-2 bg-primary rounded-full text-white text-sm font-semibold hover:bg-primary/90 hover:text-gray-100 focus:outline-none focus:ring focus:ring-primary/50">Rp 200.000</a>
                </div>
            </div>
        </div>
    </div>
  </div>
  </BreezeApp2>
</template>

<script>
import BreezeApp2 from '@/Layouts/App2.vue';
export default {
    components: {
        BreezeApp2,
    }
}
</script>

<style>

</style>
