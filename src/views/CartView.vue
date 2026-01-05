<script setup>
import { ref, computed } from 'vue'
import CartItem from '../components/CartItem.vue'

const cartItems = ref([
  {
    id: 1,
    title: 'Gradient Graphic T-shirt',
    size: 'Large',
    color: 'White',
    price: 145,
    quantity: 1,
    image: '/images/products/image copy 12.png',
  },
  {
    id: 2,
    title: 'Checkered Shirt',
    size: 'Medium',
    color: 'Red',
    price: 180,
    quantity: 1,
    image: '/images/products/image copy 9.png',
  },
  {
    id: 3,
    title: 'Skinny Fit Jeans',
    size: 'Large',
    color: 'Blue',
    price: 240,
    quantity: 1,
    image: '/images/products/image copy 8.png',
  },
])

const deliveryFee = 15
const discountPercentage = 0.2 // 20%

const subtotal = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0)
})

const discount = computed(() => {
  return Math.round(subtotal.value * discountPercentage)
})

const total = computed(() => {
  return subtotal.value - discount.value + deliveryFee
})

const updateQuantity = (id, newQty) => {
  const item = cartItems.value.find((i) => i.id === id)
  if (item) {
    item.quantity = newQty
  }
}

const removeItem = (id) => {
  cartItems.value = cartItems.value.filter((i) => i.id !== id)
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Breadcrumbs -->
    <div class="flex items-center gap-2 text-black/60 font-satoshi text-sm mb-6">
      <router-link to="/" class="hover:text-black">Home</router-link>
      <span>&gt;</span>
      <span class="text-black">Cart</span>
    </div>

    <h1 class="font-integral font-black text-3xl md:text-[40px] uppercase mb-6">Your Cart</h1>

    <div class="flex flex-col lg:flex-row gap-5">
      <!-- Cart Items List -->
      <div class="flex-1 border border-black/10 rounded-[20px] p-4 md:p-6">
        <template v-if="cartItems.length > 0">
          <CartItem
            v-for="item in cartItems"
            :key="item.id"
            v-bind="item"
            @update:quantity="updateQuantity(item.id, $event)"
            @remove="removeItem(item.id)"
          />
        </template>
        <div v-else class="text-center py-10 font-satoshi text-black/60">Your cart is empty.</div>
      </div>

      <!-- Order Summary -->
      <div class="w-full lg:w-[400px] lg:shrink-0">
        <div class="border border-black/10 rounded-[20px] p-5 md:p-6">
          <h3 class="font-satoshi font-bold text-xl md:text-2xl mb-6">Order Summary</h3>

          <div class="space-y-4 mb-6">
            <div class="flex justify-between font-satoshi text-black/60 text-base md:text-xl">
              <span>Subtotal</span>
              <span class="font-bold text-black">${{ subtotal }}</span>
            </div>
            <div class="flex justify-between font-satoshi text-black/60 text-base md:text-xl">
              <span>Discount (-20%)</span>
              <span class="font-bold text-[#FF3333]">- ${{ discount }}</span>
            </div>
            <div
              class="flex justify-between font-satoshi text-black/60 text-base md:text-xl border-b border-black/10 pb-4"
            >
              <span>Delivery Fee</span>
              <span class="font-bold text-black">${{ deliveryFee }}</span>
            </div>
            <div
              class="flex justify-between font-satoshi text-black text-base md:text-xl font-bold"
            >
              <span>Total</span>
              <span>${{ total }}</span>
            </div>
          </div>

          <div class="flex gap-3 mb-6">
            <div class="relative flex-1">
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
                class="absolute left-4 top-1/2 -translate-y-1/2 text-black/40"
              >
                <path
                  d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
                />
                <line x1="7" y1="7" x2="7.01" y2="7" />
              </svg>
              <input
                type="text"
                placeholder="Add promo code"
                class="w-full bg-[#F0F0F0] rounded-full py-3 pl-12 pr-4 font-satoshi outline-none placeholder:text-black/40"
              />
            </div>
            <button
              class="bg-black text-white px-6 py-3 rounded-full font-satoshi font-medium hover:bg-black/90"
            >
              Apply
            </button>
          </div>

          <button
            class="w-full bg-black text-white py-4 rounded-full font-satoshi font-medium hover:bg-black/90 flex items-center justify-center gap-2"
          >
            Go to Checkout
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              class="stroke-white"
            >
              <line
                x1="5"
                y1="12"
                x2="19"
                y2="12"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <polyline
                points="12 5 19 12 12 19"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
