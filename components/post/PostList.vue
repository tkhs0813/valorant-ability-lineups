<template>
  <div v-for="(post, index) in posts" :key="index" class="mb-3">
    <PostCard
      :post="post"
      :onClickPost="onClickPost"
      :selectedPost="selectedPost"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  posts?: any[];
  onClickPost?: (post: any) => void;
  selectedPost?: any;
}>();
</script>
