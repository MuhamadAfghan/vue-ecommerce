<script setup>
defineProps({
  id: Number,
  title: String,
  color: String,
  size: String,
  price: Number,
  image: String,
  quantity: Number
})

const emit = defineEmits(['update:quantity', 'remove'])
</script>

<template>
  <div class="flex gap-4 py-6 border-b border-black/10 last:border-0">
    <div class="w-24 h-24 md:w-32 md:h-32 bg-[#F0EEED] rounded-[8.66px] p-2 flex-shrink-0">
      <img :src="image" :alt="title" class="w-full h-full object-contain mix-blend-multiply" />
    </div>
    
    <div class="flex-1 flex flex-col justify-between">
      <div class="flex justify-between items-start">
        <div>
          <h3 class="font-satoshi font-bold text-base md:text-xl text-black mb-1">{{ title }}</h3>
          <p class="font-satoshi text-xs md:text-sm text-black/60 mb-1">
            Size: <span class="text-black/60">{{ size }}</span>
          </p>
          <p class="font-satoshi text-xs md:text-sm text-black/60">
            Color: <span class="text-black/60">{{ color }}</span>
          </p>
        </div>
        <button 
          @click="$emit('remove')"
          class="text-[#FF3333] hover:text-[#FF3333]/80 p-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
        </button>
      </div>

      <div class="flex justify-between items-end">
        <span class="font-satoshi font-bold text-xl md:text-2xl">${{ price }}</span>
        
        <div class="flex items-center bg-[#F0F0F0] rounded-full px-4 py-2 gap-4">
          <button 
            @click="$emit('update:quantity', Math.max(1, quantity - 1))"
            class="text-xl md:text-2xl font-bold hover:text-black/60"
          >−</button>
          
          <span class="font-satoshi font-medium text-sm md:text-base w-4 text-center">{{ quantity }}</span>
          
          <button 
             @click="$emit('update:quantity', quantity + 1)"
             class="text-xl md:text-2xl font-bold hover:text-black/60"
          >+</button>
        </div>
      </div>
    </div>
  </div>
</template>
