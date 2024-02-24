<template>
    <NuxtLayout>

            <div id="ItemPage" class="mt-4 max-w-[1200px] mx-auto px-2">
                <div class="md:flex gap-4 justify-between mx-auto w-full">
                    <div class="md:w-[40%]">
                        <img v-if="currentImage" :src="currentImage" class="rounded-lg object-fit">

                        <div v-if="images[0]  !== ''" class="flex items-center justify-center mt-2">
                            <div v-for="image in images">
                                <img :class="currentImage  === image ? 'border-sky-400' : ''" :src="image" width="70" @click="currentImage = image" @mouseover="currentImage = image" class="rounded-md object-fit border-2 cursor-pointer">
                            </div>
                        </div>
                    </div>

                    <div class="md:w-[60%] bg-white p-3 rounded-lg">
                        <div v-if="true">
                            <p class="mb-2">Title</p>
                            <p class="font-normal text-[12px] mb-2">Description Section</p>
                        </div>

                        <div class="flex items-center pt-1.5">
                            <span class="h-4 min-w-4 rounded-full p-0.5 bg-yellow-500 mr-2">
                                <Icon name="material-symbols:star" class="-mt-[17.5px]" size="12" />
                            </span>
                            <p class="text-red-700">Extra 5% off</p>
                        </div>

                        <div class="flex items-center justify-start my-2">
                            <Icon name="material-symbols:star" class="text-yellow-400" />
                            <Icon name="material-symbols:star" class="text-yellow-400" />
                            <Icon name="material-symbols:star" class="text-yellow-400" />
                            <Icon name="material-symbols:star" class="text-yellow-400" />
                            <Icon name="material-symbols:star" class="text-yellow-400" />
                            <span class="text-[13px] font-light ml-2">5 321 Reviews 1,000+ or orders</span>
                        </div>

                        <div class="border-b"></div>
                        <div class="flex items-center-justify-start gap-2 my-2">
                            <div class="text-xl font-bold">$ {{ priceComputed }}</div>
                            <span class="bg-[#F5F5F5] border text-red-800 text-[9px] font-semibold px-2 rounded-sm">70% off</span>
                        </div>

                        <p class="text-green-900 text-xs font-semibold pt-1">
                            Free 11-day delivery over $8.28
                        </p>
                        
                        <p class="text-green-900 text-xs font-semibold pt-1">
                            Free Shipping
                        </p>

                        <div class="py-2"></div>
                        <button @click="addToCart()"  :disabled="isInCart" class="px-6 py-2 rounded-lg text-white text-lg font-semibold bg-gradient-to-r from-yellow-500 to-orange-500">
                            <div v-if="isInCart">Is Added</div>
                            <div v-else>Add to Cart</div>
                        </button>
                    </div>
                </div>
            </div>
     
    </NuxtLayout>
</template>

<script setup>


   const userStore = useUserStore();
   const currentImage  = ref(null);
   const route = useRoute();
   

   onMounted(() => {
        watchEffect(() => {
        currentImage.value = "https://picsum.photos/id/123/800/800";
        images.value[0] = "https://picsum.photos/id/123/800/800";
    });
   })

   const images = ref([
    "",
    "https://picsum.photos/id/212/800/800",
    "https://picsum.photos/id/222/800/800",
    "https://picsum.photos/id/233/800/800",
    "https://picsum.photos/id/213/800/800",
    "https://picsum.photos/id/244/800/800",
   ]);

   const priceComputed = computed(() => {
        return '1000.99';
    });

    const addToCart = () => {
        // userStore.addToCart(currentImage.value);
        alert("Added to cart")
    };

    const isInCart = computed(() => {
        let res = false;

        userStore.cart.forEach(prod => {
            if (route.params.id === prod.id) {
                res = true
            }
        });
        return res;
    });

</script>

