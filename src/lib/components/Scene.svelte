<script lang="ts">
  import { T } from "@threlte/core";
  import {
    OrbitControls,
    TransformControls,
    Grid,
    Stars,
  } from "@threlte/extras";
  import { SheetObject } from "@threlte/theatre";
  import Princess from "./Princes.svelte";

  import Text3D from "./Text.svelte";
  import TextLines from "./TextLines.svelte";

  import Tumba3D from "./Tumba.svelte";
  import Cabana from "./Farm.svelte";
  import TurnIntoZombie from "./TurnIntoZombie.svelte";
  import TurnIntoVampire from "./TurnIntoVampire.svelte";

  let capture: (() => void) | undefined;

  let objectRef: any;

  const onObjectChange = () => {
    console.log({
      x: objectRef.parent.position.x,
      y: objectRef.parent.position.y,
      z: objectRef.parent.position.z,
    });
  };
</script>

<!-- <SheetObject key="Camera" let:Sync>
  <T.PerspectiveCamera makeDefault>
    <Sync position rotation bind:capture />
    <OrbitControls on:change={capture} />
  </T.PerspectiveCamera>
</SheetObject> -->

// calabaza
<T.PointLight
  color="red"
  distance={1}
  intensity={60}
  position={[1.630053234125596, 6.6, 1.0117212713266142]}
/>

//buho
<T.PointLight
  color="lightblue"
  intensity={50}
  distance={0.6}
  position={[3.341960622750322, 4.5, 2.5]}
  decay={0.1}
/>

//hongos
<T.PointLight
  color="green"
  intensity={10}
  distance={1}
  position={[2.8092706730708, 0.5, 9.62126638893455]}
  decay={2.5}
/>

<T.PointLight
  color="yellow"
  intensity={10}
  distance={0.5}
  position={[-2.8800683301477066, 0.5, 9.959214220019135]}
  decay={0.5}
/>

// zombie // zombie luz hongo
<T.PointLight
  color="purple"
  intensity={10}
  distance={1}
  position={[7.461788462932923, 0.8185498030704212, 9.348420025478028]}
  decay={5}
/>

// luz tumba zombie
<T.PointLight
  color="blue"
  intensity={10}
  distance={1}
  position={[6.893057593453487, 0.9552856290134311, 8.447702083997749]}
  decay={5}
/>

// zombie luz hongo
<T.PointLight
  color="cyan"
  intensity={10}
  distance={1}
  position={[6.169667413077238, 0.6027281778639939, 8.001316118250024]}
  decay={0.1}
/>

// luz Vampire hongo 1
<T.PointLight
  color="orange"
  intensity={10}
  distance={1}
  position={[-6.626421368107097, 0.9, 7.145591950391928]}
  decay={0.1}
/>

// luz tumba hongo 2
<T.PointLight
  color="magenta"
  intensity={10}
  distance={1}
  position={[-8.323892353756552, 0.9, 8.85192723846501]}
  decay={0.1}
/>

// luz tumba
<T.PointLight
  color="cyan"
  intensity={10}
  distance={1}
  position={[-7.56623555801335, 1.1914898562343625, 7.8023950751288]}
  decay={5}
/>

// luz cabana
<T.PointLight
  color="red"
  intensity={10}
  distance={1}
  position={[-8.059500276068842, 1.7938468533293084, 7.333426132995324]}
  decay={0.2}
/>

<T.AmbientLight intensity={0.5} />

<TransformControls object={objectRef} on:change={onObjectChange}>
  <T.PointLight
    color="lightorange"
    intensity={500}
    position={[0, 0, 0]}
    bind:ref={objectRef}
  />
</TransformControls>

<TextLines />
<Text3D />
<!-- <Princess /> -->
<Stars />
<Tumba3D />
<Cabana />

<TurnIntoZombie />
<TurnIntoVampire />

<T.PerspectiveCamera makeDefault position={[0, 0, 5]}>
  <OrbitControls autoRotate={false} autoRotateSpeed={2} enableDamping />
</T.PerspectiveCamera>
