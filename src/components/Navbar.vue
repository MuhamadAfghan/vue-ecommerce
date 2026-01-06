<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import Drawer from 'primevue/drawer'

import { computed } from 'vue'
import { products } from '../data/products'

const visible = ref(false)
const hidePromotion = ref(false)
const searchQuery = ref('')

const filteredProducts = computed(() => {
  if (!searchQuery.value) return []
  return products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const router = useRouter()

const goToProduct = (id) => {
  router.push(`/product/${id}`)
  searchQuery.value = ''
}

const goToSearch = () => {
  router.push(`/shop?q=${searchQuery.value}`)
  searchQuery.value = ''
}

const menuItems = [
  { name: 'Casual', description: 'Street style & comfort', image: '/images/dress-style/image.png' },
  {
    name: 'Formal',
    description: 'Elegant & sophisticated',
    image: '/images/dress-style/image copy.png',
  },
  {
    name: 'Party',
    description: 'Night out & events',
    image: '/images/dress-style/image copy 2.png',
  },
  { name: 'Gym', description: 'Active & sporty', image: '/images/dress-style/image copy 3.png' },
]
</script>

<template>
  <div class="w-full bg-white sticky top-0 z-50 border-b border-gray-100">
    <!-- Top Banner -->
    <div
      class="bg-black text-white text-xs sm:text-sm py-2 text-center relative"
      :class="{ hidden: hidePromotion }"
    >
      <div class="container mx-auto px-4">
        Sign up and get 20% off to your first order.
        <RouterLink to="/register" class="underline font-medium hover:text-gray-300"
          >Sign Up Now</RouterLink
        >
      </div>
      <button
        class="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:block"
        @click="hidePromotion = true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-4 h-4"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>

    <!-- Main Navigation -->
    <nav
      class="container mx-auto px-4 py-4 lg:py-6 flex items-center justify-between gap-4 lg:gap-8"
    >
      <div class="flex items-center gap-4">
        <!-- Mobile Menu Button -->
        <button @click="visible = true" class="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>

        <!-- Logo -->
        <RouterLink
          to="/"
          class="text-2xl lg:text-4xl font-extrabold font-integral tracking-tighter uppercase relative"
          >Shop.co</RouterLink
        >
      </div>

      <!-- Desktop Links -->
      <div class="hidden lg:flex items-center gap-6 font-satoshi text-base">
        <div class="group relative h-full flex items-center">
          <RouterLink to="/shop" class="flex items-center gap-1 hover:text-black/70 py-4"
            >Shop
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              class="opacity-60 transition-transform group-hover:rotate-180 duration-300"
            >
              <path
                d="m6 9 6 6 6-6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
          ></RouterLink>

          <!-- Mega Menu Dropdown -->
          <div class="hidden group-hover:block absolute top-full left-0 w-[600px] pt-2 z-50">
            <div
              class="bg-white rounded-2xl shadow-xl border border-black/5 p-4 flex gap-4 overflow-hidden"
            >
              <!-- Left Column: List -->
              <div class="w-1/2 flex flex-col gap-2">
                <div
                  v-for="item in menuItems"
                  :key="item.name"
                  class="flex items-center gap-3 p-2 rounded-xl hover:bg-[#F0F0F0] transition-colors cursor-pointer group/item"
                  @click="$router.push(`/shop?dress_style=${item.name.toLowerCase()}`)"
                >
                  <img
                    :src="item.image"
                    :alt="item.name"
                    class="w-12 h-12 rounded-lg object-cover bg-gray-100"
                  />
                  <div class="flex-1">
                    <div class="font-bold text-sm text-black">{{ item.name }}</div>
                    <div class="text-xs text-black/60">{{ item.description }}</div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>

                <RouterLink
                  to="/shop"
                  class="mt-2 w-full text-center py-2.5 rounded-full border border-black/10 text-sm font-medium hover:bg-black hover:text-white transition-all"
                >
                  View All Styles
                </RouterLink>
              </div>

              <!-- Right Column: Featured -->
              <div
                class="w-1/2 relative rounded-xl overflow-hidden bg-[#F0F0F0] min-h-[300px] group/card cursor-pointer"
                @click="$router.push('/shop?dress_style=party')"
              >
                <img
                  src="/images/dress-style/image copy 2.png"
                  alt="Featured"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4 text-white">
                  <div class="bg-white/20 backdrop-blur-md border border-white/20 rounded-lg p-3">
                    <h4 class="font-bold text-lg mb-1">New Party Collection</h4>
                    <p class="text-xs text-white/90 mb-2">
                      Discover the latest trends for your next event.
                    </p>
                    <div class="flex items-center gap-1 text-xs font-bold uppercase tracking-wider">
                      Shop Now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RouterLink to="/shop?sort=sale" class="hover:text-black/70">On Sale</RouterLink>
        <RouterLink to="/shop?sort=newest" class="hover:text-black/70">New Arrivals</RouterLink>
        <RouterLink to="/brands" class="hover:text-black/70">Brands</RouterLink>
      </div>

      <!-- Search Bar -->
      <div class="hidden lg:block flex-1 max-w-md relative">
        <div class="bg-[#F0F0F0] rounded-full px-4 py-3 flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#909090"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search for products..."
            class="bg-transparent border-none outline-none w-full font-satoshi text-sm placeholder:text-[#909090]"
          />
        </div>

        <!-- Search Recommendations Dropdown -->
        <div
          v-if="searchQuery && filteredProducts.length > 0"
          class="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-black/5 overflow-hidden z-[60]"
        >
          <div class="p-2">
            <div
              v-for="product in filteredProducts.slice(0, 5)"
              :key="product.id"
              class="flex items-center gap-3 p-2 hover:bg-[#F0F0F0] rounded-lg cursor-pointer"
              @click="goToProduct(product.id)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#909090"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <img
                :src="product.images[0]"
                :alt="product.title"
                class="w-10 h-10 object-cover rounded-md"
              />
              <div>
                <div class="text-sm font-bold text-black">{{ product.title }}</div>
                <div class="text-xs text-black/60">${{ product.price }}</div>
              </div>
            </div>
            <div
              class="text-xs text-center p-2 text-black/60 border-t border-black/5 mt-1 cursor-pointer hover:text-black hover:underline"
              @click="goToSearch"
            >
              See all results for "{{ searchQuery }}"
            </div>
          </div>
        </div>
      </div>

      <!-- Icons -->
      <div class="flex items-center gap-3 lg:gap-4">
        <button class="hover:text-black/60 transition-colors lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>
        <RouterLink to="/cart" class="hover:text-black/60 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </RouterLink>
        <div class="w-[2px] h-[24px] bg-[#E6E9F0] mx-2"></div>
        <RouterLink
          to="/login"
          class="border border-black rounded-lg text-sm px-5 py-2 font-satoshi font-medium transition-colors w-full md:w-auto"
        >
          Sign In
        </RouterLink>
        <RouterLink
          to="/register"
          class="border max-sm:hidden border-black/10 rounded-lg text-sm px-5 py-2 font-satoshi font-medium bg-black text-white transition-colors w-full md:w-auto"
        >
          Sign Up
        </RouterLink>
      </div>
    </nav>

    <!-- Mobile Menu Drawer -->
    <Drawer
      v-model:visible="visible"
      :header="'Menu'"
      position="left"
      class="!w-3/4 !max-w-xs font-satoshi"
    >
      <template #header>
        <RouterLink
          to="/"
          class="text-2xl font-extrabold font-integral tracking-tighter uppercase"
          @click="visible = false"
          >Shop.co</RouterLink
        >
      </template>
      <div class="flex flex-col gap-6 font-satoshi text-lg font-medium mt-4">
        <RouterLink to="/shop" class="hover:text-black/70" @click="visible = false"
          >Shop</RouterLink
        >
        <RouterLink to="/shop?sort=sale" class="hover:text-black/70" @click="visible = false"
          >On Sale</RouterLink
        >
        <RouterLink to="/shop?sort=newest" class="hover:text-black/70" @click="visible = false"
          >New Arrivals</RouterLink
        >
        <RouterLink to="/brands" class="hover:text-black/70" @click="visible = false"
          >Brands</RouterLink
        >
      </div>
    </Drawer>
  </div>
</template>
