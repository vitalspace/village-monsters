<script lang="ts">
  import { T } from "@threlte/core";
  import { Text3DGeometry } from "@threlte/extras";
</script>

<T.Mesh position={[-2.5, 2.2, 9.43]}>
  <Text3DGeometry
    size={1}
    height={0.1}
    font="Doctor Terror_Regular.json"
    text="Monsters"
  />

  <T.MeshStandardMaterial
    color="pink"
    toneMapped={false}
    metalness={0.1}
    roughness={0.1}
  />
</T.Mesh>


<T.Mesh position={[-.11, 0, 9.43]}>
  <Text3DGeometry
    size={0.1}
    height={0.1}
    font="Doctor Terror_Regular.json"
    text="VitalSpace"
  />

  <T.MeshStandardMaterial
    color="red"
    toneMapped={false}
    metalness={.5}
    roughness={0.2}
  />
</T.Mesh>
