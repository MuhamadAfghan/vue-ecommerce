<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ProductFilters from '../components/ProductFilters.vue'
import ProductCard from '../components/ProductCard.vue'
import Drawer from 'primevue/drawer'
import Paginator from 'primevue/paginator'
import Dropdown from 'primevue/dropdown'
import { products } from '../data/products'

const route = useRoute()
const visible = ref(false) // Drawer state
const sortOption = ref({ name: 'Most Popular', code: 'popular' })
const sortOptions = [
  { name: 'Most Popular', code: 'popular' },
  { name: 'Newest', code: 'newest' },
  { name: 'Price: Low to High', code: 'price_asc' },
  { name: 'Price: High to Low', code: 'price_desc' },
]
const dressStyle = ref(route.query.dress_style)

// Handle initial sort from URL and watch for changes
const handleSortFromUrl = () => {
  const sort = route.query.sort
  if (sort === 'sale') {
    // Custom logic for sale page title or state could go here
    sortOption.value = { name: 'Most Popular', code: 'popular' } // Keep default sort for sale page for now
  } else if (sort === 'newest') {
    sortOption.value = sortOptions.find((o) => o.code === 'newest')
  }
}

watch(() => route.query.sort, handleSortFromUrl)
onMounted(handleSortFromUrl)

import { computed } from 'vue'

const filteredProducts = computed(() => {
  let filtered = [...products]
  const sort = route.query.sort

  // Apply Filter based on "On Sale"
  if (sort === 'sale') {
    filtered = filtered.filter((p) => p.originalPrice || p.descuento)
  }

  // Apply Sorting
  if (sortOption.value.code === 'newest' || sort === 'newest') {
    filtered.sort((a, b) => new Date(b.date_added) - new Date(a.date_added))
  } else if (sortOption.value.code === 'price_asc') {
    filtered.sort((a, b) => a.price - b.price)
  } else if (sortOption.value.code === 'price_desc') {
    filtered.sort((a, b) => b.price - a.price)
  }

  // Apply Filter based on "Dress Style"
  if (route.query.dress_style) {
    filtered = filtered.filter(
      (p) => p.dress_style && p.dress_style.toLowerCase() === route.query.dress_style.toLowerCase()
    )
  }

  return filtered
})
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Breadcrumbs -->
    <div class="flex items-center gap-2 text-black/60 font-satoshi text-sm mb-6">
      <router-link to="/" class="hover:text-black">Home</router-link>
      <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.28318 0.221294L6.28318 5.22129C6.3531 5.29097 6.40857 5.37377 6.44643 5.46493C6.48428 5.55609 6.50377 5.65383 6.50377 5.75254C6.50377 5.85126 6.48428 5.94899 6.44643 6.04016C6.40857 6.13132 6.3531 6.21412 6.28318 6.28379L1.28318 11.2838C1.14228 11.4247 0.951183 11.5038 0.751926 11.5038C0.552669 11.5038 0.361572 11.4247 0.220676 11.2838C0.0797797 11.1429 0.000625142 10.9518 0.000625142 10.7525C0.000625143 10.5533 0.0797797 10.3622 0.220676 10.2213L4.69005 5.75192L0.220051 1.28255C0.0791551 1.14165 1.25847e-07 0.950553 1.28223e-07 0.751295C1.30599e-07 0.552037 0.0791552 0.360941 0.220051 0.220045C0.360948 0.0791493 0.552044 -7.62281e-06 0.751301 -7.62044e-06C0.950559 -7.61806e-06 1.14166 0.0791493 1.28255 0.220045L1.28318 0.221294Z"
          fill="black"
          fill-opacity="0.6"
        />
      </svg>

      <span class="text-black capitalize">{{ route.query.dress_style || 'Shop' }}</span>
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
          <h2 class="font-integral font-bold text-3xl capitalize">
            {{
              route.query.sort === 'sale'
                ? 'On Sale'
                : route.query.sort === 'newest'
                ? 'New Arrivals'
                : route.query.dress_style
                ? route.query.dress_style
                : 'Shop'
            }}
          </h2>
          <div class="flex items-center gap-4">
            <span class="text-black/60 font-satoshi text-sm inline-block"
              >Showing 1-{{ filteredProducts.length }} of {{ products.length }} Products</span
            >
            <div
              class="items-center hidden md:flex gap-2 text-black/60 font-satoshi text-sm whitespace-nowrap"
            >
              Sort by:
              <Dropdown
                v-model="sortOption"
                :options="sortOptions"
                optionLabel="name"
                placeholder="Most Popular"
                class="!border-0 !bg-transparent font-bold text-black !shadow-none !p-0"
              />
            </div>
            <!-- Mobile Filter Button -->
            <button @click="visible = true" class="lg:hidden bg-[#F0F0F0] p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Products Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-x-6 md:gap-y-8 mb-10">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            v-bind="product"
            :image="product.images[0]"
          />
        </div>

        <!-- Pagination -->
        <div class="border-t border-black/10 pt-6">
          <Paginator
            :rows="10"
            :totalRecords="100"
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
