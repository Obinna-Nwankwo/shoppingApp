<template>
    <div>
        <client-only>
            <input :placeholder="placeholder" :maxlength="max"
            class="w-full bg-white text-gray-400 border text-sm border-[#FEFEFE] 
            rounded-lg p-3 placeholder-gray-500 focus:outline-none"
            @focus="isFocused = true" @blur="isFocused = false" 
            :class="{ 'border-blue-500' : isFocused }, { 'border-red-600' : error }
            
            :type="inputType" v-model="inputComputed" autocomplete='off' />
        </client-only>
    </div>
</template>

<script setup >
    const emit = defineEmits(["update:input"]);
    const props = defineProps(["input", "placeholder", "max", "inputType", "error"]);
    const { input, placeholder, max, inputType, error }  =  toRefs(props);



    const isFocused = ref(false);
    const inputComputed = computed({
        get: () => input.value
        set: (val) => emit("update:input", val)
    });

</script>