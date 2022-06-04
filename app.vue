<!-- <template>
  <div>
  </div>
</template> -->
<template>
  <div class="min-h-full">
    <CommonHeader />
    <div>
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "⚡Valorant Ability⚡",
  htmlAttrs: {
    class: "h-full bg-blue-400 bg-opacity-30",
  },
  bodyAttrs: { class: "h-full" },
});
</script>
