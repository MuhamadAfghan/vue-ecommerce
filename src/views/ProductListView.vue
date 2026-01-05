<script setup>
import { ref } from 'vue'
import ProductFilters from '../components/ProductFilters.vue'
import ProductCard from '../components/ProductCard.vue'
import Drawer from 'primevue/drawer';
import Paginator from 'primevue/paginator';
import Select from 'primevue/select'; // Dropdown renamed to Select in v4? Checking docs... usually Dropdown or Select. Let's try Select or assume Dropdown.
// Actually in v4 it is Select usually or Dropdown is still there. Let's use Select if available or fallback to Dropdown if error. 
// Wait, for v4 'Select' is the new name for Dropdown? No, Dropdown is still common. Let's use Dropdown to be safe or check imports? 
// I'll stick to 'Select' as it matches standard HTML, but PrimeVue usually has Dropdown.
// Let's use a simple native select for sorting to match the "Sort by: Most Popular" text style or a minimal custom one. 
// The design shows "Sort by: Most Popular" with a dropdown arrow.

import Dropdown from 'primevue/dropdown'; 

const visible = ref(false); // Drawer state
const sortOption = ref({ name: 'Most Popular', code: 'popular' });
const sortOptions = [
    { name: 'Most Popular', code: 'popular' },
    { name: 'Newest', code: 'newest' },
    { name: 'Price: Low to High', code: 'price_asc' },
    { name: 'Price: High to Low', code: 'price_desc' }
];

// Mock Products
const products = [
    { id: 1, title: 'Gradient Graphic T-shirt', price: 145, rating: 3.5, image: '/images/products/image copy 8.png' },
    { id: 2, title: 'Polo with Tipping Details', price: 180, rating: 4.5, image: '/images/products/image copy 9.png' },
    { id: 3, title: 'Black Striped T-shirt', price: 120, originalPrice: 150, rating: 5.0, image: '/images/products/image copy 10.png' },
    { id: 4, title: 'Skinny Fit Jeans', price: 240, originalPrice: 260, rating: 3.5, image: '/images/products/image copy 8.png' },
    { id: 5, title: 'Checkered Shirt', price: 180, rating: 4.5, image: '/images/products/image copy 9.png' },
    { id: 6, title: 'Sleeve Striped T-shirt', price: 130, originalPrice: 160, rating: 4.5, image: '/images/products/image copy 10.png' },
    { id: 7, title: 'Vertical Striped Shirt', price: 212, originalPrice: 232, rating: 5.0, image: '/images/products/image copy 11.png' },
    { id: 8, title: 'Courage Graphic T-shirt', price: 145, rating: 4.0, image: '/images/products/image copy 12.png' },
    { id: 9, title: 'Loose Fit Bermuda Shorts', price: 80, rating: 3.0, image: '/images/products/image copy 13.png' },
];

</script>

<template>
  <div class="container mx-auto px-4 py-8">
     <!-- Breadcrumbs -->
    <div class="flex items-center gap-2 text-black/60 font-satoshi text-sm mb-6">
        <router-link to="/" class="hover:text-black">Home</router-link>
        <span>&gt;</span>
        <span class="text-black">Casual</span>
    </div>

    <div class="flex flex-col lg:flex-row gap-8">
        <!-- Sidebar Filters (Desktop) -->
        <div class="hidden lg:block w-1/4 min-w-[280px]">
            <ProductFilters />
        </div>

        <!-- Main Content -->
        <div class="flex-1">
            <!-- Header -->
            <div class="flex items-center justify-between mb-6">
                <h2 class="font-integral font-bold text-3xl">Casual</h2>
                <div class="flex items-center gap-4">
                    <span class="text-black/60 font-satoshi text-sm inline-block">Showing 1-10 of 100 Products</span>
                    <div class="  items-center hidden md:flex gap-2 text-black/60 font-satoshi text-sm whitespace-nowrap">
                        Sort by: 
                         <Dropdown v-model="sortOption" :options="sortOptions" optionLabel="name" placeholder="Most Popular" class="!border-0 !bg-transparent font-bold text-black !shadow-none !p-0" />
                    </div>
                     <!-- Mobile Filter Button -->
                    <button @click="visible = true" class="lg:hidden bg-[#F0F0F0] p-2 rounded-full">
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                    </button>
                </div>
            </div>

            <!-- Products Grid -->
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-x-6 md:gap-y-8 mb-10">
                <ProductCard v-for="product in products" :key="product.id" v-bind="product" />
            </div>

            <!-- Pagination -->
            <div class="border-t border-black/10 pt-6">
                 <Paginator :rows="10" :totalRecords="100" 
                    template="PrevPageLink PageLinks NextPageLink"
                    class="!bg-transparent"
                 ></Paginator>
            </div>
        </div>
    </div>

    <!-- Mobile Drawer -->
    <Drawer v-model:visible="visible" header="Filters" position="bottom" style="height: 90vh">
        <ProductFilters class="!border-0 !p-0" />
    </Drawer>
  </div>
</template>

<style scoped>
/* Override PrimeVue styled defaults for minimalism if needed */
:deep(.p-dropdown-label) {
    padding: 0 !important;
    font-weight: 700;
}
:deep(.p-dropdown-trigger) {
    width: auto !important;
    padding-left: 0.5rem;
}
</style>
