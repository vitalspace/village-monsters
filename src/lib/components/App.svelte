<script lang="ts">
  import { Canvas } from "@threlte/core";
  import { useProgress } from "@threlte/extras";
  import { tweened } from "svelte/motion";
  import { fade } from "svelte/transition";
  import Scene from "./Scene.svelte";

  const { progress } = useProgress();
  let showCanvas = false;

  const tweenedProgress = tweened($progress, {
    duration: 800,
  });

  $: tweenedProgress.set($progress);

  $: {
    if ($tweenedProgress === 1) {
      showCanvas = true;
    }
  }
</script>

{#if $tweenedProgress < 1 && !showCanvas}
  <div
    transition:fade|local={{
      duration: 200,
    }}
    class="absolute top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center"
  >
    <div class="grid gap-y-4 text-center">
      <div>
        <h1 class="font-doctor-terror text-9xl">Monster Village</h1>
      </div>

      <div class="w-full grid gap-4">
        <p class="font-doctor-terror text-xl">Loading</p>
        <div class="w-full border h-3">
          <div
            class="h-full bg-black w-full"
            style="width: {$tweenedProgress * 100}%"
          />
        </div>
      </div>
    </div>
  </div>
{/if}

<div class="h-screen" class:hidden={!showCanvas}>
  <Canvas>
    <Scene />
  </Canvas>
</div>
