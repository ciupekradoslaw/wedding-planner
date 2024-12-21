<script setup lang="ts">
const { t } = useI18n()

const targetDate = new Date('2026-09-12T15:00:00')

const isClient = ref(false)

onMounted(() => (isClient.value = true))

const secondsToDisplay = (sec: number | undefined) => {
  if (!sec) return ''
  if (sec === 1) return t('time.secondsEqualsOne')

  return sec < 5 ? t('time.secondsLessThanFive') : t('time.seconds')
}

const hoursToDisplay = (hour: number) => {
  if (hour === 0) return t('time.hours')
  if (hour === 1) return t('time.hoursEqualsOne')

  return hour < 5 ? t('time.hoursLessThanFive') : t('time.hours')
}
const minutesToDisplay = (minutes: number) => {
  if (minutes === 0) return t('time.minutes')
  if (minutes === 1) return t('time.minutesEqualsOne')
  return minutes < 5 ? t('time.minutesLessThanFive') : t('time.minutes')
}

const daysToDisplay = (days: number) => (days === 1 ? t('time.daysEqualsOne') : t('time.days'))
const yearsToDisplay = (years: number) => (years === 0 ? '' : t('time.years'))

const monthsToDisplay = (months: number) => {
  if (months === 0) return t('time.months')
  if (months === 1) return t('time.monthsEqualsOne')

  return months < 5 ? t('time.monthsLessThanFive') : t('time.months')
}
</script>
<template>
  <div class="flex min-h-full w-full flex-col items-center justify-start p-10">
    <span class="mb-10 text-5xl text-primary">{{ t('home.title') }}</span>

    <span class="text-2xl">Do wesela pozostało:</span>
    <span
      v-if="isClient"
      class="text-2xl"
    >
      <DateCountdown
        v-slot="{ years, months, days, hours, minutes, seconds }"
        :target-date="targetDate"
      >
        {{ years === 0 ? '' : years }} {{ yearsToDisplay(years) }} {{ months }}
        {{ monthsToDisplay(0) }} {{ days }} {{ daysToDisplay(days) }} {{ hours }}
        {{ hoursToDisplay(hours) }} {{ minutes }} {{ minutesToDisplay(minutes) }} {{ seconds }}
        {{ secondsToDisplay(seconds) }}
      </DateCountdown>
    </span>
  </div>
</template>

<style scoped></style>
