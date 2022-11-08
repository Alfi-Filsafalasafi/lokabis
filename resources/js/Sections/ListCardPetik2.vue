<template>
    <div class="container mx-auto">
        <div v-if="ontitle">
            <h2 class="text-2xl font-bold text-gray-900 ">{{ datas.title }}</h2>
            <p class="text-base font-medium">{{ datas.subtitle }}</p>
        </div>
        <div class="flex justify-between gap-6 mt-5">
            <div v-for="(item, index) in datas.items" :key="index" class="p-6 bg-muted rounded-[46px]">
                <p class="text-9xl font-poppins text-primary font-extrabold italic">''</p>
                <p class="text-base text-gray-800 -tracking-tight">{{ item.text }}</p>
                <div class="flex items-center gap-3 mt-20">
                    <img src="https://xsgames.co/randomusers/avatar.php?g=male" class="w-14 h-14 rounded-full" alt="">
                    <div>
                        <h4 class="text-base font-bold text-gray-900">{{ item.name }}</h4>
                        <p class="text-xs font-normal text-gray-900">{{ item.position }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['datas', 'ontitle']
}
</script>
