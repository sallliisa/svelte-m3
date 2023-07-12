<script lang="ts">
  import Logo from '@/assets/corporate/common/Logo.svelte';
  import loginBackground from '@/assets/corporate/static/login-background.svg'
  import Card from '@/lib/components/base/Card.svelte';
</script>

<div class="flex h-full max-h-screen min-h-screen w-full items-center justify-between" style="background: linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)),url({loginBackground})">
  <div class="flex w-full flex-row items-center justify-center gap-4">
    <Logo strict color="white" class="w-40" />
  </div>
  <div class="h-full w-full max-w-3xl p-32">
    <Card class="items-center justify-center gap-8 py-24">
      <slot/>
    </Card>
  </div>
</div>