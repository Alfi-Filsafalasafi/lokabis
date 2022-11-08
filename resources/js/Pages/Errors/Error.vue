<template>
  <BreezeApp>
    <template #header>
      <div class="w-full h-[90vh] flex justify-center items-center">
        <div class="text-center mt-28">
          <h1 class="text-6xl font-bold text-gray-900 opacity-70">{{ title }}</h1>
          <p class="text-base font-medium text-gray-600 mt-4">{{ description }}</p>
        </div>
      </div>
    </template>
  </BreezeApp>
</template>

<script>
import BreezeApp from "@/Layouts/App.vue";
export default {
  components: {
    BreezeApp,
  },
  props: {
    status: Number,
  },
  computed: {
    title() {
      return {
        503: "503: Service Unavailable",
        500: "500: Server Error",
        404: "404: Page Not Found",
        403: "403: Forbidden",
      }[this.status];
    },
    description() {
      return {
        503: "Sorry, we are doing some maintenance. Please check back soon.",
        500: "Whoops, something went wrong on our servers.",
        404: "Sorry, the page you are looking for could not be found.",
        403: "Sorry, you are forbidden from accessing this page.",
      }[this.status];
    },
  },
};
</script>
