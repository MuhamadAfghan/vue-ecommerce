<script setup>
defineProps({
  id: Number,
  title: String,
  price: Number,
  originalPrice: Number,
  rating: Number,
  image: String,
})

const getStarArray = (rating) => {
  const stars = []
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  for (let i = 0; i < fullStars; i++) stars.push('full')
  if (hasHalfStar) stars.push('half')
  while (stars.length < 5) stars.push('empty')

  return stars
}
</script>

<template>
  <RouterLink :to="`/product/${id}`" class="block cursor-pointer group">
    <div
      class="bg-[#F0EEED] rounded-[20px] mb-4 overflow-hidden aspect-square flex items-center justify-center"
    >
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    <h3 class="font-satoshi font-bold text-lg md:text-xl truncate">{{ title }}</h3>
    <div class="flex items-center gap-1 my-1 md:my-2">
      <div class="flex text-[#FFC633] text-lg">
        <span v-for="(star, index) in getStarArray(rating)" :key="index">
          <template v-if="star === 'full'">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
              />
            </svg>
          </template>
          <template v-else-if="star === 'half'">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"
              />
            </svg>
          </template>
          <!-- Using a simple char, ideally SVG -->
          <!-- SVGs would be better for control but simple chars are fast -->
          <!-- Let's replace with SVG for quality -->
        </span>
      </div>
      <span class="text-sm font-satoshi">{{ rating }}/5</span>
    </div>
    <div class="flex items-center gap-3">
      <span class="font-satoshi font-bold text-xl md:text-2xl">${{ price }}</span>
      <span
        v-if="originalPrice"
        class="font-satoshi font-bold text-xl md:text-2xl text-black/40 line-through"
        >${{ originalPrice }}</span
      >
      <span
        v-if="originalPrice"
        class="font-satoshi font-medium text-xs md:text-sm text-[#FF3333] bg-[#FF3333]/10 px-3 py-1 rounded-full"
        >-{{ Math.round((1 - price / originalPrice) * 100) }}%</span
      >
    </div>
  </RouterLink>
</template>
