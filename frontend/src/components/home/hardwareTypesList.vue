<template>
    <div class="hardware_types__wrapper">
        <div class="hardware_types__container">
            <table class="hardware_types__table table">
                <tr class="hardware_types__table__tr tr">
                    <th class="hardware_types__table__th th">
                        Тип
                    </th>
                </tr>
                <tr v-for="item in hardware_types" class="hardware_types__table__tr tr">
                    <td class="hardware_types__table__td td">
                        <div :key="item.id" class="hardware_types__item" :id="'type_' + item.id">
                            {{ item.name }}
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script setup>
import hardware_types from '@/mocks/hardware_types.json';                
</script>