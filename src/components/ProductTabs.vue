<script setup>
import { ref } from 'vue'

const activeTab = ref('reviews')

const tabs = [
  { id: 'details', label: 'Product Details' },
  { id: 'reviews', label: 'Rating & Reviews' },
  { id: 'faq', label: 'FAQs' },
]

const reviews = [
  { name: 'Samantha D.', date: 'August 14, 2023', rating: 4.5, text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt." },
  { name: 'Alex M.', date: 'August 15, 2023', rating: 4, text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me." },
  { name: 'Ethan R.', date: 'August 16, 2023', rating: 3.5, text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt." },
  { name: 'Liam K.', date: 'August 18, 2023', rating: 4, text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion." },
  { name: 'Ava H.', date: 'August 19, 2023', rating: 4.5, text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter." },
]
</script>

<template>
  <div class="mt-16">
    <!-- Tabs Header -->
    <div class="flex border-b border-black/10">
        <button 
            v-for="tab in tabs" 
            :key="tab.id"
            @click="activeTab = tab.id"
            class="flex-1 pb-4 text-center font-satoshi font-medium text-lg md:text-xl transition-colors relative"
            :class="activeTab === tab.id ? 'text-black font-medium' : 'text-black/60'"
        >
            {{ tab.label }}
            <div v-if="activeTab === tab.id" class="absolute bottom-0 left-0 w-full h-[2px] bg-black"></div>
        </button>
    </div>

    <!-- Tab Content -->
    <div class="mt-8">
        <!-- Reviews Tab -->
        <div v-if="activeTab === 'reviews'">
            <div class="flex items-center justify-between mb-6">
                <h3 class="font-satoshi font-bold text-xl md:text-2xl">All Reviews <span class="text-black/60 text-base font-normal">(451)</span></h3>
                <div class="flex gap-3">
                    <button class="bg-[#F0F0F0] w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                    </button>
                     <button class="bg-[#F0F0F0] px-4 h-10 rounded-full flex items-center justify-center font-satoshi font-medium hover:bg-black hover:text-white transition-colors hidden md:flex">
                        Latest <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2"><path d="m6 9 6 6 6-6"/></svg>
                    </button>
                    <button class="bg-black text-white px-6 h-10 rounded-full font-satoshi font-medium hover:bg-black/90 transition-opacity">Write a Review</button>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="(review, index) in reviews" :key="index" class="border border-black/10 rounded-[20px] p-6 md:p-8">
                     <div class="flex justify-between items-start mb-3">
                        <div class="flex text-[#FFC633] gap-1">
                            <svg v-for="n in 5" :key="n" width="20" height="20" viewBox="0 0 24 24" fill="none" class="w-5 h-5">
                                 <path v-if="n <= Math.floor(review.rating)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#FFC633" />
                                 <path v-else-if="n === Math.ceil(review.rating) && review.rating % 1 !== 0" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#half)" /> <!-- Simplified half check -->
                                 <path v-else d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#E0E0E0" />
                            </svg>
                        </div>
                        <button class="text-black/40 hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                        </button>
                     </div>
                     <div class="flex items-center gap-2 mb-2">
                        <h4 class="font-satoshi font-bold text-lg md:text-xl">{{ review.name }}</h4>
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-5 h-5 text-[#01AB31] fill-current">
                             <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
                        </svg>
                     </div>
                     <p class="font-satoshi text-black/60 leading-relaxed text-sm md:text-base mb-4">"{{ review.text }}"</p>
                     <p class="font-satoshi text-black/40 text-sm font-medium">Posted on {{ review.date }}</p>
                </div>
            </div>
             <div class="text-center mt-8">
                <button class="border border-black/10 rounded-full px-12 py-3 font-satoshi font-medium hover:bg-black hover:text-white transition-colors">Load More Reviews</button>
            </div>
        </div>

        <!-- Other Tabs Placeholders -->
         <div v-else-if="activeTab === 'details'" class="prose max-w-none font-satoshi">
            <h3 class="font-bold text-xl mb-4">Product Specifications</h3>
            <p>Details about materials, care instructions, etc.</p>
         </div>
         <div v-else-if="activeTab === 'faq'" class="prose max-w-none font-satoshi">
            <h3 class="font-bold text-xl mb-4">Frequently Asked Questions</h3>
            <p>Common questions about shipping, returns, sizing.</p>
         </div>
    </div>
  </div>
</template>
