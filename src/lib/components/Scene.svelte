<script lang="ts">
  import { T } from "@threlte/core";
  import {
    Stars
  } from "@threlte/extras";

  import Text3D from "./Text.svelte";
  import Cabana from "./Farm.svelte";
  import VampireUploader from "./vampireUploader.svelte";
  import ZombieUploader from "./zombieUploader.svelte";

  import Lights from "./Lights.svelte";
  import Views from "./Views.svelte";


  let objectRef: any;

  // const onObjectChange = () => {
  //   console.log({
  //     x: objectRef.parent.position.x,
  //     y: objectRef.parent.position.y,
  //     z: objectRef.parent.position.z,
  //   });
  // };

  // let cameraRef: any;

  // let cameraControls: any;
  // let cameraPos = [5.2519522732012645, 1.2875072986069294, 9.669494303125285];
  // let cameraRot = [0, 0, 0];
</script>


<!-- <T.PerspectiveCamera makeDefault position={[10, 10, 25]} fov={50}>
  <CameraControls
    on:create={({ ref }) => {
      cameraControls = ref;
    }}
  />
</T.PerspectiveCamera> -->


<T.AmbientLight intensity={0.5} />

<!-- <TransformControls object={objectRef} on:change={onObjectChange}>
  <T.PointLight
    color="lightorange"
    intensity={500}
    position={[0, 0, 0]}
    bind:ref={objectRef}
  />
</TransformControls> -->

<Views />
<Text3D />
<Stars />
<Cabana />
<ZombieUploader />
<VampireUploader />
<Lights />

