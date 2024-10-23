<script lang="ts">
  import { goto } from "$app/navigation";
  import { HTML } from "@threlte/extras";
  import { CldUploadWidget } from "svelte-cloudinary";
  import { showButtons } from "../../stores/stores";

  const applyZombieEffect = (publicId: string) => {
    const costume = "Zombie";
    const theme = "Post-Apocalyptic";

    const encodeSpaces = (str: string) => str.replace(/ /g, "_");

    // Transformaciones para la ropa
    const clothes_replace = `e_gen_replace:from_all_clothes;to_${encodeSpaces(costume)}`;

    // Transformaciones para el fondo
    const bgreplace = `e_gen_background_replace:prompt_an_${encodeSpaces(theme)}_setting_Maintain_the_central_elements_of_the_original_photo_put_lighting_and_surrounding_details_to_match_the_${encodeSpaces(theme)}`;

    // Transformaciones para la cara
    const faceTransformations = [
      "g_face", // Gravedad para la cara
      "e_gen_face_detect", // Detectar la cara
      `e_gen_replace:from_face;to_${encodeSpaces(costume)}_face`, // Reemplazar la cara con una apariencia de zombie
    ].join(",");

    // Construir la URL manualmente
    return `https://res.cloudinary.com/vitalspace/image/upload/${clothes_replace}/${bgreplace}/${publicId}.jpg`;
  };

  // Manejador cuando se sube la imagen
  const onUpload = (event: any) => {
    console.log("Imagen subida:", event.info.public_id);

    // Aplicamos el efecto Zombie a la imagen subida
    const transformedImageUrl = applyZombieEffect(event.info.public_id);

    // Mostrar el botón después de la transformación exitosa
    $showButtons = true;

    // Redirigir o mostrar la imagen transformada
    console.log("URL de imagen transformada:", transformedImageUrl);
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
    id="some-widget-id"
    onClose={handleClose}
    options={{
      sources: ["local"],
      multiple: false,
      maxFiles: 1,
    }}
    let:open let:isLoading
    uploadPreset="vampires-preset"
  >
    {#if $showButtons}
      <button
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors"
        on:click={() => open()}}
        disabled={isLoading}
      >
        Turn Into Zombie
      </button>
    {/if}
  </CldUploadWidget>
</HTML>
