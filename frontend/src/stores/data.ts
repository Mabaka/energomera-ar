import { defineStore } from 'pinia'
import hardware from '../mocks/hardware.json';

export const useDataStore = defineStore('data', {
    state: () => ({
        step: 0,
        stepDesc: '',
        hardware_item: hardware[0],
        script_aframe:'',
        script_aframe_ar:''
    }),
    getters: {
        getStep(state) {
            return state.step;
        },
        getStepDesc(state) {
            return state.stepDesc;
        }
    },
    actions: {
        _updateDesc() {
            this.stepDesc = this.hardware_item.diagnostic_scenarios[0].steps.filter((step_el: any) => {
                return step_el.id == this.step;
            })[0].text;
        },
        set(params: any) {
            this.step = params.step;
            this.stepDesc = params.stepDesc;
            this.hardware_item = params.hardware_item;
                        
            this._updateDesc();
        },
        decrement() {
            if (this.step == 1) {
                return;
            }
            this.step -= 1;
            this._updateDesc();
        },
        increment() {
            if (this.step == 7) {
                return;
            }
            this.step += 1;
            this._updateDesc();
        },
        updateHardware(id: any) {
            this.hardware_item = hardware.filter((item) => {
                return item.id == id.value.replace('item_', '');
            })?.[0];
        },
        async reload() {
            const stream = await navigator.mediaDevices.getUserMedia({video: true });
            stream.getTracks().forEach(function (track) {
                track.stop();
            });
            document.getElementsByTagName('body')[0].style = '';
        }
    }
})