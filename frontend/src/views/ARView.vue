<template>
  <viewer :dataStore="DataStore" />
  <ui :dataStore="DataStore" />
</template>

<script setup>
import { ui, viewer } from '@/components/AR'
import { useDataStore } from '../stores/data'
import { useRoute, useRouter } from "vue-router";
import hardware from '@/mocks/hardware.json';
import { computed } from "vue";

const DataStore = useDataStore();
const route = useRoute();
const id = computed(() => route.params.id);

const hardware_item = hardware.filter((item) => {
  return item.id == id.value.replace('item_', '');
})?.[0];

if (hardware_item) {
  const init_params = {
    step: 1,
    stepDesc: hardware_item.diagnostic_scenarios[0].steps.filter((step_el) => {
      return step_el.id == 1;
    })[0].text,
    hardware_item: hardware_item
  };

  DataStore.set(init_params);
}
</script>    
