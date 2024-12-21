<template>
    <div>
      <!-- Imagen en miniatura -->
      <img :src="thumbnail" alt="Imagen en miniatura" class="thumbnail" @click="openLightbox">
  
      <!-- Contenedor del Lightbox -->
      <div v-if="isOpen" class="lightbox" @click="closeLightbox">
        <img :src="image" alt="Imagen en grande">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: {
        type: String,
        required: true, // Ruta de la imagen grande
      },
      thumbnail: {
        type: String,
        required: true, // Ruta de la miniatura
      },
    },
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      openLightbox() {
        this.isOpen = true;
      },
      closeLightbox() {
        this.isOpen = false;
      },
    },
  };
  </script>
  
  <style>
  /* Miniatura */
  .thumbnail {
    width: 700px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  .thumbnail:hover {
    transform: scale(1.1);
  }
  
  /* Lightbox */
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .lightbox img {
    max-width: 95%;
    max-height: 95%;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    border: 5px solid white;
  }
  </style>
  