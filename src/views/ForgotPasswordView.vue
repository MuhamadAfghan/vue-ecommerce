<script setup>
import { ref } from 'vue'

const email = ref('')

const handleReset = () => {
  // Placeholder for reset password logic
  console.log('Reset password for:', email.value)
}
</script>

<template>
  <div class="container mx-auto px-4 py-16 md:py-24 flex justify-center items-center min-h-[60vh]">
    <div
      class="w-full max-w-md bg-white border border-black/10 rounded-[20px] p-6 md:p-10 shadow-sm"
    >
      <h1 class="font-integral font-black text-2xl md:text-3xl text-center uppercase mb-4">
        Forgot Password
      </h1>
      <p class="text-center font-satoshi text-black/60 text-sm mb-8">
        Enter your email address and we'll send you a link to reset your password.
      </p>

      <form @submit.prevent="handleReset" class="flex flex-col gap-6">
        <div class="space-y-2">
          <label for="email" class="font-satoshi font-medium text-black/60 text-sm"
            >Email Address</label
          >
          <div class="relative">
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
              class="absolute left-4 top-1/2 -translate-y-1/2 text-black/40"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="Enter your email"
              class="w-full bg-[#F0F0F0] rounded-full py-3 pl-12 pr-4 font-satoshi outline-none placeholder:text-black/40 focus:ring-1 focus:ring-black/20 transition-all"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          class="bg-black text-white rounded-full py-3.5 font-satoshi font-medium hover:bg-black/90 transition-opacity"
        >
          Send Reset Link
        </button>
      </form>

      <div class="mt-6 text-center font-satoshi text-sm">
        <router-link
          to="/login"
          class="text-black font-bold hover:underline flex items-center justify-center gap-2"
        >
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
            <path d="m19 12-7-7-7 7" />
            <path d="M12 19V5" />
          </svg>
          <!-- Actually back arrow might be better -->
          Back to Login
        </router-link>
      </div>
    </div>
  </div>
</template>
