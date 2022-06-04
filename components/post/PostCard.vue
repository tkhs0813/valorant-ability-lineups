<template>
  <section
    @click="onClickPost(post)"
    class="bg-white rounded-md p-4 cursor-pointer"
    :class="{ 'border-l-4 border-blue-800': selected }"
  >
    <a class="text-base text-blue-900 font-bold underline decoration-1">{{
      post.title
    }}</a>
    <div class="mt-2 text-sm">
      <div class="grid grid-cols-4 mb-1">
        <div class="flex items-center">
          <LocationMarkerIcon class="h-4 mr-1" />
          <p>{{ post.map }}</p>
        </div>
        <div class="flex items-center">
          <CubeIcon class="h-4 mr-1" />
          <p>{{ post.side }}</p>
        </div>
      </div>
      <div class="grid grid-cols-4">
        <div class="flex items-center">
          <UserIcon class="h-4 mr-1" />
          <p>{{ post.agent }}</p>
        </div>
        <div class="flex items-center">
          <LightningBoltIcon class="h-4 mr-1" />
          <p>{{ post.ability }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  LocationMarkerIcon,
  UserIcon,
  LightningBoltIcon,
  CubeIcon,
} from "@heroicons/vue/outline";

const props = defineProps<{
  post?: any;
  onClickPost?: (post: any) => void;
  selectedPost?: any;
}>();

const selected = computed(() => {
  if (!props.post || !props.selectedPost) return false;
  return props.post._path === props.selectedPost._path;
});
</script>
