<template>
  <div>
    <PostSearch />
    <main>
      <section class="mx-auto py-3 sm:px-6 lg:px-8">
        <div class="grid grid-cols-3 gap-4 px-4 py-2 sm:px-0">
          <div class="col-span-1 overflow-y-auto h-[37rem]">
            <PostList
              :posts="data"
              :onClickPost="onClickPost"
              :selectedPost="selectedPost"
            />
          </div>
          <div class="col-span-2 rounded-lg bg-white">
            <div v-if="selectedPost">
              <PostViewer :post="selectedPost" />
            </div>
            <div v-else></div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useSearchStore } from "@/store/search";

const { data } = await useAsyncData("posts", () =>
  queryContent("/posts").find()
);
const selectedPost = ref<any>(null);

function onClickPost(post: any) {
  selectedPost.value = post;
}

const searchStore = useSearchStore();
searchStore.$subscribe(async (mutation, state) => {
  data.value = await queryContent("/posts")
    .where({
      agent: state.agent || null,
      ability: state.ability || null,
      map: state.map || null,
      side: state.side || null,
    })
    .find();
});
</script>
