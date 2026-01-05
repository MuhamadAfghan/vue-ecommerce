<script setup>
import Hero from '../components/Hero.vue'
import ProductCard from '../components/ProductCard.vue'
import DressStyle from '../components/DressStyle.vue'
import Reviews from '../components/Reviews.vue'

const newArrivals = [
  {
    id: 1,
    title: 'T-shirt with Tape Details',
    price: 120,
    rating: 4.5,
    image: '/images/products/image copy 7.png',
  },
  {
    id: 2,
    title: 'Skinny Fit Jeans',
    price: 240,
    originalPrice: 260,
    rating: 3.5,
    image: '/images/products/image copy 8.png',
  },
  {
    id: 3,
    title: 'Checkered Shirt',
    price: 180,
    rating: 4.5,
    image: '/images/products/image copy 9.png',
  },
  {
    id: 4,
    title: 'Sleeve Striped T-shirt',
    price: 130,
    originalPrice: 160,
    rating: 4.5,
    image: '/images/products/image copy 10.png',
  },
]

const topSelling = [
  {
    id: 5,
    title: 'Vertical Striped Shirt',
    price: 212,
    originalPrice: 232,
    rating: 5.0,
    image: '/images/products/image copy 11.png',
  },
  {
    id: 6,
    title: 'Courage Graphic T-shirt',
    price: 145,
    rating: 4.0,
    image: '/images/products/image copy 12.png',
  },
  {
    id: 7,
    title: 'Loose Fit Bermuda Shorts',
    price: 80,
    rating: 3.0,
    image: '/images/products/image copy 13.png',
  },
  {
    id: 8,
    title: 'Faded Skinny Jeans',
    price: 210,
    rating: 4.5,
    image: '/images/products/image copy 14.png',
  },
]
</script>

<template>
  <main>
    <Hero />

    <!-- New Arrivals -->
    <section class="container mx-auto px-4 py-16 border-b border-black/10">
      <h2 class="font-integral font-black text-3xl md:text-5xl text-center mb-12 uppercase">
        New Arrivals
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <ProductCard v-for="product in newArrivals" :key="product.id" v-bind="product" />
      </div>
      <div class="text-center mt-12">
        <button
          class="border border-black/10 rounded-full px-16 py-3 font-satoshi font-medium hover:bg-black hover:text-white transition-colors w-full md:w-auto"
        >
          View All
        </button>
      </div>
    </section>

    <!-- Top Selling -->
    <section class="container mx-auto px-4 py-16">
      <h2 class="font-integral font-black text-3xl md:text-5xl text-center mb-12 uppercase">
        Top Selling
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <ProductCard v-for="product in topSelling" :key="product.id" v-bind="product" />
      </div>
      <div class="text-center mt-12">
        <button
          class="border border-black/10 rounded-full px-16 py-3 font-satoshi font-medium hover:bg-black hover:text-white transition-colors w-full md:w-auto"
        >
          View All
        </button>
      </div>
    </section>

    <DressStyle />

    <Reviews />
  </main>
</template>
