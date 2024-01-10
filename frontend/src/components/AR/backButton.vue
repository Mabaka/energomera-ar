<template>
    <router-link @click="$emit('action')" :to="{ name: 'hardware', params: { id: 'item_' + hardware_item.id } }">        
        <slot />      
    </router-link>    
</template>

<script setup>
defineProps(
    {
        hardware_item: {
            type: Object,
            required: true,
        }        
    }
)

const emit = defineEmits(['action']);
</script>