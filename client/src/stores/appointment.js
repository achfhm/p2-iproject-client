import { defineStore } from "pinia";

export const useAppointmentStore = defineStore("appointment", {
  state: () => ({
    baseUrl: "",
    isLogin: false,
  }),
  getters: {},
  actions: {},
});
