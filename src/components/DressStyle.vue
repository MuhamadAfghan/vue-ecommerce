<script setup>
// DressStyle component
const styles = [
  { name: 'Casual', image: '/images/dress-style/image.png', class: 'col-span-1 md:col-span-4' }, // Small
  { name: 'Formal', image: '/images/dress-style/image copy.png', class: 'col-span-1 md:col-span-8' }, // Large
  { name: 'Party', image: '/images/dress-style/image copy 2.png', class: 'col-span-1 md:col-span-8' }, // Large
  { name: 'Gym', image: '/images/dress-style/image copy 3.png', class: 'col-span-1 md:col-span-4' }, // Small
]
</script>

<template>
  <div class="container mx-auto px-4 py-12 md:py-16">
    <div class="bg-[#F0F0F0] rounded-[40px] p-6 md:p-16">
      <h2 class="font-integral font-black text-3xl md:text-5xl text-center mb-10 md:mb-16 uppercase">Browse by dress style</h2>
      
      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div v-for="style in styles" :key="style.name" :class="[style.class, 'relative h-64 md:h-[289px] rounded-[20px] overflow-hidden group cursor-pointer bg-white']">
            <h3 class="absolute top-6 left-6 font-satoshi font-bold text-2xl md:text-4xl z-10">{{ style.name }}</h3>
            <img :src="style.image" :alt="style.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 origin-center" />
        </div>
      </div>
    </div>
  </div>
</template>
