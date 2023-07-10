<script lang="ts">
	export let FILL: String | Number = 0;
	export let wght: String | Number = 400;
	export let opsz: String | Number = 48;
	export let GRAD: String | Number = 0;
	export let size: String | Number = 20;
</script>

<span
	style="
    font-variation-settings: 'FILL' {FILL}, 'wght' {wght}, 'GRAD' {GRAD}, 'opsz' {opsz};
    font-size: {size}px
  "
	class="material-symbols-outlined aspect-square"
>
	<slot />
</span>
