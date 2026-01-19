<template>
  <component
    :is="tag"
    :class="[
      baseClass,
      isEditMode && isAdmin ? 'editable-content' : ''
    ]"
    :contenteditable="isEditMode && isAdmin"
    @blur="handleBlur"
    @input="handleInput"
    ref="contentRef"
  >
    {{ displayContent }}
  </component>
</template>

<script setup lang="ts">
interface Props {
  /** Eindeutige ID für den Content-Block */
  blockId: string
  /** HTML-Tag für das Element */
  tag?: string
  /** Standard-Inhalt wenn keine Änderungen */
  defaultContent: string
  /** CSS-Klassen */
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'span',
  class: ''
})

const { isEditMode, isAdmin, registerChange, pendingChanges } = useLiveEdit()
const contentRef = ref<HTMLElement | null>(null)
const localContent = ref(props.defaultContent)

const baseClass = computed(() => props.class)

const displayContent = computed(() => {
  // Wenn eine pending Änderung existiert, zeige diese
  if (pendingChanges.value.has(props.blockId)) {
    return pendingChanges.value.get(props.blockId)
  }
  return localContent.value
})

function handleInput(event: Event) {
  const target = event.target as HTMLElement
  const newContent = target.textContent || ''
  registerChange(props.blockId, newContent)
}

function handleBlur(event: FocusEvent) {
  const target = event.target as HTMLElement
  const newContent = target.textContent || ''
  if (newContent !== props.defaultContent) {
    registerChange(props.blockId, newContent)
  }
}

// Sync mit Server-Content wenn verfügbar
watch(() => props.defaultContent, (newVal) => {
  localContent.value = newVal
})
</script>

<style scoped>
.editable-content {
  outline: 2px dashed transparent;
  transition: all 0.2s ease;
  cursor: text;
  min-height: 1em;
}

.editable-content:hover {
  outline-color: rgba(59, 130, 246, 0.5);
  background-color: rgba(59, 130, 246, 0.05);
}

.editable-content:focus {
  outline-color: rgb(59, 130, 246);
  background-color: rgba(59, 130, 246, 0.1);
  outline-style: solid;
}
</style>
