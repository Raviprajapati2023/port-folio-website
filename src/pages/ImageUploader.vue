<template>
  <ImageUpload
    ref="uploadComponent"
    :default-directory="'images'"
    :http-request="{ url: '/api/upload' }"
    @file-added="fileAdded"
    @file-removed="fileRemoved"
    @start="uploadStart"
    @error="uploadError"
    @success="uploadSuccess"
  >
  </ImageUpload>
</template>

<script>
import ImageUpload from "../components/ImageUpload";

const fileAdded = (file) => {
  // Handle file added
};
const fileRemoved = (file) => {
  // Handle file removed
};
const uploadStart = () => {
  // Handle upload start
};
const uploadError = (error) => {
  // Handle upload error
};
const uploadSuccess = (response) => {
  // Handle upload success
};
</script>
