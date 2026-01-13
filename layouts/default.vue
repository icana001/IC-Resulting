<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <TheFooter />
    <CookieConsent ref="cookieConsent" />
  </div>
</template>

<script setup>
const cookieConsent = ref(null)

// Provide method to open cookie settings from anywhere
provide('openCookieSettings', () => {
  cookieConsent.value?.openSettings()
})
</script>
