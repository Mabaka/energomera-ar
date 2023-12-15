<template>
    <div class="ar">
      <a-scene arjs='detectionMode: mono_and_matrix; matrixCodeType: 3x3;'>     
        <a-marker type='barcode' value='1'>
                    
          <a-image v-if="dataStore.step==1" position="0 0 2" rotation="-90 0 0" scale="8 8 8" src="/src/assets/models/1.png"></a-image>          
          <a-entity v-if="dataStore.step==2" rotation="0 0 45" position="0 0 0" scale="1 1 1" gltf-model="/src/assets/models/screwdriver/screwdriver.gltf"></a-entity>
          <a-entity v-if="dataStore.step==3" rotation="90 0 90" position="4 0 0" scale="2 2 2" gltf-model="/src/assets/models/handle/handle.gltf"></a-entity>          
          <a-entity v-if="dataStore.step==4" rotation="0 0 0" position="0 0 0" scale="0.7 0.7 0.7" gltf-model="/src/assets/models/rj45/rj45.gltf"></a-entity>
          <a-entity v-if="dataStore.step==5" rotation="0 0 0" position="0 0 0" scale="0.7 0.7 0.7" gltf-model="/src/assets/models/rj45/rj45.gltf"></a-entity>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    </div>    
</template>

<script setup>
  const props = defineProps({
        dataStore:{
            type:Object,
            required:true
        }
    });  
</script>