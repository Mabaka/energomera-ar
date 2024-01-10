<template>
    <div class="ui__content">
        <div class="ui__wrapper">
            <div class="top__elements">
                <div class="step__wrapper">
                    <stepCurrentValue :step="dataStore.step" />
                </div>
                <div class="button__back__page__wrapper">
                    <backButton @action="dataStore.reload" :hardware_item="dataStore.hardware_item">Назад</backButton>
                </div>
            </div>
            <div class="left_side__elements">
                <div v-if="dataStore.step == 7" class="left_side__element">
                    <router-link @click="dataStore.reload" :to="{ name: 'ring' }">
                        Проверка прозвонкой
                    </router-link>
                </div>
                <div v-if="dataStore.step == 7" class="left_side__element">
                    <router-link @click="dataStore.reload" :to="{ name: 'home' }">
                        Визуальный осмотр
                    </router-link>
                </div>
            </div>
            <div class="bottom__elements">
                <div class="desc__wrapper">
                    <stepCurrent :stepDesc="dataStore.stepDesc" />
                </div>
                <div class="buttons">
                    <div class="button__back__wrapper">
                        <stepButton @action="dataStore.decrement">Назад</stepButton>
                    </div>
                    <div class="button__next__wrapper">
                        <stepButton @action="dataStore.increment">Далее</stepButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import stepCurrentValue from './stepCurrentValue.vue';
import stepCurrent from './stepCurrent.vue';
import backButton from './backButton.vue';
import stepButton from './stepButton.vue';

const props = defineProps({
    dataStore: {
        type: Object,
        required: true
    }
});

</script>