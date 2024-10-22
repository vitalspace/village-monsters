<script lang="ts">
  import { goto } from "$app/navigation";
  import { CldUploadWidget } from "svelte-cloudinary";

  const onUpload = (event: any) => {
    //@ts-ignore
    console.log(event.info);
    console.log(event.info.public_id);
    goto(`/image?id=${event.info.public_id}`);
  };
</script>

<CldUploadWidget
  {onUpload}
  options={{
    sources: ["local"],
    multiple: false,
    maxFiles: 1,
  }}
  uploadPreset="upload-unsigned-images"
  let:open
  let:isLoading
>
  <button on:click={() => open()} disabled={isLoading}>
    Open the widget
  </button>
</CldUploadWidget>
