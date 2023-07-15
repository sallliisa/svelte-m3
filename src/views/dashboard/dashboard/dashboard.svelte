<script>
  import Button from "@/lib/components/base/Button.svelte"
  import Card from "@/lib/components/base/Card.svelte"
  import Popover from "@/lib/components/base/Popover.svelte"
  import Select from "@/lib/components/input/Select.svelte"
  import TextInput from "@/lib/components/input/TextInput.svelte"
  let test = ''

  let fieldErrors = {
    gamer: false
  }
</script>

<div>
  <TextInput label="Harga Gamer" bind:modelValue={test} errorMessage="Jumlah karakter harus lebih dari 5!" bind:error={fieldErrors.gamer} validator={(value) => value.length > 5}/>
  <Select allowMulti searchable placeholder="Tidak ada" label="Harga Gamer" items={[{id: 1, name: 'satu'}, {id: 2, name: 'dua'}]} bind:modelValue={test}/>
  <Popover>
    <div slot="trigger"><Button>Gamer</Button></div>
    <Card>gamer</Card>
  </Popover>
</div>