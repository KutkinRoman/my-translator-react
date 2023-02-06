import {makeAutoObservable} from "mobx";
import {WordMeaningDialogStore} from "./WordMeaningDialogStore";
import {TranslatorParams, TranslatorStore} from "./TranslatorStore";

export class AppStore {

    translatorStores: TranslatorStore[] = []

    wordMeaningDialogStore = new WordMeaningDialogStore();


    constructor() {
        const translatorStore = new TranslatorStore();
        translatorStore.rows = 10
        this.translatorStores = [translatorStore]
        this.readTranslatorStores()
        makeAutoObservable(this, {})
    }


    setTranslatorStores(translatorStores: TranslatorStore[]) {
        this.translatorStores = translatorStores
    }

    removerTranslatorStoreByIndex(index: number) {
        const translatorStores = this.translatorStores.filter((_, idx) => index !== idx)
        this.setTranslatorStores(translatorStores)
    }

    writeTranslatorStores() {
        const array: TranslatorParams[] = []
        for (let i = 1; i < this.translatorStores.length; i++) {
            array.push(this.translatorStores[i].getParams())
        }
        localStorage.setItem('translatorStores', JSON.stringify(array))
    }

    readTranslatorStores() {
        const json = localStorage.getItem('translatorStores')
        if (json) {
            const translatorStores: TranslatorStore[] = JSON.parse(json).map(function (params: TranslatorParams) {
                const storage = new TranslatorStore()
                storage.setParams(params)
                return storage;
            })
            this.setTranslatorStores([...this.translatorStores, ...translatorStores])
        }
    }
}