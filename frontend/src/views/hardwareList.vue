<template>
    <div class="hardware__content">
        <div class="hardware__wrapper">
            <div
                v-for="hardware_item in hardware"
                :key="hardware_item.id"
                class="hardware__item"
                :id="'item_'+hardware_item.id"
            >
            <div class="hardware__item__container">
                <img :src="hardware_item.img" :alt="hardware_item.name">
                <div class="hardware__item__content">
                    <span class="hardware__item__desk hardware__item__desk__name">
                        <span class="hardware__item__desk__namefield">Наименование:</span> <span class="hardware__item__desk__name__value">{{hardware_item.name}}</span>
                    </span>
                    <span class="hardware__item__desk hardware__item__desk__type">
                        <span class="hardware__item__desk__typefield">Тип:</span> <span class="hardware__item__desk__typevalue">{{hardware_item.type}}</span>
                    </span>                    
                </div>
                <div
                 class="hardware__item__open">
                    <router-link :to="{name: 'hardware',params:{id:'item_'+hardware_item.id}}">
                        Открыть
                    </router-link>
                </div>
            </div>
        </div>                        
        </div>
    </div>
</template>

<script setup>
    import hardware from "@/mocks/hardware.json"
</script>