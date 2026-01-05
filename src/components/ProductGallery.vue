<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    default: () => [
      '/images/products/image copy 2.png',
      '/images/products/image copy 3.png', 
      '/images/products/image copy 4.png'
    ]
  }
})

const activeImage = ref(props.images[0])

const setActiveImage = (img) => {
  activeImage.value = img
}
</script>

<template>
  <div class="flex flex-col-reverse md:flex-row gap-4">
    <!-- Thumbnails -->
    <div class="flex md:flex-col gap-3 md:w-1/4 overflow-auto no-scrollbar">
      <button 
        v-for="(img, index) in images" 
        :key="index"
        @click="setActiveImage(img)"
        class="border rounded-[20px] overflow-hidden aspect-square h-32 md:h-auto md:w-full flex-shrink-0 transition-all duration-200"
        :class="activeImage === img ? 'border-black' : 'border-transparent'"
      >
        <img :src="img" class="w-full h-full object-cover" alt="Thumbnail" />
      </button>
    </div>
    
    <!-- Main Image -->
    <div class="md:w-3/4 bg-[#F0EEED] rounded-[20px] overflow-hidden aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center">
      <img :src="activeImage" class="w-full h-full object-cover" alt="Main Product Image" />
    </div>
  </div>
</template>
