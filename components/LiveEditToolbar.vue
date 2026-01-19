<template>
  <!-- Live Edit Toolbar - Nur für Admins sichtbar -->
  <Teleport to="body">
    <Transition name="slide">
      <div
        v-if="isAdmin"
        class="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999]"
      >
        <div class="bg-slate-900 text-white rounded-full shadow-2xl px-2 py-2 flex items-center gap-2">
          <!-- Edit Mode Toggle -->
          <button
            @click="toggleEditMode"
            :class="[
              'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all',
              isEditMode 
                ? 'bg-blue-500 text-white' 
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            ]"
          >
            <Icon :name="isEditMode ? 'heroicons:pencil-solid' : 'heroicons:pencil'" class="w-4 h-4" />
            <span>{{ isEditMode ? 'Bearbeiten aktiv' : 'Bearbeiten' }}</span>
          </button>

          <!-- Speichern Button (nur im Edit-Mode) -->
          <Transition name="fade">
            <button
              v-if="isEditMode && hasChanges"
              @click="handleSave"
              :disabled="isSaving"
              class="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-green-500 text-white hover:bg-green-600 transition-all disabled:opacity-50"
            >
              <Icon 
                :name="isSaving ? 'heroicons:arrow-path' : 'heroicons:check'" 
                :class="['w-4 h-4', isSaving ? 'animate-spin' : '']" 
              />
              <span>{{ isSaving ? 'Speichert...' : `Speichern (${changeCount})` }}</span>
            </button>
          </Transition>

          <!-- Abbrechen Button (nur im Edit-Mode) -->
          <Transition name="fade">
            <button
              v-if="isEditMode"
              @click="cancelEdit"
              class="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-slate-800 text-slate-300 hover:bg-red-500 hover:text-white transition-all"
            >
              <Icon name="heroicons:x-mark" class="w-4 h-4" />
              <span>Abbrechen</span>
            </button>
          </Transition>

          <!-- Trenner -->
          <div class="w-px h-6 bg-slate-700 mx-1"></div>

          <!-- Admin Dashboard Link -->
          <NuxtLink
            to="/admin"
            class="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all"
          >
            <Icon name="heroicons:chart-bar" class="w-4 h-4" />
            <span>Dashboard</span>
          </NuxtLink>

          <!-- Logout -->
          <button
            @click="handleLogout"
            class="flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 text-slate-400 hover:bg-red-500 hover:text-white transition-all"
            title="Abmelden"
          >
            <Icon name="heroicons:arrow-right-on-rectangle" class="w-4 h-4" />
          </button>
        </div>

        <!-- Hinweis wenn Edit-Mode aktiv -->
        <Transition name="fade">
          <div
            v-if="isEditMode"
            class="mt-3 text-center text-sm text-slate-400 bg-slate-900/80 rounded-lg px-4 py-2"
          >
            <Icon name="heroicons:information-circle" class="w-4 h-4 inline mr-1" />
            Klicken Sie auf Texte um sie zu bearbeiten
          </div>
        </Transition>
      </div>
    </Transition>

    <!-- Toast Notification -->
    <Transition name="toast">
      <div
        v-if="toast.show"
        :class="[
          'fixed top-6 right-6 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 z-[10000]',
          toast.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
        ]"
      >
        <Icon
          :name="toast.type === 'success' ? 'heroicons:check-circle' : 'heroicons:x-circle'"
          class="w-5 h-5"
        />
        <span>{{ toast.message }}</span>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const router = useRouter()
const { isEditMode, isAdmin, hasChanges, isSaving, toggleEditMode, saveAllChanges, checkAdminStatus, pendingChanges } = useLiveEdit()

const changeCount = computed(() => pendingChanges.value.size)

const toast = ref({
  show: false,
  message: '',
  type: 'success' as 'success' | 'error'
})

function showToast(message: string, type: 'success' | 'error' = 'success') {
  toast.value = { show: true, message, type }
  setTimeout(() => {
    toast.value.show = false
  }, 3000)
}

async function handleSave() {
  const success = await saveAllChanges()
  if (success) {
    showToast('Änderungen gespeichert!', 'success')
  } else {
    showToast('Fehler beim Speichern', 'error')
  }
}

function cancelEdit() {
  if (hasChanges.value) {
    if (!confirm('Ungespeicherte Änderungen werden verworfen. Fortfahren?')) {
      return
    }
  }
  toggleEditMode()
}

async function handleLogout() {
  try {
    await $fetch('/api/admin/logout', { method: 'POST' })
    window.location.reload()
  } catch (e) {
    console.error('Logout failed:', e)
  }
}

// Admin-Status prüfen beim Laden
onMounted(() => {
  checkAdminStatus()
})

// Auch bei Route-Wechsel prüfen
const route = useRoute()
watch(() => route.path, () => {
  checkAdminStatus()
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-50%) translateY(100px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>
