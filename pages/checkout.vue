<template>
    <NuxtLayout>
        <div id="CheckoutPage" class="mt-4 max-w-[1200px] mx-auto px-2 ">
            <div class="md:flex gap-4 justify-between mx-auto w-full">
                <div class="md:w-[65%]">
                    <div class="bg-white rounded-lg p-4">

                        <div class="text-xl font-semibold mb-2">Shipping Address</div>

                        <div v-if="false">
                            <NuxtLink to="/address" class="flex items-center text-blue-400 pb-2 hover:text-orange-400">
                                <Icon name="ei:plus" size="20" class="mr-2" />
                                Update Address
                            </NuxtLink>

                            <div class="pt-2 border-t">
                                <div class="underline pb-1">Delivery Address</div>

                                <ul class="text-xs">
                                    <li class="flex items-center gap-2">
                                        <div>Contact name</div>
                                        <div class="font-bold"> Name </div>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <div>Address:</div>
                                        <div class="font-bold"> Address </div>
                                    </li>
                                    
                                    <li class="flex items-center gap-2">
                                        <div>Zip Code:</div>
                                        <div class="font-bold">Zip Code </div>
                                    </li>
                                    
                                    <li class="flex items-center gap-2">
                                        <div>Country:</div>
                                        <div class="font-bold">Country </div>
                                    </li>
                                    
                                    <li class="flex items-center gap-2">
                                        <div>City:</div>
                                        <div class="font-bold">City </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <NuxtLink v-else to="/address" class="flex items-center text-blue-400 hover:text-orange-400">
                            <Icon name="ei: plus" size="20" class="mr-2"  />
                            Add New Address
                        </NuxtLink>
                    </div>

                    <div id="Items" class="bg-white rounded-lg p-4 mt-4">
                        <div v-for="product in products "> 
                            <ChackoutItem :product="product" />
                        </div>
                    </div>
                </div>

                <div class="md:hidden block my-4"></div>
                
                <div class="md:w-[35%]">
                    <div id="PlaceOrder" class="bg-white rounded-lg p-4">
                        <div class="text-2xl font-bold mb-2">Summary</div>

                        <div class="flex items-center justify-between my-4">
                            <div>Total Shipping</div>
                            <div>Free</div>
                        </div>

                        <div class="border-t"></div>

                        <div class="flex items-center justify-between my-4">
                            <div class="font-semibold">Total</div>
                            <div class="text-2xl font-semibold">
                                $ <span class="font-extrabold">{{  total / 100  }}</span>
                            </div>
                        </div>

                        <form  @submit.prevent="pay()">
                            <div id="card-element" class="border border-gray-500 p-2 rounded-sm"></div>

                            <p id="card-error" role="alert" class="text-red-600 text-center font-semibold"></p>

                            <button type="submit" :disabled="isProcessing" :class="isProcessing ? 'opacity-70 text-[Processing]' : 'opacity-100' "  class="mt-4 bg-blue-500 w-full text-white text-[18px] font-semebold px-2 py-1.5 rounded-lg">
                                <div v-if="isProcessing"><Icon name="eos-icons:loading"  class="mr-2"/>Processing.....</div>
                             
                                
                                <div v-else >Place order</div>
                            </button>
                        </form>
                    </div>

                    <div class="bg-white rounded-lg p-4 mt-4">
                        <div class="text-lg font-semibold mb-2 mt-2">ShoppingApp</div>
                        <p class="my-2 text-sm">ShoppingApp keeps your information and payment safe</p>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
    const userStore =  useUserStore();
    const route  =  useRoute();

    let stripe = null;
    let elements = null;
    let card = null;
    let form = null;
    let total = ref(0);
    let clientSecret = null;
    let currentAddress = ref(null);
    let isProcessing  = ref(false);

    onMounted(() => {
        isProcessing.value = true;

        userStore.checkout.forEach(user => {
            total.value += item.price;
        });
    });

    watch(() => total.value, () => {
        if (total.value > 0) {
            stripeInt();
        }
    });

    const stripeInt = () => async () => {

    };

    const pay = async () => {

    };

    const createOrder = async () => {

    };

    const showError = async () => {

    };


    const products = [
        {id: 1, title: "Title1", description: "This is a description ", url:" https://picsum.photos/id/7/800/800", price: 9999},
        {id: 2, title: "Title2", description: "This is a description ", url:" https://picsum.photos/id/71/800/800", price: 9999},
        {id: 3, title: "Title3", description: "This is a description ", url:" https://picsum.photos/id/77/800/800", price: 9999},
    ];

</script>

