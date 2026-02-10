<template>
  <section id="about" class="py-20 lg:py-28 bg-navy-900 relative overflow-hidden">
    <!-- Subtle decorative blobs -->
    <div class="absolute top-10 -right-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
    <div class="absolute bottom-10 -left-20 w-60 h-60 bg-accent-400/10 rounded-full blur-3xl" />

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-14">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-3">
          About Navy Octopus
        </h2>
        <p class="text-lg text-slate-400">
          Digital solutions for local Irish businesses.
        </p>
      </div>

      <div class="max-w-3xl mx-auto">
        <h3
          class="text-2xl sm:text-3xl font-bold text-white mb-10 text-center"
        >
          Build what actually helps.
        </h3>

        <div class="grid sm:grid-cols-2 gap-5 mb-14">
          <div
            v-for="(point, i) in points"
            :key="i"
            :class="[
              'bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 border-t-2 hover:bg-white/10 transition-all',
              i % 2 === 0 ? 'border-t-primary-500 hover:border-t-primary-400' : 'border-t-accent-400 hover:border-t-accent-300',
            ]"
          >
            <div
              :class="[
                'w-10 h-10 rounded-lg flex items-center justify-center mb-4',
                i % 2 === 0 ? 'bg-primary-600/20 text-primary-400' : 'bg-accent-500/20 text-accent-400',
              ]"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                v-html="point.icon"
              />
            </div>
            <p class="text-slate-300 leading-relaxed">{{ point.text }}</p>
          </div>
        </div>

        <div class="text-center space-y-2">
          <p class="text-xl text-slate-500 italic">
            It's not about a website.
          </p>
          <p class="text-2xl sm:text-3xl font-bold text-white">
            It's about <span class="text-primary-500">better results</span> <span class="text-accent-400">online.</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const points = [
  {
    text: 'No flashy extras. No tech jargon. No time wasted.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />',
  },
  {
    text: 'Work directly with the person doing the job. No layers.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />',
  },
  {
    text: "Honest advice. Straight answers. If it won't help, we'll say so.",
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />',
  },
  {
    text: 'You get tools that actually move the needle for your business.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />',
  },
]
</script>
