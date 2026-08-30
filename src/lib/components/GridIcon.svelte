<script lang="ts">
  import { SPRITE_SHEET_URL, SPRITE_COLS, SPRITE_ROWS } from '../assetMap.ts';

  const { sprite, alt }: { sprite: { col: number; row: number }; alt: string } = $props();
</script>

<div
  role="img"
  aria-label={alt}
  class="w-full h-full rounded bg-no-repeat"
  style={`background-image:url(${SPRITE_SHEET_URL});background-size:${SPRITE_COLS * 100}% ${SPRITE_ROWS * 100}%;background-position:${(sprite.col / (SPRITE_COLS - 1)) * 100}% ${(sprite.row / (SPRITE_ROWS - 1)) * 100}%;`}
></div>
