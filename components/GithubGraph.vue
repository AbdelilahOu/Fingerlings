<script setup lang="ts">
import { UTCDate } from '@date-fns/utc'
import { eachDayOfInterval, format, getDay } from 'date-fns'
import { computed } from 'vue'

interface ContributionData {
  cal: {
    [key: string]: {
      github: number
    }
  }
}

interface DayData {
  date: Date
  contributions: number
}

interface Props {
  data: ContributionData
}

const props = defineProps<Props>()

const today = new Date()
const dates = eachDayOfInterval({
  start: new UTCDate(`${today.getFullYear()}-01-01T00:00:00.000Z`),
  end: new UTCDate(`${today.getFullYear()}-12-31T00:00:00.000Z`),
})

const contributionLevels = [0, 1, 2, 3, 4]
const monthLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const weeks = computed(() => {
  const weeksArray: DayData[][] = []
  let currentWeek: DayData[] = []

  dates.forEach((date, index) => {
    if (index === 0 || getDay(date) === 0) {
      if (currentWeek.length > 0) {
        weeksArray.push(currentWeek)
      }
      currentWeek = []
    }

    const dateIdx = date.toISOString().split('T')[0]
    const contributions = props.data.cal[dateIdx]?.github ?? 0

    currentWeek.push({
      date,
      contributions: date > today ? -1 : contributions,
    })
  })

  if (currentWeek.length > 0) {
    weeksArray.push(currentWeek)
  }

  return weeksArray
})

function getTileColor(contributions: number): string {
  if (contributions === -1)
    return 'bg-gray-800'
  if (contributions === 0)
    return 'bg-gray-800'
  if (contributions <= 2)
    return 'bg-emerald-900'
  if (contributions <= 4)
    return 'bg-emerald-700'
  if (contributions <= 6)
    return 'bg-emerald-500'
  return 'bg-emerald-300'
}

function getColorClass(level: number): string {
  switch (level) {
    case 0:
      return 'bg-gray-800'
    case 1:
      return 'bg-emerald-900'
    case 2:
      return 'bg-emerald-700'
    case 3:
      return 'bg-emerald-500'
    case 4:
      return 'bg-emerald-300'
    default:
      return 'bg-gray-800'
  }
}

function getTooltip(day: DayData): string {
  if (day.contributions === -1) {
    return format(day.date, 'MMM d, yyyy')
  }
  return `${format(day.date, 'MMM d, yyyy')}: ${
    day.contributions
  } contributions`
}
</script>

<template>
  <div class="w-full max-w-screen-md">
    <div class="flex overflow-hidden max-w-screen-md">
      <div class="w-10 pr-2 pt-5">
        <div class="h-5" />
        <div class="h-5 text-xs text-gray-400 text-center leading-6">
          Mon
        </div>
        <div class="h-5" />
        <div class="h-5 text-xs text-gray-400 text-center leading-6">
          Wed
        </div>
        <div class="h-5" />
        <div class="h-5 text-xs text-gray-400 text-center leading-6">
          Fri
        </div>
      </div>
      <div class="flex w-full overflow-x-auto scrollbar-hide">
        <div class="relative flex gap-1 mt-5">
          <div
            class="absolute flex w-full justify-around gap-1 text-gray-400 -mt-5"
          >
            <div v-for="month in monthLabels" :key="month" class="text-xs">
              {{ month }}
            </div>
          </div>
          <div
            v-for="(week, weekIndex) in weeks"
            :key="weekIndex"
            class="w-4"
            :class="{ 'mt-auto': weekIndex === 0 }"
          >
            <div
              v-for="(day, dayIndex) in week"
              :key="dayIndex"
              class="h-4 w-4 my-1" :class="[getTileColor(day.contributions)]"
              :title="getTooltip(day)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end mt-2 gap-2 text-xs text-gray-400">
      <div class="flex items-center">
        <span class="mr-1">Less</span>
        <div class="flex">
          <div
            v-for="level in contributionLevels"
            :key="level"
            class="h-4 w-4 mx-0.5" :class="[getColorClass(level)]"
          />
        </div>
        <span class="ml-1">More</span>
      </div>
    </div>
  </div>
</template>
