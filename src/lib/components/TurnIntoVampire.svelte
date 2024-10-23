<script lang="ts">
  import { goto } from "$app/navigation";
  import { HTML } from "@threlte/extras";
  import { CldUploadWidget } from "svelte-cloudinary";
  import { showButtons } from "../../stores/stores";

  const applyVampireEffect = (publicId: string) => {
    const costume = "Vampire";
    const theme = "Gothic";

    const encodeSpaces = (str: string) => str.replace(/ /g, "_");

    const clothes_replace = `e_gen_replace:from_all_clothes;to_${encodeSpaces(costume)}`;

    const bgreplace = `e_gen_background_replace:prompt_an_${encodeSpaces(theme)}_setting_Maintain_the_central_elements_of_the_original_photo_put_lighting_and_surrounding_details_to_match_the_${encodeSpaces(theme)}`;

    // Transformaciones para la cara
    const faceTransformations = [
      "g_face", // Gravedad para la cara
      "e_gen_face_detect", // Detectar la cara
      `e_gen_replace:from_face;to_${encodeSpaces(costume)}_face`, // Reemplazar la cara con apariencia de vampiro
      "e_colorize:0.3", // Aplicar un tono vampírico (ajusta según lo desees)
    ].join(",");

    return `https://res.cloudinary.com/vitalspace/image/upload/${clothes_replace}/${bgreplace}/${publicId}.jpg`;
  };

  const onUpload = (event: any) => {
    console.log("Imagen subida:", event.info.public_id);

    const transformedImageUrl = applyVampireEffect(event.info.public_id);

    $showButtons = true;

    console.log("URL de imagen transformada:", transformedImageUrl);
  };

  const handleOpen = () => {
    $showButtons = false;
  };

  const handleClose = () => {
    $showButtons = true;
  };
</script>

<HTML position={[-5, 1.3, 10]} rotation={[0, 0, 0]} transform scale={0.5}>
  <CldUploadWidget
    onClose={handleClose}
    options={{
      sources: ["local"],
      multiple: false,
      maxFiles: 1,
    }}
    uploadPreset="upload-unsigned-images"
  >
    {#if $showButtons}
      <button
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors"
        on:click={() => {
        }}
      >
        Turn Into Zombie
      </button>
    {/if}
  </CldUploadWidget>
</HTML>
