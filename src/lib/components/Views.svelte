<script lang="ts">
  import { T } from "@threlte/core";
  import { HTML, interactivity } from "@threlte/extras";
  import { onMount } from "svelte";
  import { spring } from "svelte/motion";
  import {
    activeButton,
    cameraIndex,
    cameraPositions,
  } from "../../stores/stores";
  import Dialogs from "./Dialogs.svelte";
  //@ts-ignore
  import CameraControls from "./camera/cameraControls.svelte";

  let cameraControls: any;

  interactivity();
  const scaleZombies = spring(0.5);
  const scaleVampire = spring(0.5);
  const scaleBuho = spring(0.5);
  const scaleTower = spring(0.5);
  const scalePrincess = spring(0.5);

  function changeCameraPosition(
    x: number,
    y: number,
    z: number,
    rx: number,
    ry: number,
    rz: number
  ) {
    cameraControls.setLookAt(x, y, z, rx, ry, rz, true);
  }

  onMount(() => {
    cameraIndex.subscribe((index) => {
      const position = cameraPositions[index];
      if (position) {
        changeCameraPosition(
          position[0],
          position[1],
          position[2], // z
          position[3], // rx
          position[4], // ry
          position[5] // rz
        );
      }
      $activeButton = index;
    });
  });
</script>

<Dialogs />

<T.PerspectiveCamera makeDefault position={[10, 10, 25]} fov={50}>
  <CameraControls
    on:create={({ ref }) => {
      cameraControls = ref;
    }}
  />
</T.PerspectiveCamera>

<!-- zombies -->
<HTML
  position={[3.5239771996644236, 0.3320537693927156, 10.801296074998774]}
  rotation={[0, 0, 0]}
  transform
  scale={$scaleZombies}
>
  <button
    on:pointerenter={() => scaleZombies.set(1)}
    on:pointerleave={() => scaleZombies.set(0.5)}
    on:click={() => {
      changeCameraPosition(2, 2, 18, 3.5, 0.3, 10.8);
      $activeButton = 1; // Activar mensaje para botón 3
    }}
    class="text-white bg-black rounded-full px-3 py-1 border border-gray-500 opacity-90 hover:bg-[#f18832] hover:border-white transition-colors"
  >
    1
  </button>
</HTML>

<!-- Vampires -->
<HTML
  position={[-4.626192122174364, 0.5386041548829397, 9.992964524960543]}
  rotation={[0, 0, 0]}
  transform
  scale={$scaleVampire}
>
  <button
    on:pointerenter={() => scaleVampire.set(1)}
    on:pointerleave={() => scaleVampire.set(0.5)}
    on:click={() => {
      changeCameraPosition(-6, 2, 18, -4.6, 0.5, 10);
      $activeButton = 2; // Activar mensaje para botón 3
    }}
    class="text-white bg-black rounded-full px-3 py-1 border border-gray-500 opacity-90 hover:bg-[#f18832] hover:border-white transition-colors"
  >
    2
  </button>
</HTML>

<!-- Buho -->
<HTML
  scale={$scaleBuho}
  position={[2.8, 4.5, 2.4]}
  rotation={[0, 0, 0]}
  transform
>
  <button
    on:pointerenter={() => scaleBuho.set(1)}
    on:pointerleave={() => scaleBuho.set(0.5)}
    on:click={() => {
      changeCameraPosition(4, 4.5, 8, 3.7, 5, 0);
      $activeButton = 3; // Activar mensaje para botón 3
    }}
    class="text-white bg-black rounded-full px-3 py-1 border border-gray-500 opacity-90 hover:bg-[#f18832] hover:border-white transition-colors"
  >
    3
  </button>
</HTML>

<!-- Quimicos -->
<HTML
  position={[-5.2, 0.8, -1]}
  rotation={[0, 0, 0]}
  transform
  scale={$scaleTower}
>
  <button
    on:pointerenter={() => scaleTower.set(1)}
    on:pointerleave={() => scaleTower.set(0.5)}
    on:click={() => {
      changeCameraPosition(-5, 5, 7, -3, 0.8, -1);
      $activeButton = 4; // Activar mensaje para botón 4
    }}
    class="text-white bg-black rounded-full px-3 py-1 border border-gray-500 opacity-90 hover:bg-[#f18832] hover:border-white transition-colors"
  >
    4
  </button>
</HTML>

<!-- Blancanieves -->
<HTML
  position={[-3.260912666304508, 4.41419404000283, 0.2]}
  rotation={[0, 0, 0]}
  transform
  scale={$scalePrincess}
>
  <button
    on:pointerenter={() => scalePrincess.set(1)}
    on:pointerleave={() => scalePrincess.set(0.5)}
    on:click={() => {
      changeCameraPosition(-2, 4.5, 4, -3.2, 4.5, 0.2);
      $activeButton = 5; // Activar mensaje para botón 5
    }}
    class="text-white bg-black rounded-full px-3 py-1 border border-gray-500 opacity-90 hover:bg-[#f18832] hover:border-white transition-colors"
  >
    5
  </button>
</HTML>
