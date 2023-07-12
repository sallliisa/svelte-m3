<script lang="ts">
  import { onMount } from "svelte";
  import {router} from '@/lib/app/router'

  onMount(() => {
    router.push('dashboard')
  })
</script>