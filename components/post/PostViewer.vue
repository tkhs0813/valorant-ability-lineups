<template>
  <section class="px-16 py-8">
    <h1 class="mb-2 font-bold text-gray-900 text-2xl">
      {{ post.title }}
    </h1>
    <div class="mt-5">
      <video :key="post.video" controls class="w-full" preload="metadata">
        <source :src="post.video" type="video/mp4" />
        <p>Your browser doesn't support HTML5 video.</p>
      </video>
    </div>
    <!-- TODO: いったんいらない。あとで必要だったら作る -->
    <!-- <div v-for="(screenshot, index) in post.screenshots" :key="index">
      <img
        :src="screenshot"
        alt="blogpost preview"
        class="object-cover w-full h-full"
      />
    </div>
    <ContentRenderer :value="post" /> -->
  </section>
</template>

<script setup lang="ts">
defineProps<{
  post?: any;
}>();
</script>
