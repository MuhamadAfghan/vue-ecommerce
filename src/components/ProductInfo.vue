<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  price: Number,
  originalPrice: Number,
  rating: Number,
  description: String
})

const quantity = ref(1)
const selectedSize = ref('Large')
const selectedColor = ref('Olive')

const colors = [
  { name: 'Olive', value: '#4F4631' },
  { name: 'Forest', value: '#314F4A' },
  { name: 'Navy', value: '#31344F' },
]

const sizes = ['Small', 'Medium', 'Large', 'X-Large']

const increment = () => quantity.value++
const decrement = () => {
    if (quantity.value > 1) quantity.value--
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <!-- Title & Rating -->
    <div>
        <h1 class="font-integral font-black text-3xl md:text-4xl uppercase mb-2">{{ title }}</h1>
        <div class="flex items-center gap-2 mb-2">
             <div class="flex text-[#FFC633]">
                <svg v-for="n in 5" :key="n" width="20" height="20" viewBox="0 0 24 24" fill="#FFC633" class="w-5 h-5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            </div>
            <span class="font-satoshi text-sm">{{ rating }}/5</span>
        </div>
        <div class="flex items-center gap-3">
            <span class="font-satoshi font-bold text-3xl">${{ price }}</span>
            <span v-if="originalPrice" class="font-satoshi font-bold text-3xl text-black/40 line-through">${{ originalPrice }}</span>
             <span v-if="originalPrice" class="font-satoshi font-medium text-sm text-[#FF3333] bg-[#FF3333]/10 px-3 py-1 rounded-full">-{{ Math.round((1 - price/originalPrice) * 100) }}%</span>
        </div>
    </div>

    <p class="font-satoshi text-black/60 leading-relaxed text-sm md:text-base border-b border-black/10 pb-6">
        {{ description }}
    </p>

    <!-- Colors -->
    <div class="border-b border-black/10 pb-6">
        <span class="font-satoshi text-black/60 text-sm mb-3 block">Select Colors</span>
        <div class="flex gap-3">
            <button 
                v-for="color in colors" 
                :key="color.name"
                @click="selectedColor = color.name"
                class="w-8 h-8 rounded-full flex items-center justify-center ring-offset-1"
                :class="selectedColor === color.name ? 'ring-1 ring-black' : ''"
                :style="{ backgroundColor: color.value }"
            >
                <svg v-if="selectedColor === color.name" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </button>
        </div>
    </div>

    <!-- Sizes -->
    <div class="border-b border-black/10 pb-6">
        <span class="font-satoshi text-black/60 text-sm mb-3 block">Choose Size</span>
        <div class="flex gap-3 flex-wrap">
            <button 
                v-for="size in sizes" 
                :key="size"
                @click="selectedSize = size"
                class="px-5 py-2.5 rounded-full font-satoshi text-sm md:text-base transition-colors bg-[#F0F0F0] text-black/60 hover:bg-black hover:text-white"
                :class="selectedSize === size ? '!bg-black !text-white' : ''"
            >
                {{ size }}
            </button>
        </div>
    </div>

    <!-- Actions -->
    <div class="flex items-center gap-4">
        <div class="flex items-center bg-[#F0F0F0] rounded-full px-4 py-3 gap-6">
            <button @click="decrement" class="text-xl font-bold">−</button>
            <span class="font-satoshi font-medium w-4 text-center">{{ quantity }}</span>
            <button @click="increment" class="text-xl font-bold">+</button>
        </div>
        <button class="bg-black text-white rounded-full px-8 py-3.5 flex-1 font-satoshi font-medium hover:bg-black/90 transition-opacity">
            Add to Cart
        </button>
    </div>
  </div>
</template>
