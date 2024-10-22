<script lang="ts">
  import { goto } from "$app/navigation";
  import { T, forwardEventHandlers } from "@threlte/core";
  import { HTML } from "@threlte/extras";
  import { CldUploadWidget } from "svelte-cloudinary";

  import { showButtons } from "../../stores/stores";

  // Estado simple para controlar la visibilidad del botón

  const some = () => {
    console.log("Turn Into Zombie");
    alert("Turn Into Zombie");
  };

  const onUpload = (event: any) => {
    //@ts-ignore
    console.log(event.info);
    console.log(event.info.public_id);
    // goto(`/image?id=${event.info.public_id}`);
    // Mostrar el botón después de una subida exitosa
    $showButtons = true;
  };

  // Manejador para cuando se abre el widget
  const handleOpen = () => {
    $showButtons = false;
  };

  // Manejador para cuando se cierra el widget sin subir
  const handleClose = () => {
    $showButtons = true;
  };
</script>

<HTML position={[5, 1.3, 10]} rotation={[0, 0, 0]} transform scale={0.5}>
  <CldUploadWidget
    {onUpload}
    onClose={handleClose}
    options={{
      sources: ["local"],
      multiple: false,
      maxFiles: 1,
    }}
    uploadPreset="upload-unsigned-images"
    let:open
    let:isLoading
  >
    {#if $showButtons}
      <button
        on:click={() => {
          handleOpen();
          open();
        }}
        disabled={isLoading}
      >
        Turn Into Zombie
      </button>
    {/if}
  </CldUploadWidget>
</HTML>
