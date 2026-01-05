<script setup>
import { ref } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const currentSlide = ref(0)
const carouselRef = ref(null)

const next = () => carouselRef.value.next()
const prev = () => carouselRef.value.prev()

const reviews = [
  { name: 'Sarah M.', rating: 5, text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece has exceeded my expectations." },
  { name: 'Alex K.', rating: 5, text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions." },
  { name: 'James L.', rating: 5, text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends." },
  { name: 'Mooen', rating: 5, text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends." },
  { name: 'Michael B.', rating: 5, text: "I was skeptical at first, but the quality of the fabric and the fit are just perfect. Highly recommend looking through their collections." },
]

const breakpoints = {
  // 300px and up
  300: {
    itemsToShow: 1,
    snapAlign: 'center',
  },
  // 700px and up
  700: {
    itemsToShow: 2,
    snapAlign: 'start',
  },
  // 1024px and up
  1024: {
    itemsToShow: 3,
    snapAlign: 'start',
  },
}
</script>

<template>
  <div class="container mx-auto px-4 py-12 md:py-16 relative">
    <div class="flex items-center justify-between mb-8">
        <h2 class="font-integral font-black text-3xl md:text-5xl uppercase">Our Happy Customers</h2>
        <div class="flex gap-4">
             <!-- Custom Navigation Arrows -->
            <button @click="prev" class="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
            </button>
            <button @click="next" class="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
        </div>
    </div>
    
    <div class="relative">
        <!-- Blur Effects -->
        <div class="absolute inset-y-0 left-0 w-8 md:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div class="absolute inset-y-0 right-0 w-8 md:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <Carousel ref="carouselRef" :autoplay="3000"
    :pause-autoplay-on-hover="true" 
    :breakpoints="breakpoints" :wrap-around="true">
            <Slide v-for="(review, index) in reviews" :key="index">
                <div class="border border-black/10 rounded-[20px] p-6 md:p-8 flex flex-col items-start text-left h-full mx-2 md:mx-3 transition-all duration-300 hover:border-black/30">
                     <div class="flex text-[#FFC633] gap-1 mb-4">
                        <svg v-for="n in 5" :key="n" width="20" height="20" viewBox="0 0 24 24" fill="#FFC633" class="w-5 h-5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    </div>
                    <div class="flex items-center gap-2 mb-3">
                        <h4 class="font-satoshi font-bold text-lg md:text-xl">{{ review.name }}</h4>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-5 h-5 text-[#01AB31] fill-current">
                             <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
                        </svg>
                    </div>
                    <p class="font-satoshi text-black/60 leading-relaxed text-sm md:text-base">"{{ review.text }}"</p>
                </div>
            </Slide>
        </Carousel>
    </div>
  </div>
</template>

<style scoped>
/* Override default carousel styles if needed */
.carousel__slide {
  padding: 10px;
}
</style>
