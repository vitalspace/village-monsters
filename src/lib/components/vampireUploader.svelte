<script lang="ts">
  import { T } from "@threlte/core";
  import { HTML, ImageMaterial } from "@threlte/extras";
  import axios from "axios";
  import { DoubleSide } from "three";
  import { cameraIndex } from "../../stores/stores";
  import { uploadMonster } from "../services/monsters.service";

  let selectedFile: File | null = null;
  let uploadStatus = "";
  let originalImageUrl = "";
  let vampireImageUrl = "";
  let isImageReady = false;
  let isImageLoading = false;

  const CLOUDINARY_UPLOAD_PRESET = "vampires-preset";
  const CLOUDINARY_CLOUD_NAME = "vitalspace";

  async function uploadImage() {
    isImageReady = isImageLoading = false;

    if (!selectedFile) {
      uploadStatus = "Por favor, selecciona una imagen primero.";
      return;
    }

    uploadStatus = "Subiendo...";
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    try {
      const { data } = await uploadMonster(formData);
      originalImageUrl = data.secure_url;
      uploadStatus = "Imagen subida exitosamente!";
      applyEffect(data.public_id);
    } catch (error) {
      console.error("Error:", error);
      uploadStatus = "Error al subir la imagen. Por favor, intenta de nuevo.";
    }
  }

  function handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    selectedFile = target.files ? target.files[0] : null;
    if (selectedFile) uploadImage();
  }

  const applyVampireEffect = (publicId: string) => {
    const encodeSpaces = (str: string) => str.replace(/ /g, "_");
    const transformations = [
      `e_gen_replace:from_all_clothes;to_${encodeSpaces("Vampire")}`,
      `e_gen_background_replace:prompt_an_${encodeSpaces("terror underworld vampire castles fire ")}_setting_Maintain_the_central_elements_of_the_original_photo_put_lighting_and_surrounding_details_to_match_the_${encodeSpaces(" Post-Apocalypse terror end of the universe vampires ")}`,
    ].join("/");

    return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformations}/${publicId}`;
  };

  function applyEffect(publicId: string) {
    if (originalImageUrl) {
      vampireImageUrl = applyVampireEffect(publicId);
      loadImage(vampireImageUrl);
    }
  }

  function loadImage(url: string) {
    isImageLoading = true;
    const img = new Image();
    img.src = url;

    img.onload = () => {
      isImageLoading = false;
      isImageReady = true;
      cameraIndex.set(6);
    };

    img.onerror = () => {
      console.error("Error al cargar la imagen");
      isImageLoading = false;
    };
  }

  function triggerFileInput() {
    cameraIndex.set(10);
    const fileInput = document.getElementById(
      "vampire-input"
    ) as HTMLInputElement;
    fileInput?.click();
  }

  async function downloadImage() {
    const urlToDownload = vampireImageUrl || originalImageUrl;
    if (!urlToDownload) {
      alert("No hay imagen disponible para descargar.");
      return;
    }

    try {
      const { data } = await axios.get(urlToDownload, { responseType: "blob" });
      const link = document.createElement("a");
      const objectUrl = URL.createObjectURL(data);
      link.href = objectUrl;
      link.download = "vampire_image.jpg";
      link.click();
      URL.revokeObjectURL(objectUrl);
    } catch (error) {
      console.error("Error al descargar la imagen:", error);
    }
  }
</script>

<HTML position={[-5, 1.3, 10]} rotation={[0, 0, 0]} transform scale={0.5}>
  <div class="container mx-auto p-4">
    <input
      id="vampire-input"
      type="file"
      accept="image/*"
      on:change={handleFileChange}
      class="hidden"
    />

    <button
      on:click={triggerFileInput}
      class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-2 transition-colors"
    >
      Human to Vampire
    </button>

    {#if isImageLoading}
      <p class="text-white">Loading image...</p>
    {/if}
  </div>
</HTML>

<T.Mesh position={[-1.2, 1.3, 10.1]} rotation={[-0.24, 0, 0]} scale={[0.8, 1]}>
  <T.PlaneGeometry />
  <ImageMaterial
    side={DoubleSide}
    radius={0.05}
    transparent
    url={vampireImageUrl || originalImageUrl || ""}
  />
</T.Mesh>

<HTML position={[-1.2, 0.75, 10.2]} scale={0.15} transform>
  {#if isImageReady}
    <button
      on:click={downloadImage}
      class="text-white bg-orange-600 px-2 rounded-md">Download</button
    >
  {/if}
  <button
    on:click={triggerFileInput}
    class="text-white bg-purple-600 px-2 rounded-md">Upload new</button
  >
</HTML>
