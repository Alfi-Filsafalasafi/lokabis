<template>
    <div class="container mx-auto mt-20">
            <div v-if="ontitle" class="text-left">
                <h2 class="text-2xl font-bold">Kenapa Harus Lokabis ?</h2>
                <p class="text-base font-medium">banyak sekali keuntungan yang di dapatkan untuk bisnis anda</p>
            </div>
            <div class="mt-5 grid grid-cols-3 gap-4">
                <div v-for="(busines, index) in business" :key="index">
                    <div class="p-4 h-full">
                        <img :src="'/img/why_lokabis/' + busines.img" :alt="busines.img" class="block mx-auto w-3/4 h-3/4">
                        <h3 class="text-2xl text-[#404145] font-bold text-center mt-5 leading-tight">{{ busines.text }}</h3>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    props: ['business', 'ontitle']
}
</script>
