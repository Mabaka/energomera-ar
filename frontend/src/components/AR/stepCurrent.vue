<template>
    <span class="step__desc">{{stepDesc}}</span>
</template>

<script setup>
defineProps(
    {
        stepDesc:{
            type: String,
            required: true,
        }
    }
)
</script>