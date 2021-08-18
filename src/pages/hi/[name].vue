<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps<{ name: string }>()
const router = useRouter()
</script>

<template>
  <div>
    <p>
     Hi {{props.name}}
    </p>

    <div>
      <button class="btn m-3 text-sm mt-8" @click="router.back()">
        Back
      </button>
    </div>
  </div>
</template>
