<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-white/95 backdrop-blur-sm shadow-sm'
        : 'bg-transparent',
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <a
          href="#"
          class="flex items-center"
          @click.prevent="scrollToTop"
        >
          <img
            src="/PinkNavyLogo.png"
            alt="Navy Octopus"
            :class="[
              'h-8 sm:h-9 w-auto transition-all duration-300',
              !scrolled && 'brightness-0 invert',
            ]"
          />
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            :class="[
              'text-sm font-medium transition-colors',
              scrolled
                ? 'text-slate-600 hover:text-navy-900'
                : 'text-white/80 hover:text-white',
            ]"
          >
            {{ link.label }}
          </a>
          <a
            href="#contact"
            class="bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <!-- Mobile menu button -->
        <button
          class="md:hidden p-2 rounded-lg transition-colors"
          :class="scrolled ? 'text-navy-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'"
          @click="mobileOpen = !mobileOpen"
          aria-label="Toggle menu"
        >
          <svg
            v-if="!mobileOpen"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
            />
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="md:hidden bg-white shadow-lg border-t border-slate-100"
      >
        <div class="px-4 py-4 space-y-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="block px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium transition-colors"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </a>
          <a
            href="#contact"
            class="block px-4 py-3 bg-primary-600 text-white text-center rounded-lg font-semibold mt-3"
            @click="mobileOpen = false"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
