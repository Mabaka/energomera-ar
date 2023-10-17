<template>
    <button class="ar__ui__button" @click="$emit('action')">
        <slot />
    </button>
</template>

<script setup>
    const emit = defineEmits(['action']);
</script>