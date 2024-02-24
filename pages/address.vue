<template>
    <NuxtLayout>
        <div id="AddressPage" class="mt-4 max-w-[500px] mx-auto px-2">
            <div class="mx-auto bg-white rounded-lg p-3">
                <div class="text-xl text-bold mb-2">Address Details</div>

                <form @submit.prevent="submit()">
                   <TextInput class="w-full" placeholder="Contact Name" v-model:input="contactName" inputType="text" :error="error  &&  error.type === 'contactName' ? error.message : ''" />
                    <TextInput class="w-full mt-2" placeholder="Address" v-madel:input="addrress" inputType="text" :error="error && error.type  === 'address' ? error.message : ''"  /> 
                </form>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup >

</script>

