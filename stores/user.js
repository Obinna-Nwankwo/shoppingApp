

export  const  useUserStore = defineStore("user", {
    state: ()  => ({
        isMenuOverlay: false,
        isLoading: false,
        cart: [],
        checkout: []
    }),
    persist: true,
});