<template>
  <section id="work" class="py-20 lg:py-28 bg-navy-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-navy-900 mb-3">
          Recent work
        </h2>
        <p class="text-lg text-slate-500 max-w-xl mx-auto mb-1">
          A selection of projects for local businesses.
        </p>
        <p class="text-base text-slate-400">
          Each one focused on clarity, usability, and real results.
        </p>
      </div>

      <!-- PostItLocal -->
      <div
        class="mb-16 lg:mb-24 bg-white rounded-3xl p-8 sm:p-10 lg:p-14 border border-navy-100 shadow-sm"
      >
        <div class="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <h3 class="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
              PostItLocal
            </h3>
            <p class="text-slate-600 leading-relaxed mb-6 text-lg">
              A community platform helping local businesses and organisations
              share jobs, events, and courses.
            </p>

            <ul class="space-y-3 mb-8">
              <li
                v-for="(feature, i) in postitFeatures"
                :key="i"
                class="flex items-center gap-3"
              >
                <span
                  class="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0"
                />
                <span class="text-slate-700">{{ feature }}</span>
              </li>
            </ul>

            <div class="pt-6 border-t border-slate-200">
              <p class="text-sm text-slate-500 mb-3">
                Developed by Navy Octopus
              </p>
              <div class="flex flex-wrap gap-3">
                <a
                  href="https://www.postitlocal.ie"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                  www.postitlocal.ie
                </a>
                <span class="text-slate-300">|</span>
                <a
                  href="https://apps.apple.com/us/app/postitlocal/id6752720714"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                >
                  App Store
                </a>
                <span class="text-slate-300">|</span>
                <a
                  href="https://play.google.com/store/apps/details?id=ie.navyoctopus.postitlocal"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Play Store
                </a>
              </div>
            </div>
          </div>

          <!-- Mockup -->
          <div class="relative pb-8">
            <img
              src="/pil_desktop.png"
              alt="PostItLocal Desktop"
              class="w-full rounded-lg"
            />
            <img
              src="/pil_mobile.png"
              alt="PostItLocal Mobile"
              class="absolute -bottom-4 -right-2 sm:right-4 w-[100px] sm:w-[130px] drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      <!-- Brí Solar -->
      <div
        class="bg-white rounded-3xl p-8 sm:p-10 lg:p-14 border border-navy-100 shadow-sm"
      >
        <div class="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <!-- Mockup first on desktop for alternating layout -->
          <div class="relative order-2 lg:order-1 pb-8">
            <img
              src="/bri_desktop.png"
              alt="Brí Solar Desktop"
              class="w-full rounded-lg"
            />
            <img
              src="/bri_mobile.png"
              alt="Brí Solar Mobile"
              class="absolute -bottom-4 -left-2 sm:left-4 w-[100px] sm:w-[130px] drop-shadow-2xl"
            />
          </div>

          <div class="order-1 lg:order-2">
            <h3 class="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
              Br&iacute; Solar
            </h3>
            <p class="text-slate-600 leading-relaxed mb-6 text-lg">
              A local Irish solar company website focused on clarity and
              enquiries.
            </p>

            <ul class="space-y-3 mb-8">
              <li
                v-for="(feature, i) in briFeatures"
                :key="i"
                class="flex items-center gap-3"
              >
                <span
                  class="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0"
                />
                <span class="text-slate-700">{{ feature }}</span>
              </li>
            </ul>

            <div class="pt-6 border-t border-slate-200">
              <p class="text-sm text-slate-500 mb-3">
                Developed by Navy Octopus
              </p>
              <a
                href="https://www.brisolar.ie"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                www.brisolar.ie
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const postitFeatures = [
  'Website and mobile app',
  'Real users',
  'Built to grow over time',
]

const briFeatures = [
  'Simple, clear structure',
  'Built for local search',
  'Designed to turn visitors into leads',
]
</script>
