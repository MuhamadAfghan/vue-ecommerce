<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Drawer from 'primevue/drawer'

const visible = ref(false)
</script>

<template>
  <div class="w-full bg-white sticky top-0 z-50 border-b border-gray-100">
    <!-- Top Banner -->
    <div class="bg-black text-white text-xs sm:text-sm py-2 text-center relative">
      <div class="container mx-auto px-4">
        Sign up and get 20% off to your first order.
        <a href="#" class="underline font-medium hover:text-gray-300">Sign Up Now</a>
      </div>
      <button class="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:block">
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
        class="text-2xl lg:text-4xl font-extrabold font-integral tracking-tighter uppercase relative -top-1"
        >Shop.co</RouterLink
      >

      <!-- Desktop Links -->
      <div class="hidden lg:flex items-center gap-6 font-satoshi text-base">
        <RouterLink to="/shop" class="flex items-center gap-1 hover:text-black/70"
          >Shop
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            class="opacity-60"
          >
            <path
              d="m6 9 6 6 6-6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
        ></RouterLink>
        <RouterLink to="/shop" class="hover:text-black/70">On Sale</RouterLink>
        <RouterLink to="/shop" class="hover:text-black/70">New Arrivals</RouterLink>
        <RouterLink to="/shop" class="hover:text-black/70">Brands</RouterLink>
      </div>

      <!-- Search Bar -->
      <div
        class="hidden lg:flex flex-1 max-w-md bg-[#F0F0F0] rounded-full px-4 py-3 items-center gap-3"
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
        <input
          type="text"
          placeholder="Search for products..."
          class="bg-transparent border-none outline-none w-full font-satoshi text-sm placeholder:text-[#909090]"
        />
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
        <button class="hover:text-black/60 transition-colors">
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
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
        </button>
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
        <RouterLink to="/shop" class="hover:text-black/70" @click="visible = false"
          >On Sale</RouterLink
        >
        <RouterLink to="/shop" class="hover:text-black/70" @click="visible = false"
          >New Arrivals</RouterLink
        >
        <RouterLink to="/shop" class="hover:text-black/70" @click="visible = false"
          >Brands</RouterLink
        >
      </div>
    </Drawer>
  </div>
</template>
