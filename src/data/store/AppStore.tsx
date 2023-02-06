import {TranslatorStore} from "./TranslatorStore";
import {makeAutoObservable} from "mobx";
import {WordMeaningDialogStore} from "./WordMeaningDialogStore";
export class AppStore {

    translatorStore = new TranslatorStore();

    wordMeaningDialogStore = new WordMeaningDialogStore();

    constructor() {
        makeAutoObservable(this, {})
    }
}