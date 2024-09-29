// stores/counter.js
import {defineStore} from 'pinia'
import data from '../data';
import {LanguageLabels} from "../data/types.ts";

export const useAppStore = defineStore('appStore', {
    state: () => {
        return {
            lang: '' as keyof LanguageLabels,
            languages: data.languages,
            label: data.labels,
            clientHeight: 0,
        }
    },

    actions: {
        setLanguage(key: string = '') {
            if (key === 'en' || key === 'vi') {
                this.lang = key;
                return;
            }

            let firstLang = [...this.languages].pop();
            if (firstLang !== undefined) {
                this.lang = firstLang.key as keyof LanguageLabels;
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