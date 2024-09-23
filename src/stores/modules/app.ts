// stores/counter.js
import {defineStore} from 'pinia'
import data from '../data';

export const useAppStore = defineStore('appStore', {
    state: () => {
        return {
            lang: '',
            languages: data.languages,
            label: data.labels,
            clientHeight: 0,

        }
    },

    actions: {
        setLanguage(key: string = '') {
            let firstLang = [...this.languages].pop();
            if (firstLang !== undefined) {
                this.lang = key.length ? key : firstLang?.key;
            }
        },
        changeLanguage() {
            let firstLang = this.languages.find((item) => item['key'] !== this.lang);
            if (firstLang !== undefined) {
                this.setLanguage(firstLang['key'])
            }
        }
    },
    getters: {
        langTitle: (state) =>
            state.languages.find((item) => item['key'] === state.lang)?.title,
        isSticky: (state) => !!state.clientHeight
    }
})