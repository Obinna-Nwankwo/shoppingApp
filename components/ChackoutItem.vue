<template>
    <div class="flex justify-start my-2" >  
        <img :src="product.url" alt="" class="rounded-md md:w-[150px] w-[90px]">

        <div class="overflow-hidden pl-2">
            <div class="flex items-center ">
                <span class="bg-sky-600 text-white text-[9px] font-semibold px-2 rounded-sm min-w-[80px]">Welcome Deal</span>
                <div class="truncate pl-2">{{  product.title  }}</div>
            </div>

            <div class="text-lg mt-2 font-semibold">
                $ <span class="font-bold">{{  product.price  }}</span>
            </div>
        </div>
    </div>
</template>

<script setup >
const props = defineProps(["product"]);
const { product } = toRefs(props);



</script>

