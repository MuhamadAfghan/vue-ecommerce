<script setup>
import { useRoute } from 'vue-router'
import ProductGallery from '../components/ProductGallery.vue'
import ProductInfo from '../components/ProductInfo.vue'
import ProductTabs from '../components/ProductTabs.vue'
import ProductCard from '../components/ProductCard.vue'

const route = useRoute()
const productId = route.params.id

// Mock Data - In real app fetch by ID
const product = {
    title: 'One Life Graphic T-shirt',
    price: 260,
    originalPrice: 300,
    rating: 4.5,
    description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    images: [
      '/images/products/image copy 2.png',
      '/images/products/image copy 3.png', 
      '/images/products/image copy 4.png'
    ]
}

const relatedProducts = [
  { id: 9, title: 'Polo with Contrast Trims', price: 212, originalPrice: 242, rating: 4.0, image: '/images/products/image copy 7.png' },
  { id: 10, title: 'Gradient Graphic T-shirt', price: 145, rating: 3.5, image: '/images/products/image 8.png' },
  { id: 11, title: 'Polo with Tipping Details', price: 180, rating: 4.5, image: '/images/products/image 9.png' },
  { id: 12, title: 'Black Striped T-shirt', price: 120, originalPrice: 150, rating: 5.0, image: '/images/products/image 10.png' },
]
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Breadcrumbs -->
    <div class="flex items-center gap-2 text-black/60 font-satoshi text-sm mb-6">
        <router-link to="/" class="hover:text-black">Home</router-link>
        <span>&gt;</span>
        <router-link to="#" class="hover:text-black">Shop</router-link>
        <span>&gt;</span>
        <router-link to="#" class="hover:text-black">Men</router-link>
        <span>&gt;</span>
        <span class="text-black">T-shirts</span>
    </div>

    <!-- Main Content -->
    <div class="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-16">
        <div class="w-full lg:w-1/2">
            <ProductGallery :images="product.images" />
        </div>
        <div class="w-full lg:w-1/2">
            <ProductInfo v-bind="product" />
        </div>
    </div>

    <!-- Tabs -->
    <ProductTabs class="mb-16" />

    <!-- Related Products -->
    <section>
        <h2 class="font-integral font-black text-3xl md:text-5xl text-center mb-12 uppercase">You might also like</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <ProductCard v-for="prod in relatedProducts" :key="prod.id" v-bind="prod" />
        </div>
    </section>
  </div>
</template>
