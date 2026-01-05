<script setup>
import { ref } from 'vue'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import Slider from 'primevue/slider'
import Button from 'primevue/button'

const categories = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans']
const priceRange = ref([50, 200])
const selectedColor = ref([])
const selectedSize = ref([])
const dressStyles = ['Casual', 'Formal', 'Party', 'Gym']

const colors = [
  { name: 'Green', value: '#00C12B' },
  { name: 'Red', value: '#F50606' },
  { name: 'Yellow', value: '#F5DD06' },
  { name: 'Orange', value: '#F57906' },
  { name: 'Cyan', value: '#06CAF5' },
  { name: 'Blue', value: '#063AF5' },
  { name: 'Purple', value: '#7D06F5' },
  { name: 'Pink', value: '#F506A4' },
  { name: 'White', value: '#FFFFFF', border: true },
  { name: 'Black', value: '#000000' },
]

const sizes = [
  'XX-Small',
  'X-Small',
  'Small',
  'Medium',
  'Large',
  'X-Large',
  'XX-Large',
  '3X-Large',
  '4X-Large',
]

const toggleColor = (name) => {
  if (selectedColor.value.includes(name)) {
    selectedColor.value = selectedColor.value.filter((c) => c !== name)
  } else {
    selectedColor.value.push(name)
  }
}

const toggleSize = (size) => {
  if (selectedSize.value.includes(size)) {
    selectedSize.value = selectedSize.value.filter((s) => s !== size)
  } else {
    selectedSize.value.push(size)
  }
}
</script>

<template>
  <div class="border border-black/10 rounded-[20px] p-5 bg-white">
    <div class="hidden lg:flex items-center justify-between mb-4 pb-4 border-b border-black/10">
      <h3 class="font-bold text-xl font-integral">Filters</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        class="text-black/40"
      >
        <path
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <!-- Categories List -->
    <ul class="space-y-3 mb-6 pb-6 border-b border-black/10 text-black/60 font-satoshi">
      <li
        v-for="cat in categories"
        :key="cat"
        class="flex justify-between items-center cursor-pointer hover:text-black"
      >
        <span>{{ cat }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </li>
    </ul>

    <Accordion multiple :value="['0', '1', '2', '3']" class="filter-accordion">
      <!-- Price -->
      <AccordionPanel value="0">
        <AccordionHeader class="!bg-transparent !border-0 !px-0 font-bold text-xl font-integral"
          >Price</AccordionHeader
        >
        <AccordionContent class="!px-0">
          <div class="px-2 pt-4">
            <Slider v-model="priceRange" range :min="0" :max="500" class="w-full mb-4" />
            <div class="flex justify-between font-satoshi font-medium text-black">
              <span>${{ priceRange[0] }}</span>
              <span>${{ priceRange[1] }}</span>
            </div>
          </div>
        </AccordionContent>
      </AccordionPanel>

      <!-- Colors -->
      <AccordionPanel value="1">
        <AccordionHeader class="!bg-transparent !border-0 !px-0 font-bold text-xl font-integral"
          >Colors</AccordionHeader
        >
        <AccordionContent class="!px-0">
          <div class="flex flex-wrap gap-3">
            <button
              v-for="color in colors"
              :key="color.name"
              @click="toggleColor(color.name)"
              class="w-9 h-9 rounded-full flex items-center justify-center border transition-all"
              :class="[
                color.border ? 'border-black/20' : 'border-transparent',
                selectedColor.includes(color.name) ? 'ring-2 ring-offset-1 ring-black/20' : '',
              ]"
              :style="{ backgroundColor: color.value }"
            >
              <svg
                v-if="selectedColor.includes(color.name)"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                :stroke="color.name === 'White' ? 'black' : 'white'"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </button>
          </div>
        </AccordionContent>
      </AccordionPanel>

      <!-- Size -->
      <AccordionPanel value="2">
        <AccordionHeader class="!bg-transparent !border-0 !px-0 font-bold text-xl font-integral"
          >Size</AccordionHeader
        >
        <AccordionContent class="!px-0">
          <div class="flex flex-wrap gap-2">
            <button
              v-for="size in sizes"
              :key="size"
              @click="toggleSize(size)"
              class="px-4 py-2 rounded-full font-satoshi text-sm transition-colors bg-[#F0F0F0] text-black/60 hover:bg-black hover:text-white"
              :class="selectedSize.includes(size) ? '!bg-black !text-white' : ''"
            >
              {{ size }}
            </button>
          </div>
        </AccordionContent>
      </AccordionPanel>

      <!-- Dress Style -->
      <AccordionPanel value="3">
        <AccordionHeader class="!bg-transparent !border-0 !px-0 font-bold text-xl font-integral"
          >Dress Style</AccordionHeader
        >
        <AccordionContent class="!px-0">
          <ul class="space-y-3 text-black/60 font-satoshi">
            <li
              v-for="style in dressStyles"
              :key="style"
              class="flex justify-between items-center cursor-pointer hover:text-black"
            >
              <span>{{ style }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </li>
          </ul>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>

    <Button
      label="Apply Filter"
      class="!w-full !rounded-full !bg-black !text-white !font-satoshi !py-4 !mt-4 !border-0 hover:!bg-black/90"
    />
  </div>
</template>

<style scoped>
/* Scoped styles to ensure we override PrimeVue defaults if needed without using !important everywhere (though used above for speed) */
:deep(.p-accordionheader-toggle-icon) {
  width: 16px;
  height: 16px;
}
</style>
