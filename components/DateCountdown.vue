<script setup lang="ts">
import { intervalToDuration } from 'date-fns'

const props = defineProps<{
  targetDate: Date
}>()

const now = ref(new Date())

const timeLeft = computed(() => {
  if (now.value >= props.targetDate)
    return {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }

  return intervalToDuration({
    start: now.value,
    end: props.targetDate,
  })
})

onMounted(() => {
  setInterval(() => {
    now.value = new Date()
  }, 1000)
})
</script>

<template>
  <div>
    <slot
      :years="timeLeft.years"
      :months="timeLeft.months"
      :days="timeLeft.days"
      :hours="timeLeft.hours"
      :minutes="timeLeft.minutes"
      :seconds="timeLeft.seconds"
    />
  </div>
</template>

<style scoped></style>
