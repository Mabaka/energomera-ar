<template>
    <div class="hardware__wrapper">
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
                    Начать диагностику
                </router-link>
            </div>
        </div>
    </div>    
</template>

<script setup>
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const id = computed(()=>route.params.id);    
    import hardware from '@/mocks/hardware.json';

    const hardware_item = hardware.filter((item)=>{                
        return item.id == id.value.replace('item_','');        
    })[0];              
</script>
