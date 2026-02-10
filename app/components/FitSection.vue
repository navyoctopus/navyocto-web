<template>
  <section class="py-20 lg:py-28 bg-navy-50">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 text-center">
      <h2 class="text-3xl sm:text-4xl font-bold text-navy-900 mb-3">
        Work with us if...
      </h2>
      <p class="text-lg text-slate-500 mb-14">
        Let's make sure this is a good fit.
      </p>

      <div class="space-y-4 text-left max-w-xl mx-auto">
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="[
            'flex items-start gap-4 p-5 rounded-xl bg-white border border-navy-100 border-l-4 transition-shadow hover:shadow-md',
            index % 2 === 0
              ? 'border-l-primary-400'
              : 'border-l-primary-400',
          ]"
        >
          <div
            :class="[
              'flex-shrink-0 w-6 h-6 mt-0.5 rounded-full flex items-center justify-center',
              index % 2 === 0 ? 'bg-primary-100' : 'bg-primary-100',
            ]"
          >
            <svg
              :class="[
                'w-3.5 h-3.5',
                index % 2 === 0 ? 'text-primary-600' : 'text-primary-600',
              ]"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <p class="text-slate-700 leading-relaxed">{{ item }}</p>
        </div>
      </div>

      <p class="mt-14 text-lg text-slate-600">
        Sound familiar?
        <NuxtLink
          to="/contact"
          class="text-primary-600 font-semibold hover:underline underline-offset-4 decoration-2"
        >
          Let's start a conversation.
        </NuxtLink>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  "Your website isn't pulling its weight.",
  "You're not sure what you actually need (yet).",
  "You've been burned by developers or agencies before.",
  "You want an honest partner, not a sales pitch.",
  "You'd rather work with one person, not a team of strangers.",
]
</script>
