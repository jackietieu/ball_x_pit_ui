<script>
  const { children, tooltip, text, delay = 300 } = $props();

  let showTooltip = $state(false);
  let timeoutId = $state(null);

  function handleMouseEnter() {
    timeoutId = setTimeout(() => {
      showTooltip = true;
    }, delay);
  }

  function handleMouseLeave() {
    if (timeoutId) clearTimeout(timeoutId);
    showTooltip = false;
  }
</script>

<div class="relative inline-block">
  <div
    role="button"
    tabindex="0"
    onmouseenter={handleMouseEnter}
    onmouseleave={handleMouseLeave}
  >
    {@render children()}
  </div>

  {#if showTooltip && (text || tooltip)}
    <div
      role="tooltip"
      class="absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded shadow-lg bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-64 break-words"
    >
      {#if tooltip}
        {@render tooltip()}
      {:else}
        {text}
      {/if}
      <div
        class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"
      ></div>
    </div>
  {/if}
</div>
