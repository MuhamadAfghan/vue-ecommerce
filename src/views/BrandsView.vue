<script setup>
const brands = [
  { name: 'Versace', logo: '/images/brands/versace.png' },
  { name: 'Zara', logo: '/images/brands/zara.png' },
  { name: 'Gucci', logo: '/images/brands/gucci.png' },
  { name: 'Prada', logo: '/images/brands/prada.png' },
  { name: 'Calvin Klein', logo: '/images/brands/calvin-klein.png' },
  {
    name: 'H&M',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png',
  }, // Placeholder external for variety if local missing
  {
    name: 'Chanel',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Chanel_logo_interlocking_cs.svg/1200px-Chanel_logo_interlocking_cs.svg.png',
  },
  {
    name: 'Nike',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png',
  },
  { name: 'Adidas', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg' },
  {
    name: 'Dior',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Dior_Logo.svg/1200px-Dior_Logo.svg.png',
  },
]
</script>

<template>
  <div class="container mx-auto px-4 py-12 md:py-16">
    <!-- Header -->
    <div class="text-center mb-12">
      <h2 class="font-integral font-black text-3xl md:text-5xl uppercase mb-4">Our Brands</h2>
      <p class="font-satoshi text-black/60 max-w-2xl mx-auto">
        We collaborate with the world's most renowned fashion houses to bring you the latest trends
        and timeless classics.
      </p>
    </div>

    <!-- Brands Grid -->
    <div class="bg-black rounded-[40px] p-8 md:p-16">
      <div
        class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center"
      >
        <div
          v-for="brand in brands"
          :key="brand.name"
          class="group w-full aspect-video flex items-center justify-center p-4 bg-transparent rounded-xl transition-all duration-300 hover:bg-white/10 cursor-pointer"
          @click="$router.push('/shop')"
        >
          <!-- Using text for now if images are placeholders, but img tag is prepared -->
          <img
            v-if="brand.logo"
            :src="brand.logo"
            :alt="brand.name"
            class="max-h-12 md:max-h-16 w-auto object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
          />
          <span v-else class="text-white font-integral text-xl">{{ brand.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
