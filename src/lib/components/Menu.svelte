<script lang="ts">
  import { cameraIndex, cameraPositions } from "../../stores/stores";

  function nextPosition() {
    cameraIndex.update((index) => (index + 1) % cameraPositions.length);
  }

  function prevPosition() {
    cameraIndex.update(
      (index) => (index - 1 + cameraPositions.length) % cameraPositions.length
    );
  }
</script>

<div class="fixed top-10 right-0 mx-auto w-1/5 rounded-2xl py-4 text-center">
  <a href="https://github.com/vitalspace/village-monsters" target="_blank">
    <img class="w-8 h-8" src="./github.svg" alt="" />
  </a>
</div>

<div
  class="fixed bottom-10 left-0 right-0 mx-auto w-1/5 rounded-2xl py-4 text-center bg-[rgba(60,52,52,0.7)] backdrop-blur-[4px] backdrop-saturate-[200%]"
>
  <div class="flex justify-center space-x-4 font-bold text-white">
    <button on:click={prevPosition}> {`<`} Previous</button>
    <button on:click={nextPosition}>Next {`>`} </button>
  </div>
</div>
