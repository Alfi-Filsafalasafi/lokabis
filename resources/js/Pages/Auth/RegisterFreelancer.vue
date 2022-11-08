<script setup>
import BreezeButton from '@/Components/Button.vue';
import BreezeGuestLayout from '@/Layouts/Guest.vue';
import BreezeInput from '@/Components/Input.vue';
import BreezeLabel from '@/Components/Label.vue';
import BreezeValidationErrors from '@/Components/ValidationErrors.vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
    file: null
});

const submit = () => {
    form.post(route('register.freelancer'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};

const log = (e) => {
    console.log(e.target.value)
}
</script>

<template>
    <BreezeGuestLayout>
        <Head title="Register Freelancer" />

        <div>
            <h1 class="font-extrabold text-2xl text-center leading-6">Lokabis<br/><span class="text-primary">.com</span></h1>
        </div>

        <BreezeValidationErrors class="mb-4" />

        <form @submit.prevent="submit">
            <!-- daftar -->
            <h1 class="font-bold text-lg">Daftar</h1>
            <div class="mt-3">
                <input type="text" placeholder="Nama" class="bg-gray-200 border-none text-gray-900 text-xs font-medium rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required autofocus autocomplete="name">
            </div>
            <div class="mt-4">
                <input type="email" v-model="form.email" placeholder="Email" class="bg-gray-200 border-none text-gray-900 text-xs font-medium rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required autofocus autocomplete="username">
            </div>
            <div class="mt-4">
                <input type="password" v-model="form.password" placeholder="Password" class="bg-gray-200 border-none text-gray-900 text-xs font-medium rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required autofocus autocomplete="new-password">
            </div>
            <div class="mt-4">
                <input type="password" v-model="form.password_confirmation" placeholder="Konfirmasi Password" class="bg-gray-200 border-none text-gray-900 text-xs font-medium rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required autofocus autocomplete="new-password">
            </div>
            <div class="mt-4">
                <input type="tel" placeholder="No Telepon" class="bg-gray-200 border-none text-gray-900 text-xs font-medium rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required autofocus autocomplete="off">
            </div>
            <div class="mt-4">
                <textarea placeholder="Alamat" class="bg-gray-200 border-none text-gray-900 text-xs font-medium rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required autocomplete="off" cols="30" rows="10"></textarea>
            </div>
            <div class="mt-4">
                <input type="text" placeholder="Kota" class="bg-gray-200 border-none text-gray-900 text-xs font-medium rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required autocomplete="off">
            </div>
            <!-- //daftar -->

            <!-- info dokumen -->
            <h1 class="font-bold text-lg mt-8">Info Dokumen</h1>
            <div class="mt-4">
                <input type="text" placeholder="No KTP" class="bg-gray-200 border-none text-gray-900 text-xs font-medium rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required autocomplete="off">
            </div>
            <div class="flex justify-center items-center w-full mt-4">
                <label for="dropzone-file-1" class="flex flex-col justify-center items-center w-full h-40 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100">
                    <div class="flex flex-col justify-center items-center pt-5 pb-6">
                        <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                        <!-- <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p> -->
                    </div>
                    <input id="dropzone-file-1" type="file" class="hidden">
                </label>
            </div>
            <div class="flex justify-center items-center w-full mt-4">
                <label for="dropzone-file-2" class="flex flex-col justify-center items-center w-full h-40 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100">
                    <div class="flex flex-col justify-center items-center pt-5 pb-6">
                        <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                        <!-- <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p> -->
                    </div>
                    <input id="dropzone-file-2" @change="log" type="file" class="hidden">
                </label>
            </div>
            <div class="mt-4">
                <input type="text" placeholder="No Rekening" class="bg-gray-200 border-none text-gray-900 text-xs font-medium rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required autocomplete="off">
            </div>
            <div class="mt-4">
                <select id="bank" class="bg-gray-200 border-none text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected="">BANK</option>
                    <option value="BRI">BRI</option>
                    <option value="BNI">BNI</option>
                    <option value="MANDIRI">MANDIRI</option>
                </select>
            </div>
            <!-- //info dokumen -->

            <!-- bidang jasa -->
            <h1 class="font-bold text-lg mt-8">Bidang Jasa</h1>
            <div class="mt-4">
                <select id="bidang_jasa" class="bg-gray-200 border-none text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected="">Bidang Jasa</option>
                    <option value="Design">Design</option>
                    <option value="Pembuatan Website">Pembuatan Website</option>
                    <option value="Content Writer">Content Writer</option>
                </select>
            </div>
            <div class="mt-4">
                <select id="kategori_jasa" class="bg-gray-200 border-none text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected="">Kategori Jasa</option>
                    <option value="Design">Design</option>
                    <option value="Pembuatan Website">Pembuatan Website</option>
                    <option value="Content Writer">Content Writer</option>
                </select>
            </div>
            <div class="mt-4">
                <input type="url" placeholder="Link Portofolio" class="bg-gray-200 border-none text-gray-900 text-xs font-medium rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required autocomplete="off">
            </div>
            <!-- //info dokumen -->

            <div class="flex mt-10">
                <input id="checkbox1" type="checkbox" v-model="checkbox1" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Saya menerima kebijakan privasi</label>
            </div>
            <div class="flex mt-4">
                <input id="checkbox2" type="checkbox" v-model="checkbox2" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Saya tertarik untuk menerima kabar, diskon dan promosi dari lokabis</label>
            </div>
            <button type="submit" :disabled="!disableSubmit" class="w-full text-white bg-[#F99D1C] disabled:bg-[#F99D1C]/75 enabled:hover:bg-[#F99D1C]/90 focus:ring-4 focus:outline-none focus:ring-[#F99D1C]/50 font-medium rounded-md text-sm px-5 py-3 text-center mt-4">
                Continue
            </button>
            <p class="text-center font-medium text-sm mt-2.5">Sudah Punya Akun? <Link :href="route('login')" class="text-blue-500 hover:text-blue-500/75">Masuk</Link></p>
        </form>
    </BreezeGuestLayout>
</template>

<script>
export default {
    data() {
        return {
            checkbox1: null,
            checkbox2: null,
        }
    },
    computed: {
        disableSubmit() {
            return (this.checkbox1 && this.checkbox2)
        }
    }
}
</script>
