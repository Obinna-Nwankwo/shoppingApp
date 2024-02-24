<template>
    <div>
    <div id="MainLayout"  class="w-full fixed z-50">
        <div id="TopMenu" class="w-full bg-[#FAFAFA] border-b md:block hidden">
            <ul class="flex items-center justify-end text-sm text-[#3333333] font-light px-2 h-10 bg-[#FAFAFA] max-w-[1200px]">
                <li class="border-r border-r-gray-400 px-3 hover:text-blue-700  hover:font-medium cursor-pointer">
                    Sell on ShoingApp
                </li>
                <li class="border-r border-r-gray-400 px-3 hover:text-blue-700 hover:font-medium cursor-pointer">
                    Cookie Preferences
                </li>
                <li class="border-r border-r-gray-400 px-3 hover:text-blue-700 hover:font-medium cursor-pointer">
                    Help
                </li>
                <li class="border-r border-r-gray-400 px-3 hover:text-blue-700 hover:font-medium cursor-pointer">
                    Buy Protection
                </li>

                <li class="px-3 hover:text-blue-700 cursor-pointer  hover:font-medium">
                    <Icon name="ic:sharp-install-mobile" />App
                </li>

                <li @mouseenter="isAccountMenu = true"
                    @mouseleave="isAccountMenu = false"  
                    class="relative flex items-center px-2.5 hover:text-sky-600 h-full cursor-pointer  hover:font-medium"
                    :class="isAccountMenu  ? 'bg-white border z-40 shadow-[0 15px 100px 40px rgba(0,0,0,0.3)]' : 'border border-[#FAFAFA]'">
                    <Icon name="entypo:user" size="17" />Account
                    <Icon name="ic:baseline-keyboard-arrow-down" size="15" class="ml-5" />

                    <div id="AccountMenu" class="absolute bg-white w-[220px] text-[#333333] z-40 top-[30px] -left-[100px] border-x border-b" v-if="isAccountMenu">
                        <div v-if="true">
                            <div class="text-semibold text-[15px] my-4 px-3">Welcome to ShopingApp</div>
                            <div class="flex items-center gap-1 px-3 mb-3">
                                <NuxtLink to="/auth" class="bg-sky-500 text-center w-full text-[16px] rounded-md text-white font-semibold p-2 ">
                                    Sign In | Sign Up
                                </NuxtLink>
                            </div>
                        </div>

                        <div class="border-b"></div>
                        <ul class="bg-white">
                            <li @click="navigateTo('/orders')" class="text-[13px] py-2 px-4 w-full hover:bg-gray-200 text-green-500">My Orders</li>
                            <li v-if="true" class="text-[13px] py-2 px-4 w-full hover:bg-gray-200 text-red-500"><Icon name="uit:signout" />Sign Out</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>

         <div id="MainHeader" class="flex items-center w-full bg-white">
            <div class="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 mx-auto ">
                <NuxtLink to="/" class="min-w-[170px] ">
                    <img src="/shopingLog1.png" alt="shoping log" class="w-44 ">
                </NuxtLink>

               <div class="max-w-[700px] w-full md:block hidden ">
                    <div class="relative">
                        <div class="flex items-center border-2 border-blue-400 rounded-lg w-full mt-12">
                            <input type="text" class="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none py-1" placeholder="kitchen accessories"  v-model="searchItem">
                            <Icon name="line-md:loading-twotone-loop" size="20" class="mr-2 text-blue-500" v-if="isSearching" />
                            <button class="flex items-center h-full p-2 px-2 bg-sky-800 rounded-r-md hover:bg-blue-700">
                                <Icon name="lets-icons:search" size="20" class="text-white mx-2" />
                            </button>
                        </div>

                        <div class="absolute bg-white max-w-[700px] h-auto w-full">
                            <div class="p-1"  v-if="false">
                                <NuxtLink to="`/item/1`" class="flex items-center justify-between w-full cursor-pointer hover:bg-gray-100">
                                    <div class="flex items-center">
                                        <img src="https://picsum.photos/id/82/300/320" width="40" alt="" class="rounded-md">
                                        <div class="truncate ml-2">TESTING</div>
                                    </div>
                                    <div class="truncate">$ 98:99</div>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>

                <NuxtLink to="/shoppingCart" class="flex items-center">
                    <button class="relative md:block hidden" @mouseenter="isCartHover =  true"  @mouseleave="isCartHover = false">
                        <span class="absolute flex items-center justify-center -right-[3px] top-0 bg-blue-700 h-[17px] min-w-[17px] text-sm text-white px-0 5 rounded-full">0</span>
                        <div class="min-w-40px">
                            <Icon name="tdesign:cart" size="33" :class="isCartHover ? 'text-blue-700' : '' " />
                        </div>
                    </button>
                </NuxtLink>

                <button class="md:hidden block rounded-full p-2 -mt-4px hover:bg-gray-100">
                    <Icon name="bx:menu-alt-right"  size="33" />
                </button>
            </div>
        </div>
    </div>

    <Loading v-if="userStore.isLoading" />

    <div class="lg:pt-[200px] md:pt-[150px] pt-[130px]"></div>
    <slot  />

    <Footer v-if="!userStore.isLoading"  />
</div>

</template>

<script setup>
const isAccountMenu = ref(false);
const searchItem  =  ref('');
const isCartHover = ref(false);
const isSearching = ref(true);


const userStore = useUserStore()

</script>


