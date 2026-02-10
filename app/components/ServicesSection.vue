<template>
  <section id="services" class="py-20 lg:py-28 bg-navy-50 relative overflow-hidden">
    <!-- Subtle decorative blobs -->
    <div class="absolute -top-20 -left-20 w-80 h-80 bg-primary-100/20 rounded-full blur-3xl" />
    <div class="absolute -bottom-20 -right-20 w-72 h-72 bg-accent-100/20 rounded-full blur-3xl" />

    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-14">
        <h2 class="text-3xl sm:text-4xl font-bold text-navy-900 mb-3">
          What we do
        </h2>
        <p class="text-lg text-slate-500 max-w-2xl mx-auto">
          Websites and tools that actually move the needle for small Irish
          businesses.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
        <!-- Websites -->
        <div
          class="group p-8 rounded-2xl bg-white border border-navy-100 border-t-2 border-t-primary-300 hover:shadow-xl hover:border-t-primary-500 transition-all duration-300"
        >
          <div
            class="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-5 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-navy-900 mb-2">Websites</h3>
          <p class="text-slate-600 leading-relaxed">
            Fast, effective sites that explain what you do and get people in
            touch.
          </p>
        </div>

        <!-- Custom Tools & Apps -->
        <div
          class="group p-8 rounded-2xl bg-white border border-navy-100 border-t-2 border-t-primary-300 hover:shadow-xl hover:border-t-primary-500 transition-all duration-300"
        >
          <div
            class="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-5 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.42 15.17l-5.658 5.659a2.25 2.25 0 01-3.182-3.182l5.659-5.658m0 0l2.122-2.122m-2.122 2.122L3.876 6.33a2.25 2.25 0 013.182-3.182l6.532 6.532m4.788-4.788a2.25 2.25 0 013.182 3.182l-5.659 5.659m0 0l-2.122 2.122"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-navy-900 mb-2">
            Custom Tools &amp; Apps
          </h3>
          <p class="text-slate-600 leading-relaxed">
            Booking systems, dashboards, and other custom tools — built when a
            website alone isn't enough.
          </p>
        </div>

        <!-- Improve Existing Sites -->
        <div
          class="group p-8 rounded-2xl bg-white border border-navy-100 border-t-2 border-t-primary-300 hover:shadow-xl hover:border-t-primary-500 transition-all duration-300"
        >
          <div
            class="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-5 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-navy-900 mb-2">
            Improve Existing Sites
          </h3>
          <p class="text-slate-600 leading-relaxed">
            If your site isn't bringing in business, we can fix that.
          </p>
        </div>

        <!-- Advice & Support -->
        <div
          class="group p-8 rounded-2xl bg-white border border-navy-100 border-t-2 border-t-primary-300 hover:shadow-xl hover:border-t-primary-500 transition-all duration-300"
        >
          <div
            class="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-5 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-navy-900 mb-2">
            Advice &amp; Support
          </h3>
          <p class="text-slate-600 leading-relaxed">
            Straight answers. No jargon. No upselling.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
