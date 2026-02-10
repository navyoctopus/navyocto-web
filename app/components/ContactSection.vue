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

      <form
        class="space-y-5"
        @submit.prevent="handleSubmit"
      >
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
            class="w-full px-4 py-3.5 bg-white/10 border border-white/15 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
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
            class="w-full px-4 py-3.5 bg-white/10 border border-white/15 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
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
            class="w-full px-4 py-3.5 bg-white/10 border border-white/15 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          :disabled="submitted"
          :class="[
            'w-full py-4 rounded-xl font-semibold text-base transition-all',
            submitted
              ? 'bg-emerald-600 text-white cursor-default'
              : 'bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-600/25 hover:shadow-primary-500/30 hover:-translate-y-0.5',
          ]"
        >
          {{ submitted ? 'Thanks! We\'ll be in touch.' : 'Get in Touch' }}
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

const submitted = ref(false)

function handleSubmit() {
  // TODO: Wire up form submission to your backend/email service
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.name = ''
    form.email = ''
    form.message = ''
  }, 3000)
}
</script>
