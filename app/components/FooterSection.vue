<template>
  <footer class="bg-navy-950 border-t border-white/5">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <!-- Brand -->
        <div>
          <div class="mb-4">
            <img
              src="/PinkNavyLogo.png"
              alt="Navy Octopus"
              class="h-9 w-auto brightness-0 invert"
            />
          </div>
          <p class="text-slate-400 text-sm leading-relaxed max-w-xs">
            Digital tools for small Irish businesses that want more customers.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
            Navigation
          </h4>
          <ul class="space-y-2.5">
            <li v-for="link in links" :key="link.href">
              <a
                :href="link.href"
                class="text-slate-400 hover:text-white text-sm transition-colors"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
            Get in Touch
          </h4>
          <p class="text-slate-400 text-sm leading-relaxed mb-4">
            Ready to talk about your project? Drop us a message and we'll get
            back to you.
          </p>
          <a
            href="#contact"
            class="inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors"
          >
            Start a conversation
            <svg
              class="w-3.5 h-3.5"
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
          </a>
        </div>
      </div>

      <div
        class="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p class="text-slate-500 text-sm">
          &copy; {{ currentYear }} Navy Octopus. All rights reserved.
        </p>
        <p class="text-slate-600 text-xs">
          Based in Ireland. Working with businesses everywhere.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#process' },
  { label: 'Recent Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]
</script>
