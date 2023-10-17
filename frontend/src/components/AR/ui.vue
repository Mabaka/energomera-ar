<template>
    <div class="ui__content">
        <div class="ui__wrapper">
            <div class="top__elements">
                <div class="step__wrapper">
                    <stepCurrentValue :step="step"/>                                        
                </div>
            </div>
            <div class="bottom__elements">
                <div class="desc__wrapper">
                    <stepCurrent :stepDesc="stepDesc"/>
                </div>
                <div class="buttons">
                    <div class="button__back__wrapper">
                        <stepButton @action="decrement">Назад</stepButton>
                    </div>                
                    <div class="button__next__wrapper">
                        <stepButton @action="increment">Далее</stepButton>
                    </div>
                </div>                                
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed,ref } from 'vue';
    import { useRoute } from 'vue-router';
    import stepButton from './stepButton.vue';
    import stepCurrentValue from './stepCurrentValue.vue';
    import stepCurrent from './stepCurrent.vue';
    import hardware from '@/mocks/hardware.json';

    const route = useRoute();
    const id = computed(()=>route.params.id);        
    const step = ref(1);
    const stepDesc = ref('');    

    const hardware_item = hardware.filter((item)=>{                
        return item.id == id.value.replace('item_','');        
    })[0];     

    stepDesc.value = hardware_item.diagnostic_scenarios[0].steps.filter((step_el)=>{
        return step_el.id == step.value;
    })[0].text;
        

   const decrement = ()=>{
     step.value = step.value - 1;   
     stepDesc.value = hardware_item.diagnostic_scenarios[0].steps.filter((step_el)=>{
        return step_el.id == step.value;
     })[0].text;
   }; 

   const increment = ()=>{
     step.value = step.value + 1;        
     stepDesc.value = hardware_item.diagnostic_scenarios[0].steps.filter((step_el)=>{
        return step_el.id == step.value;
     })[0].text;

   };     
</script>