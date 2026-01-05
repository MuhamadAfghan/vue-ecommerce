<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleLogin = () => {
  // Placeholder for login logic
  console.log('Login attempt:', email.value)
}
</script>

<template>
  <div class="container mx-auto px-4 py-16 md:py-24 flex justify-center items-center min-h-[60vh]">
    <div
      class="w-full max-w-md bg-white border border-black/10 rounded-[20px] p-6 md:p-10 shadow-sm"
    >
      <h1 class="font-integral font-black text-3xl text-center uppercase mb-8">Log In</h1>

      <form @submit.prevent="handleLogin" class="flex flex-col gap-4">
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

        <div class="space-y-2">
          <label for="password" class="font-satoshi font-medium text-black/60 text-sm"
            >Password</label
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
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <input
              id="password"
              v-model="password"
              type="password"
              placeholder="Enter your password"
              class="w-full bg-[#F0F0F0] rounded-full py-3 pl-12 pr-4 font-satoshi outline-none placeholder:text-black/40 focus:ring-1 focus:ring-black/20 transition-all"
              required
            />
          </div>
        </div>

        <div class="flex justify-end">
          <router-link
            to="/forgot-password"
            class="font-satoshi text-sm text-black/60 hover:text-black"
            >Forgot Password?</router-link
          >
        </div>

        <button
          type="submit"
          class="bg-black text-white rounded-full py-3.5 font-satoshi font-medium hover:bg-black/90 transition-opacity mt-2"
        >
          Sign In
        </button>
      </form>

      <div class="mt-6 text-center font-satoshi text-sm text-black/60">
        Don't have an account?
        <router-link to="/register" class="text-black font-bold hover:underline"
          >Sign Up</router-link
        >
      </div>
    </div>
  </div>
</template>
