<template>
  <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800"
  >
    <!-- Decorative background blobs -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary-500/8 rounded-full blur-3xl"
      />
      <div
        class="absolute bottom-1/3 -right-32 w-[400px] h-[400px] bg-primary-600/8 rounded-full blur-3xl"
      />
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-400/5 rounded-full blur-3xl"
      />
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-32">
      <h1
        class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
      >
        Grow Your Business
        <span class="text-accent-400">Online</span>
      </h1>

      <p class="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-3">
        Digital tools for small Irish businesses that want more customers.
      </p>

      <p class="text-base sm:text-lg text-slate-400 max-w-xl mx-auto mb-12">
        From simple websites to custom tools, built only when they make sense.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all shadow-lg shadow-primary-600/25 hover:shadow-primary-500/30 hover:-translate-y-0.5"
        >
          Get My Free Quote
          <svg
            class="w-4 h-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </NuxtLink>

        <NuxtLink
          to="/work"
          class="inline-flex items-center justify-center border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all hover:-translate-y-0.5"
        >
          See Recent Work
        </NuxtLink>
      </div>

      <p class="text-sm text-slate-500 max-w-md mx-auto">
        No jargon. No upselling. Just websites and tools that actually work.
      </p>
    </div>

    <!-- Bottom wave -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full block"
        preserveAspectRatio="none"
      >
        <path
          d="M0 80V50C180 20 360 10 540 25C720 40 900 70 1080 65C1260 60 1380 30 1440 20V80H0Z"
          fill="#f0f0f7"
        />
      </svg>
    </div>
  </section>
</template>
