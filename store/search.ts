import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", {
  state: () => ({
    agent: "",
    ability: "",
    map: "",
    side: "",
  }),
  getters: {},
  actions: {
    setAgent(value) {
      this.agent = value;
    },
    setAbility(value) {
      this.ability = value;
    },
    setMap(value) {
      this.map = value;
    },
    setSide(value) {
      this.side = value;
    },
  },
});
