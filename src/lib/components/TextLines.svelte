<script lang="ts">
  import { T, useTask } from "@threlte/core";

  import { MeshLineGeometry, MeshLineMaterial } from "@threlte/extras";

  import { CatmullRomCurve3, Color, Vector3 } from "three";

  const pointsV = [
    new Vector3(0, 1, 0),
    new Vector3(0.5, 0, 0),
    new Vector3(1, 1, 0),
  ];

  const pointsI = [new Vector3(0.5, 0, 0), new Vector3(0.5, 1, 0)];

  const pointsT = [
    new Vector3(0, 1, 0),
    new Vector3(1, 1, 0),
    new Vector3(0.5, 1, 0),
    new Vector3(0.5, 0, 0),
  ];

  const pointsA = [
    new Vector3(0, 0, 0),
    new Vector3(0.5, 1, 0),
    new Vector3(1, 0, 0),
    new Vector3(0.25, 0.5, 0),
    new Vector3(0.75, 0.5, 0),
  ];

  const pointsL = [
    new Vector3(0, 1, 0),
    new Vector3(0, 0, 0),
    new Vector3(0.6, 0, 0),
  ];

  let width = .1;
  let dashOffset = 0;
  let color = new Color();
  const orange = new Color("#fe3d00");
  const purple = new Color("blueviolet");


  useTask((delta) => {
    // every frame we:
    // increase the dash offset
    dashOffset += delta / 2;
    // transition between two colors
    color.lerpColors(orange, purple, Math.sin(dashOffset * 2) / 2 + 0.5);
    // shrink and grow the line width
    // width = Math.sin(dashOffset * 2) / 5 + 0.1;
  });
</script>

<!-- Letra V -->
<T.Mesh transform position.x={-1.2} position.y={1} scale={0.2}>
  <MeshLineGeometry points={new CatmullRomCurve3(pointsV).getPoints(50)} />
  <MeshLineMaterial
    {width}
    {color}
    dashArray={0.5}
    dashRatio={0.5}
    {dashOffset}
    transparent
    depthTest={false}
  />
</T.Mesh>

<!-- Letra I -->
<T.Mesh position.x={-.9} position.y={1} scale={0.2}>
  <MeshLineGeometry points={new CatmullRomCurve3(pointsI).getPoints(50)} />
  <MeshLineMaterial
    {width}
    {color}
    dashArray={0.5}
    dashRatio={0.5}
    {dashOffset}
    transparent
    depthTest={false}
  />
</T.Mesh>

<!-- Letra T -->
<T.Mesh position.x={-.6 } position.y={1} scale={.2}>
  <MeshLineGeometry points={new CatmullRomCurve3(pointsT).getPoints(50)} />
  <MeshLineMaterial
    {width}
    {color}
    dashArray={0.5}
    dashRatio={0.5}
    {dashOffset}
    transparent
    depthTest={false}
  />
</T.Mesh>

<!-- Letra A -->
<T.Mesh position.x={2} position.y={3} scale={1.5}>
  <MeshLineGeometry points={new CatmullRomCurve3(pointsA).getPoints(50)} />
  <MeshLineMaterial
    {width}
    {color}
    dashArray={0.5}
    dashRatio={0.5}
    {dashOffset}
    transparent
    depthTest={false}
  />
</T.Mesh>

<!-- Letra L -->
<T.Mesh position.x={4} position.y={3} scale={1.5}>
  <MeshLineGeometry points={new CatmullRomCurve3(pointsL).getPoints(50)} />
  <MeshLineMaterial
    {width}
    {color}
    dashArray={0.5}
    dashRatio={0.5}
    {dashOffset}
    transparent
    depthTest={false}
  />
</T.Mesh>
