import {TranslatorStore} from "./TranslatorStore";
import {makeAutoObservable} from "mobx";
export class AppStore {

    translatorStore = new TranslatorStore();



    constructor() {
        makeAutoObservable(this, {})
    }
}