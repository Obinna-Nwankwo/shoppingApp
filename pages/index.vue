<template>
    <NuxtLayout>
 
            <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
                <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
                    <div v-if="!product" v-for="product in products" :key="product" >
                        <ProductComponent :product="product" />
                    </div>
                </div>
            </div>

    </NuxtLayout>
</template>

<script setup>

   const products = [
    {id: 1, title: "Title1", description: "This is a description ", url:" https://picsum.photos/id/7/800/800", price: 9999},
    {id: 2, title: "Title2", description: "This is a description ", url:" https://picsum.photos/id/71/800/800", price: 9999},
    {id: 3, title: "Title3", description: "This is a description ", url:" https://picsum.photos/id/77/800/800", price: 9999},
    {id: 4, title: "Title4", description: "This is a description ", url:" https://picsum.photos/id/78/800/800", price: 9999},
    {id: 5, title: "Title5", description: "This is a description ", url:" https://picsum.photos/id/72/800/800", price: 9999},
    {id: 6, title: "Title6", description: "This is a description ", url:" https://picsum.photos/id/60/800/800", price: 9999},
    {id: 7, title: "Title7", description: "This is a description ", url:" https://picsum.photos/id/61/800/800", price: 9999},
    {id: 8, title: "Title8", description: "This is a description ", url:" https://picsum.photos/id/67/800/800", price: 9999},
    {id: 9, title: "Title9", description: "This is a description ", url:" https://picsum.photos/id/68/800/800", price: 9999},
    {id: 10, title: "Title10", description: "This is a description ", url:" https://picsum.photos/id/62/800/800", price: 9999},
   ]

</script>
