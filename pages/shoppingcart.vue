<template>
    <NuxtLayout>

            <div id="ShoppingCartPage" class="mt-4 max-w-[1200px] mx-auto px-2">
                <div v-if="false" class="h-[500px] flex items-center justify-center">
                    <div>
                        <img src="/cart-empty.png" width="300" class="mx-auto">
                        <div class="text-xl text-center mt-4">No items yet?</div>

                        <div v-if="true" class="flex text-center">
                            <NuxtLink to="/auth" class="bg-gradient-to-b from-blue-500 to-sky-500 w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4">
                                Sign In
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div v-else class="md:flex gap-4 justify-between mx-auto w-full">
                    <div class="md:w-[65%]">
                        <div class="bg-white rounded-lg p-4">
                            <div class="text-2xl font-bold mb-2">
                                Shopping Cart (0)
                            </div>
                        </div>

                        <div class="bg-[#FEEEEEF] rounded-lg p-4 mt-4">
                            <div class="text-red-500 font-bold">Welcome Deal applicable on 1 item only</div>
                        </div>

                        <div id="Items" class="bg-white rounded-lg p-4 mt-4">
                            <div v-for="product in products">
                                <CartItem :product="product" :selectedArray="selectedArray"  @selectedRadio="selectedRadioFunc" />
                            </div>
                        </div>
                    </div>
                    
                    <div class="md:hidden block my-4"></div>

                    <div class="md:w-[35%]">
                        <div id="Summay" class="bg-white rounded-lg p-4">
                            <div class="text-2xl font-bold mb-2">Summary</div>
                            <div class="flex items-center justify-between my-4">
                                <div class="font-semibold">Total</div>
                                <div class="text-2xl font-semibold">
                                    $ <span class="font-bold">{{ totalPriceComputed }}</span>
                                </div>
                            </div>

                            <button @click="goToCheckout" class="flex items-center justify-center bg-blue-600 w-full text-white text-21px font-semibold p-2 rounded-full mt-4">
                                Checkout
                            </button>
                        </div>

                        <div id="PaymentProtection" class="bg-white round-lg p-4 mt-4">
                            <div class="text-lg font-semibold mb-2">Payment methods</div>
                            <div class="flex items-center justify-start gap-8 my-4">
                                <div v-for="card in cards">
                                    <img :src="card"  class="h-6">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </NuxtLayout>
</template>

<script setup>
    const userStore =  useUserStore();
    const selectedArray = ref([]);



    const products = [
        {id: 1, title: "Title1", description: "This is a description ", url:" https://picsum.photos/id/7/800/800", price: 9999},
        {id: 2, title: "Title2", description: "This is a description ", url:" https://picsum.photos/id/71/800/800", price: 9999},
        {id: 3, title: "Title3", description: "This is a description ", url:" https://picsum.photos/id/77/800/800", price: 9999},
    ];

    const cards = [
        "visa-card.png",
        "mastercard.png",
        "paypal.png",
        "applepay.png",
    ];

    onMounted(() => {
        setTimeout(() => userStore.update.isLoading = false, 200);
    });

    const totalPriceComputed = computed(() => {
        let price = 0

        userStore.cart.forEach(prod => {
            price += prod.price;
        });

        return price / 100
    });


    const selectedRadioFunc = (e) => {
        if (!selectedArray.value.length) {
            selectedArray.value.push(e);
            return
        }

        selectedArray.value.forEach((item, index) => {
            if (e.id !== item.id){ 
                selectedArray.value.push(e);
            } else {
                selectedArray.value.splice(index, 1);
            }
        });
    };


    const goToCheckout = () => {
        let ids = [];
        userStore.checkout  =  [];

        selectedArray.value.forEach(item => ids.push(item.id));

        let res = userStore.cart.filter((item) => {
            return ids.indexOf(item.id) !== -1;
        });


        res.forEach(item => userStore.checkout.push(toRaw(item)));

        return navigateTo("/checkout");

    }


</script>




