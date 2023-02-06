import {makeAutoObservable} from "mobx";
import {WordMeaningDialogStore} from "./WordMeaningDialogStore";
import {TranslatorStore} from "./TranslatorStore";

export class AppStore {

    translatorStores: TranslatorStore[] = []

    wordMeaningDialogStore = new WordMeaningDialogStore();


    constructor() {
        const translatorStore = new TranslatorStore();
        translatorStore.rows = 10
        this.translatorStores = [translatorStore]
        makeAutoObservable(this, {})
    }


    setTranslatorStores(translatorStores: TranslatorStore[]){
        this.translatorStores = translatorStores
    }

    removerTranslatorStoreByIndex(index: number) {
        const translatorStores = this.translatorStores.filter((_, idx) => index !== idx)
        this.setTranslatorStores(translatorStores)
    }
}