<template>
    <div class="ar">
      <a-scene arjs='detectionMode: mono_and_matrix; matrixCodeType: 3x3;'>     
        <a-marker type='barcode' value='1'>
          <a-image  position="0 0 2" rotation="-90 0 0" scale="8 8 8" src="/src/assets/models/1.png"></a-image>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    </div>    
</template>
