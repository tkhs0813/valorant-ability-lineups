<template>
  <header class="bg-white shadow">
    <div class="flex gap-1 p-4">
      <CommonSelectBox
        label="Agents"
        :data="agents"
        :value="searchStore.agent"
        @update:modelValue="updateAgent"
      />
      <CommonSelectBox
        label="Abilities"
        :data="abilities"
        :value="searchStore.ability"
        @update:modelValue="updateAbility"
      />
      <CommonSelectBox
        label="Maps"
        :data="maps"
        :value="searchStore.map"
        @update:modelValue="updateMap"
      />
      <CommonSelectBox
        label="Site"
        :data="sides"
        :value="searchStore.side"
        @update:modelValue="updateSide"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useSearchStore } from "@/store/search";
import agentsData from "@/data/agents.json";
import mapsData from "@/data/maps.json";

const searchStore = useSearchStore();

const agents = ref<string[]>(agentsData.map((item) => item.name));
const abilities = ref<string[]>([]);
const maps = ref<string[]>(mapsData.map((item) => item.name));
const sides = ref<string[]>(["Attackers", "Deffenders"]);

const updateAgent = (agent) => {
  searchStore.setAgent(agent);
};
const updateAbility = (agent) => {
  searchStore.setAbility(agent);
};
const updateMap = (agent) => {
  searchStore.setMap(agent);
};
const updateSide = (agent) => {
  searchStore.setSide(agent);
};

searchStore.$subscribe((mutation, state) => {
  // @ts-ignore
  if (mutation.events.key !== "agent") return;

  // abilities.value = agentsData[mutation.events.newValue];
  abilities.value = agentsData.find(
    // @ts-ignore
    (agent) => agent.name === mutation.events.newValue
  ).abilities;
});
</script>
