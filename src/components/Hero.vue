<script setup>
// Hero component
</script>

<template>
  <div class="bg-[#F2F0F1] pt-10 sm:pt-20 md:pt-0">
    <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      <!-- Text Content -->
      <div class="md:w-1/2 mb-10 md:mb-0 space-y-6 md:space-y-8">
        <h1 class="font-integral font-black text-4xl md:text-6xl leading-[1] md:leading-[1] uppercase">
          Find Clothes <br class="hidden md:block" />
          that matches <br class="hidden md:block" />
          your style
        </h1>
        <p class="font-satoshi text-black/60 text-sm md:text-base max-w-sm">
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        <button class="bg-black text-white px-12 py-3.5 rounded-full font-medium hover:bg-black/90 transition-transform w-full md:w-auto">
          Shop Now
        </button>

        <div class="flex items-center gap-4 md:gap-8 pt-6 flex-wrap justify-center md:justify-start">
            <div class="border-r border-gray-300 pr-4 md:pr-8 last:border-0">
                <h3 class="font-satoshi font-bold text-2xl md:text-4xl block">200+</h3>
                <span class="text-xs md:text-sm text-black/60">International Brands</span>
            </div>
            <div class="border-r border-gray-300 pr-4 md:pr-8 last:border-0">
                <h3 class="font-satoshi font-bold text-2xl md:text-4xl block">2,000+</h3>
                <span class="text-xs md:text-sm text-black/60">High-Quality Products</span>
            </div>
            <div>
                <h3 class="font-satoshi font-bold text-2xl md:text-4xl block">30,000+</h3>
                <span class="text-xs md:text-sm text-black/60">Happy Customers</span>
            </div>
        </div>
      </div>

      <!-- Image -->
      <div class="w-full md:w-1/2  relative min-h-[400px] md:min-h-[800px] w-full flex items-end justify-center">
         <!-- Star decorations could go here absolutely positioned -->
         <div class="w-full h-auto object-cover object-center md:max-h-[800px] max-h-[450px] overflow-hidden relative z-10">
            <img src="/images/hero.png" alt="Fashion Models" class="w-full h-auto object-cover relative z-10" />
         </div>
         <!-- Decorative Stars -->
         <div class="absolute top-10 right-4 md:right-0 animate-pulse z-20">
            <svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 md:w-24 md:h-24">
                <path d="M52 0C52 28.7188 75.2812 52 104 52C75.2812 52 52 75.2812 52 104C52 75.2812 28.7188 52 0 52C28.7188 52 52 28.7188 52 0Z" fill="black"/>
            </svg>
         </div>
         <div class="absolute top-1/2 left-4 animate-pulse delay-700 z-20">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 md:w-14 md:h-14">
                <path d="M28 0C28 15.4636 40.5364 28 56 28C40.5364 28 28 40.5364 28 56C28 40.5364 15.4636 28 0 28C15.4636 28 28 15.4636 28 0Z" fill="black"/>
            </svg>
         </div>
      </div>
    </div>
    <!-- Brand Strip -->
    <div class="bg-black py-8">
        <div class="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8 grayscale opacity-80">
            <img src="/images/brands/versace.png" alt="Versace" class="  h-24 md:h-7    ">
            <img src="/images/brands/zara.png" alt="Zara" class="  h-24 md:h-7">
            <img src="/images/brands/gucci.png" alt="Gucci" class="  h-24 md:h-7">
            <img src="/images/brands/prada.png" alt="Prada" class="  h-24 md:h-7">
            <img src="/images/brands/calvin-klein.png" alt="Calvin Klein" class="  h-24 md:h-7">
        </div>
    </div>
  </div>
</template>
