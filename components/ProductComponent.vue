<template>
    <div id="`ProductComponent${product.id}`" class="bg-white inline-block rounded hover:shadow-[0 0 10px 3px rgba(0,0,0, 0.15)] cursor-pointer">
        <NuxtLink :to="`/item/${product.id }`">
            <img :src="product.url" class="rounded-t">
        <div id="ProductDetails">
            <span class="flex items-center justify-start gap-3 px-1 pt-1">
                <span class="text-blue-800 font-semibold">$ {{ priceComputed }}</span>
                <span class="text-gray-500 text-sm text-light line-through">$ {{ oldPriceComputed }}</span>
            </span>

            <span class="px-1 relative -top-2 text-red-700 text-xs font-semibold">Extra 5% off</span>
            <div class="flex items-center gap-1 px-1 relative -top-1">
                <span class="bg-sky-700 text-white text-[9px] font-semibold px-2 rounded-sm">Welcome Deal</span>
                <span class="bg-[#F5F5F5] border text-red-800 text-[9px] font-semibold px-2 rounded-sm">To Selling</span>
            </div>

            <p class="flex items-center px-1 pt-0.5 text-xs text-[#252525]">
                5,000+ sold <Icon name="material-symbols:star" class="text-yellow-400 ml-1.5" />4.8
            </p>

            <p class="px-1 pt-0.5 text-xs text-[#252525]">
                {{ product.title.substring(0,60) }}
            </p>

            <p class="px-1 pb-1">
                <sapan class="text-green-700 text-xs font-semibold">Free Shipping</sapan>
            </p>
        </div>
        </NuxtLink>
    </div>
</template>

<script setup>
    const props = defineProps(["product"]);
    const { product } = toRefs(props);

    const priceComputed = computed(() => {
        return product.value.price / 100
    });

    const oldPriceComputed = computed(() => {
        let res = (product.value.price + (product.value.price / 20)) / 100
        return res.toFixed(2)
    });

</script>

