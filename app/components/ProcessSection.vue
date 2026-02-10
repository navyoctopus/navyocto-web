<template>
  <section id="process" class="py-20 lg:py-28 bg-navy-900 relative overflow-hidden">
    <!-- Subtle decorative blobs -->
    <div class="absolute top-1/2 -right-32 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl" />
    <div class="absolute top-1/3 -left-24 w-52 h-52 bg-primary-500/8 rounded-full blur-3xl" />

    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-3">
          How it works
        </h2>
        <p class="text-lg text-slate-400 max-w-xl mx-auto">
          No nonsense. Just a clear path to better results.
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-4 gap-8 md:gap-6 relative">
          <!-- Connecting line (desktop only) -->
          <div
            class="hidden md:block absolute top-10 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-primary-400/40"
          />

          <div
            v-for="(step, i) in steps"
            :key="i"
            class="relative text-center"
          >
            <!-- Step number -->
            <div
              class="relative z-10 w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-primary-400/30 flex items-center justify-center mx-auto mb-5"
            >
              <span class="text-2xl font-bold text-primary-400">{{
                i + 1
              }}</span>
            </div>

            <h3 class="text-lg font-bold text-white mb-2">
              {{ step.title }}
            </h3>
            <p class="text-slate-400 text-sm leading-relaxed max-w-[200px] mx-auto">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Chat',
    description: "We talk through your business and what's not working.",
  },
  {
    title: 'Plan',
    description: 'Clear recommendation, cost, and timeline.',
  },
  {
    title: 'Build',
    description: 'We design and build, keeping things clear along the way.',
  },
  {
    title: 'Launch & Support',
    description: 'Live, tested, and easy to manage with help when you need it.',
  },
]
</script>
