<script lang="ts">
  import '../app.css';

  let { children } = $props();
</script>

<div class="app-bg min-h-screen px-4 sm:px-6 lg:px-8 overflow-y-auto">
  {@render children()}
</div>
