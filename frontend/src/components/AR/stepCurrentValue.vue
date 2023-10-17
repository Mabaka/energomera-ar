<template>
    <span class="step__counter">Текущий шаг: {{step}}</span>
</template>

<script setup>
defineProps(
    {
        step:{
            type: Number,
            required: true,
        }
    }
)
</script>