<script setup>
import { Link } from '@inertiajs/inertia-vue3';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
})
</script>

<template>
    <div id="wrapper">
        <nav class="fixed top-0 left-0 w-full py-4 shadow rounded-b-3xl bg-white z-10">
            <div class="px-14 flex justify-between">
                <Link href="/" class="text-xl font-bold leading-5">Lokabis<br/><span class="text-primary">.com</span></Link>
                <div class="w-[65%]">
                    <form class="flex items-center">
                        <label for="voice-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <input type="text" id="voice-search" class="bg-gray-200 border-none text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5 " placeholder="Search..." required="">
                            <button type="submit" class="flex absolute inset-y-0 right-0 justify-center items-center m-1 bg-primary rounded-full w-8 h-8">
                                <svg aria-hidden="true" class="w-5 h-5 text-white text-center" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                    </form>
                    <ul class="flex mt-3 gap-x-12 overflow-x-auto">
                        <li>
                            <a href="#" class="text-base font-semibold text-gray-900 hover:text-blue-700 transition">LokaBusiness</a>
                        </li>
                        <li>
                            <a href="#" class="text-base font-semibold text-gray-900 hover:text-blue-700 transition">Service</a>
                        </li>
                        <li>
                            <Link :href="route('company')" class="text-base font-semibold text-gray-900 hover:text-blue-700 transition">Company</Link>
                        </li>
                        <li>
                            <a href="#" class="text-base font-semibold text-gray-900 hover:text-blue-700 transition">Cara Menggunakan?</a>
                        </li>
                    </ul>
                </div>
                <div v-if="true">
                    <div :class="[myAccount ? 'bg-white rounded-[28px] border' : 'bg-muted rounded-full']" class="relative p-1">
                        <div @click.prevent="myAccount = !myAccount" class="flex items-center gap-2 cursor-pointer transition">
                            <img src="https://picsum.photos/30" alt="" class="w-8 h-8 rounded-full">
                            <span class="pl-2 pr-4 text-base font-medium text-primary">Akun saya</span>
                        </div>

                        <div v-if="myAccount" class="absolute right-0 z-10 mt-4 origin-top-right bg-white rounded-[28px] w-full px-3 py-6 border transition delay-150 duration-300 ease-in-out">
                            <ul>
                                <li class="group mb-3">
                                    <a href="#" class="flex items-center gap-1 group-hover:text-blue-400 transition">
                                        <svg class="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        Profile
                                    </a>
                                </li>
                                <li class="group mb-3">
                                    <a href="#" class="flex items-center gap-1 group-hover:text-blue-400 transition">
                                        <svg class="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                        Projek Saya
                                    </a>
                                </li>
                                <li class="group mb-3">
                                    <a href="#" class="flex items-center gap-1 group-hover:text-blue-400 transition">
                                        <svg class="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                                        Transaksi
                                    </a>
                                </li>
                                <li class="group mb-3">
                                    <a href="#" class="flex items-center gap-1 group-hover:text-blue-400 transition">
                                        <svg class="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
                                        Chatting
                                    </a>
                                </li>
                                <li class="group mb-3">
                                    <a href="#" class="flex items-center gap-1 group-hover:text-blue-400 transition">
                                        <svg class="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                        Paket Favorit
                                    </a>
                                </li>
                                <hr>
                                <li class="group mt-3">
                                    <a href="#" class="flex items-center gap-1 group-hover:text-blue-400 transition">
                                        <svg class="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                        <span class="text-danger-400">Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div v-else class="mt-2">
                    <Link :href="route('register')" class="mr-3 text-base font-semibold text-gray-900 hover:text-blue-700 transition">Sign up</Link>
                    <Link :href="route('login')" class="bg-secondary px-6 py-2 rounded-full text-white text-sm hover:bg-secondary/75 focus:ring-4 focus:outline-none focus:ring-secondary/50 transition">Login</Link>
                </div>
            </div>
        </nav>

        <header>
            <slot name="header" />
        </header>

        <!-- main -->
        <main>
            <slot/>
        </main>
        <!-- // main -->

        <footer class="bg-[#505050] pt-16">
            <div class="container mx-auto flex justify-between gap-8 text-white pb-16">
                <ul>
                    <li class="text-lg font-bold mb-3">Kategori Layanan</li>
                    <li class="group hover:translate-x-2 mb-2 transition ease-in-out delay-150 duration-300">
                        <a href="#" class="group-hover:text-blue-400 transition ease-in-out delay-150 duration-300">Design Logo</a>
                    </li>
                    <li class="group hover:translate-x-2 mb-2 transition ease-in-out delay-150 duration-300">
                        <a href="#" class="group-hover:text-blue-400 transition ease-in-out delay-150 duration-300">Packaging</a>
                    </li>
                    <li class="group hover:translate-x-2 mb-2 transition ease-in-out delay-150 duration-300">
                        <a href="#" class="group-hover:text-blue-400 transition ease-in-out delay-150 duration-300">Mascot</a>
                    </li>
                    <li class="group hover:translate-x-2 mb-2 transition ease-in-out delay-150 duration-300">
                        <a href="#" class="group-hover:text-blue-400 transition ease-in-out delay-150 duration-300">Brosur</a>
                    </li>
                    <li class="group hover:translate-x-2 mb-2 transition ease-in-out delay-150 duration-300">
                        <a href="#" class="group-hover:text-blue-400 transition ease-in-out delay-150 duration-300">Kartu Nama</a>
                    </li>
                    <li class="group hover:translate-x-2 mb-2 transition ease-in-out delay-150 duration-300">
                        <a href="#" class="group-hover:text-blue-400 transition ease-in-out delay-150 duration-300">Sosial Media</a>
                    </li>
                    <li class="group hover:translate-x-2 mb-2 transition ease-in-out delay-150 duration-300">
                        <a href="#" class="group-hover:text-blue-400 transition ease-in-out delay-150 duration-300">Web Design</a>
                    </li>
                    <li class="group hover:translate-x-2 mb-2 transition ease-in-out delay-150 duration-300">
                        <a href="#" class="group-hover:text-blue-400 transition ease-in-out delay-150 duration-300">Landing Page</a>
                    </li>
                </ul>
                <ul>
                    <li class="text-lg font-bold mb-3">Support</li>
                    <li class="group hover:translate-x-2 mb-2 transition ease-in-out delay-150 duration-300">
                        <a href="#" class="group-hover:text-blue-400 transition ease-in-out delay-150 duration-300">Email Kami</a>
                    </li>
                    <li class="group hover:translate-x-2 mb-2 transition ease-in-out delay-150 duration-300">
                        <a href="#" class="group-hover:text-blue-400 transition ease-in-out delay-150 duration-300">No Telp</a>
                    </li>
                    <li class="group hover:translate-x-2 mb-2 transition ease-in-out delay-150 duration-300">
                        <a href="#" class="group-hover:text-blue-400 transition ease-in-out delay-150 duration-300">Instagram</a>
                    </li>
                    <li class="group hover:translate-x-2 mb-2 transition ease-in-out delay-150 duration-300">
                        <a href="#" class="group-hover:text-blue-400 transition ease-in-out delay-150 duration-300">Facebook</a>
                    </li>
                </ul>
                <ul>
                    <li class="text-lg font-bold mb-3">Company</li>
                    <li class="group hover:translate-x-2 mb-2 transition ease-in-out delay-150 duration-300">
                        <a href="#" class="group-hover:text-blue-400 transition ease-in-out delay-150 duration-300">About</a>
                    </li>
                    <li class="group hover:translate-x-2 mb-2 transition ease-in-out delay-150 duration-300">
                        <a href="#" class="group-hover:text-blue-400 transition ease-in-out delay-150 duration-300">Team</a>
                    </li>
                    <li class="group hover:translate-x-2 mb-2 transition ease-in-out delay-150 duration-300">
                        <a href="#" class="group-hover:text-blue-400 transition ease-in-out delay-150 duration-300">Karir</a>
                    </li>
                </ul>
                <ul>
                    <li class="text-lg font-bold mb-3">From Lokabis.com</li>
                    <li class="group hover:translate-x-2 mb-2 transition ease-in-out delay-150 duration-300">
                        <a href="#" class="group-hover:text-blue-400 transition ease-in-out delay-150 duration-300">visxcreative.com</a>
                    </li>
                    <li class="group hover:translate-x-2 mb-2 transition ease-in-out delay-150 duration-300">
                        <a href="#" class="group-hover:text-blue-400 transition ease-in-out delay-150 duration-300">Podcast Produktif Banget</a>
                    </li>
                </ul>
            </div>
            <div class="bg-[#313131] py-6">
                <div class="container mx-auto">
                    <h4 class="text-base text-white font-semibold">Copyright 2022 | visxcreative</h4>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            myAccount: false,
        }
    }
}
</script>
<!-- <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
    <div v-if="canLogin" class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
        <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="text-sm text-gray-700 underline">
            Dashboard
        </Link>

        <template v-else>
            <Link :href="route('login')" class="text-sm text-gray-700 underline">
                Log in
            </Link>

            <Link v-if="canRegister" :href="route('register')" class="ml-4 text-sm text-gray-700 underline">
                Register
            </Link>
        </template>
    </div>
</div> -->
