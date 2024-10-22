<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  import { getCldImageUrl } from "svelte-cloudinary";

  let id: string;
  let url: string;

  onMount(() => {
    id = window.location.search.slice(1).split("=")[1];

    if (!id || url == "") {
      goto("/upload");
    }

    url = getCldImageUrl({ src: id });

    console.log({ url });
  });
</script>

{#if id}
  <img src={url} alt="" />
{/if}
