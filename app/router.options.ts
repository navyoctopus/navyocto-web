import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, _from, savedPosition) {
    // Map route paths to section element IDs
    const sectionMap: Record<string, string> = {
      '/about': 'about',
      '/services': 'services',
      '/process': 'process',
      '/work': 'work',
      '/contact': 'contact',
    }

    const sectionId = sectionMap[to.path]

    if (sectionId) {
      return {
        el: `#${sectionId}`,
        behavior: 'smooth',
      }
    }

    // Support hash-based navigation as a fallback
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    if (savedPosition) {
      return savedPosition
    }

    return { top: 0, behavior: 'smooth' }
  },
}
