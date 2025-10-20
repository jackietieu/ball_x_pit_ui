<script>
  const { src, alt } = $props();
</script>

<div class="flex flex-col items-center">
  <img {src} {alt} class="w-full h-full object-contain rounded" />
</div>
