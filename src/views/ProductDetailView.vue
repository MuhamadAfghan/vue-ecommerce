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
  description:
    'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
  images: [
    '/images/products/image copy 2.png',
    '/images/products/image copy 3.png',
    '/images/products/image copy 4.png',
  ],
}

const relatedProducts = [
  {
    id: 9,
    title: 'Polo with Contrast Trims',
    price: 212,
    originalPrice: 242,
    rating: 4.0,
    image: '/images/products/image copy 7.png',
  },
  {
    id: 10,
    title: 'Gradient Graphic T-shirt',
    price: 145,
    rating: 3.5,
    image: '/images/products/image 8.png',
  },
  {
    id: 11,
    title: 'Polo with Tipping Details',
    price: 180,
    rating: 4.5,
    image: '/images/products/image 9.png',
  },
  {
    id: 12,
    title: 'Black Striped T-shirt',
    price: 120,
    originalPrice: 150,
    rating: 5.0,
    image: '/images/products/image 10.png',
  },
]
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Breadcrumbs -->
    <div class="flex items-center gap-2 text-black/60 font-satoshi text-sm mb-6">
      <router-link to="/" class="hover:text-black">Home</router-link>
      <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.28318 0.221294L6.28318 5.22129C6.3531 5.29097 6.40857 5.37377 6.44643 5.46493C6.48428 5.55609 6.50377 5.65383 6.50377 5.75254C6.50377 5.85126 6.48428 5.94899 6.44643 6.04016C6.40857 6.13132 6.3531 6.21412 6.28318 6.28379L1.28318 11.2838C1.14228 11.4247 0.951183 11.5038 0.751926 11.5038C0.552669 11.5038 0.361572 11.4247 0.220676 11.2838C0.0797797 11.1429 0.000625142 10.9518 0.000625142 10.7525C0.000625143 10.5533 0.0797797 10.3622 0.220676 10.2213L4.69005 5.75192L0.220051 1.28255C0.0791551 1.14165 1.25847e-07 0.950553 1.28223e-07 0.751295C1.30599e-07 0.552037 0.0791552 0.360941 0.220051 0.220045C0.360948 0.0791493 0.552044 -7.62281e-06 0.751301 -7.62044e-06C0.950559 -7.61806e-06 1.14166 0.0791493 1.28255 0.220045L1.28318 0.221294Z"
          fill="black"
          fill-opacity="0.6"
        />
      </svg>

      <router-link to="#" class="hover:text-black">Shop</router-link>
      <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.28318 0.221294L6.28318 5.22129C6.3531 5.29097 6.40857 5.37377 6.44643 5.46493C6.48428 5.55609 6.50377 5.65383 6.50377 5.75254C6.50377 5.85126 6.48428 5.94899 6.44643 6.04016C6.40857 6.13132 6.3531 6.21412 6.28318 6.28379L1.28318 11.2838C1.14228 11.4247 0.951183 11.5038 0.751926 11.5038C0.552669 11.5038 0.361572 11.4247 0.220676 11.2838C0.0797797 11.1429 0.000625142 10.9518 0.000625142 10.7525C0.000625143 10.5533 0.0797797 10.3622 0.220676 10.2213L4.69005 5.75192L0.220051 1.28255C0.0791551 1.14165 1.25847e-07 0.950553 1.28223e-07 0.751295C1.30599e-07 0.552037 0.0791552 0.360941 0.220051 0.220045C0.360948 0.0791493 0.552044 -7.62281e-06 0.751301 -7.62044e-06C0.950559 -7.61806e-06 1.14166 0.0791493 1.28255 0.220045L1.28318 0.221294Z"
          fill="black"
          fill-opacity="0.6"
        />
      </svg>

      <router-link to="#" class="hover:text-black">Men</router-link>
      <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.28318 0.221294L6.28318 5.22129C6.3531 5.29097 6.40857 5.37377 6.44643 5.46493C6.48428 5.55609 6.50377 5.65383 6.50377 5.75254C6.50377 5.85126 6.48428 5.94899 6.44643 6.04016C6.40857 6.13132 6.3531 6.21412 6.28318 6.28379L1.28318 11.2838C1.14228 11.4247 0.951183 11.5038 0.751926 11.5038C0.552669 11.5038 0.361572 11.4247 0.220676 11.2838C0.0797797 11.1429 0.000625142 10.9518 0.000625142 10.7525C0.000625143 10.5533 0.0797797 10.3622 0.220676 10.2213L4.69005 5.75192L0.220051 1.28255C0.0791551 1.14165 1.25847e-07 0.950553 1.28223e-07 0.751295C1.30599e-07 0.552037 0.0791552 0.360941 0.220051 0.220045C0.360948 0.0791493 0.552044 -7.62281e-06 0.751301 -7.62044e-06C0.950559 -7.61806e-06 1.14166 0.0791493 1.28255 0.220045L1.28318 0.221294Z"
          fill="black"
          fill-opacity="0.6"
        />
      </svg>

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
      <h2 class="font-integral font-black text-3xl md:text-5xl text-center mb-12 uppercase">
        You might also like
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <ProductCard v-for="prod in relatedProducts" :key="prod.id" v-bind="prod" />
      </div>
    </section>
  </div>
</template>
