<script lang="ts">
  //   import Group from "three";
  import { T, forwardEventHandlers } from "@threlte/core";
  import { HTML } from "@threlte/extras";
  import { showButtons } from "../../stores/stores";
</script>

<HTML position={[-5, 1.3, 10]} rotation={[0, 0, 0]} transform scale={0.5}>
  {#if $showButtons}
    <button class="button">Turn Into Zombie</button>
  {/if}
</HTML>

<style>
  .button {
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
</style>
