<script lang="ts">
  import { T } from "@threlte/core";
  import { Text3DGeometry } from "@threlte/extras";
</script>

<T.Mesh position.x={-1} position.y={.5}>
  <Text3DGeometry
    size={0.2}
    height={0.1}
    font="Doctor Terror_Regular.json"
    text="Vital"
  />

  <T.MeshStandardMaterial
    color="red"
    toneMapped={false}
    metalness={1.0}
    roughness={0.1}
  />
</T.Mesh>
