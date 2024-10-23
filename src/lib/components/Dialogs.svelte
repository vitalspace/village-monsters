<script>
  import { T } from "@threlte/core";
  import { HTML } from "@threlte/extras";
  import { activeButton } from "../../stores/stores";
</script>

{#if $activeButton === 1}
  <HTML
    position={[1.8, 0.3320537693927156, 10.801296074998774]}
    rotation={[0, 0, 0]}
    transform
    scale={0.5}
  >
    <article class="bg-black rounded-lg p-4 text-white">
      <div class="flex space-x-2">
        <img class="w-5 h-5" src="./zombie.svg" alt="zombie.svg" />
        <h2>Fresh Meat:</h2>
      </div>
      <p>Zombies lurked, eager to</p>
      <p>devour what was left.</p>
    </article>
  </HTML>
{/if}

{#if $activeButton === 2}
  <HTML position={[-2.53, 0.5, 10]} rotation={[0, 0, 0]} transform scale={0.5}>
    <article class="bg-black rounded-lg p-4 text-white">
      <div class="flex space-x-2">
        <img class="w-5 h-5" src="./vampire.svg" alt="vampire.svg" />
        <h2>New blood:</h2>
      </div>
      <p>The vampires were out at dusk,</p>
      <p>looking for their next feast.</p>
    </article>
  </HTML>
{/if}

{#if $activeButton === 3}
  <HTML position={[5.5, 4.5, 2.4]} rotation={[0, 0, 0]} transform scale={0.5}>
    <article class="bg-black rounded-lg p-4 text-white">
      <div class="flex space-x-2">
        <img class="w-5 h-5" src="./owl.svg" alt="owl.svg" />
        <h2>THE WISE:</h2>
      </div>

      <p>The wise owl offered advice to</p>
      <p>anyone who knew how to listen.</p>
    </article>
  </HTML>
{/if}

{#if $activeButton === 4}
  <HTML position={[-7.2, 1.5, -1]} rotation={[0, 0, 0]} transform scale={0.5}>
    <article class="bg-black rounded-lg p-4 text-white">
      <div class="flex space-x-2">
        <img class="w-5 h-5" src="./witch.svg" alt="witch.svg" />
        <h2>Potions:</h2>
      </div>
      <p>The witch's potions concealed</p>
      <p>dark and dangerous secrets.</p>
    </article>
  </HTML>
{/if}

{#if $activeButton === 5}
  <HTML
    position={[-5, 4.41419404000283, 0.2]}
    rotation={[0, 0, 0]}
    transform
    scale={0.5}
  >
    <article class="bg-black rounded-lg p-4 text-white">
      <div class="flex space-x-2">
        <img class="w-5 h-5" src="./princess.svg" alt="princess.svg" />
        <h2>Tower:</h2>
      </div>
      <p>The princess is not at home.</p>
    </article>
  </HTML>
{/if}
