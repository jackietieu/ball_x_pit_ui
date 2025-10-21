<script lang="ts">
import '../app.css';

let { children } = $props();
</script>

<div class="min-h-screen px-4 sm:px-6 lg:px-8 overflow-y-auto" style="background-color: var(--bg-dark);">
  {@render children()}
</div>
