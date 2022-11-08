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
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <BreezeGuestLayout>
        <Head title="Register" />

        <div>
            <h1 class="font-extrabold text-2xl text-center leading-6">Lokabis<br/><span class="text-primary">.com</span></h1>
        </div>

        <BreezeValidationErrors class="mb-4" />

        <h1 class="font-bold text-lg">Daftar</h1>
        <form @submit.prevent="submit">
            <div class="mt-3">
                <input type="text" placeholder="Nama" class="bg-gray-200 border-none text-gray-900 text-xs font-medium rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required autofocus autocomplete="name">
            </div>
            <div class="mt-4">
                <input type="email" v-model="form.email" placeholder="Email" class="bg-gray-200 border-none text-gray-900 text-xs font-medium rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required autofocus autocomplete="username">
            </div>
            <div class="my-4">
                <input type="password" v-model="form.password" placeholder="Password" class="bg-gray-200 border-none text-gray-900 text-xs font-medium rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required autofocus autocomplete="new-password">
            </div>
            <div class="my-4">
                <input type="password" v-model="form.password_confirmation" placeholder="Konfirmasi Password" class="bg-gray-200 border-none text-gray-900 text-xs font-medium rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required autofocus autocomplete="new-password">
            </div>
            <div class="my-4">
                <input type="tel" placeholder="No Telepon" class="bg-gray-200 border-none text-gray-900 text-xs font-medium rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required autofocus autocomplete="off">
            </div>

            <div class="flex mt-6">
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
