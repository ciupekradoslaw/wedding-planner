<script setup lang="ts">
import { NavigationMenu, navigationMenuTriggerStyle } from '~/components/ui/navigation-menu'
import { twMerge } from 'tailwind-merge'

const { t } = useI18n()

const activeClass = computed(() =>
  twMerge('rounded-md border border-primary text-primary', navigationMenuTriggerStyle()),
)

const items = menuItems
</script>

<template>
  <div class="flex !min-h-24 items-center justify-center border-b-2 border-border">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem
          v-for="item in items"
          :key="item.to"
          class="px-5"
        >
          <NuxtLink
            :to="item.to"
            :active-class="activeClass"
            class="text-lg"
          >
            {{ t(item.title) }}
          </NuxtLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
</template>
