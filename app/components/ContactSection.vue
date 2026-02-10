<template>
  <section
    id="contact"
    class="py-20 lg:py-28 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 relative overflow-hidden"
  >
    <!-- Decorative background -->
    <div class="absolute inset-0">
      <div
        class="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-3xl"
      />
      <div
        class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary-600/5 rounded-full blur-3xl"
      />
    </div>

    <div class="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-3">
          Let's get to work
        </h2>
        <p class="text-lg text-slate-300 mb-2">
          Tell us what you do and what's not working.
        </p>
        <p class="text-base text-slate-400">
          No obligation, just a straightforward conversation.
        </p>
      </div>

      <!-- Success message -->
      <div
        v-if="submitted"
        class="text-center py-12"
      >
        <div class="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-white mb-2">Thanks! We'll be in touch.</h3>
        <p class="text-slate-400">We usually respond within 24 hours.</p>
      </div>

      <!-- Form -->
      <form
        v-else
        class="space-y-5"
        @submit.prevent="handleSubmit"
      >
        <!-- Error message -->
        <div
          v-if="errorMessage"
          class="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-300 text-sm"
        >
          {{ errorMessage }}
        </div>

        <div>
          <label for="name" class="block text-sm font-medium text-slate-300 mb-2">
            Your name
          </label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Your name"
            required
            :disabled="loading"
            class="w-full px-4 py-3.5 bg-white/10 border border-white/15 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-slate-300 mb-2">
            Email address
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="your.email@example.com"
            required
            :disabled="loading"
            class="w-full px-4 py-3.5 bg-white/10 border border-white/15 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50"
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-slate-300 mb-2">
            Your message
          </label>
          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            placeholder="Tell us about your project..."
            required
            :disabled="loading"
            class="w-full px-4 py-3.5 bg-white/10 border border-white/15 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          :disabled="loading"
          :class="[
            'w-full py-4 rounded-xl font-semibold text-base transition-all flex items-center justify-center gap-2',
            loading
              ? 'bg-primary-600/70 text-white/70 cursor-wait'
              : 'bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-600/25 hover:shadow-primary-500/30 hover:-translate-y-0.5',
          ]"
        >
          <svg
            v-if="loading"
            class="w-5 h-5 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          {{ loading ? 'Sending...' : 'Get in Touch' }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  message: '',
})

const loading = ref(false)
const submitted = ref(false)
const errorMessage = ref('')

async function handleSubmit() {
  loading.value = true
  errorMessage.value = ''

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.name,
        email: form.email,
        message: form.message,
      },
    })

    submitted.value = true
  } catch (error: any) {
    errorMessage.value =
      error?.data?.statusMessage ||
      'Something went wrong. Please try again or email us directly at info@navyoctopus.ie'
  } finally {
    loading.value = false
  }
}
</script>
