import {WordMeaning} from "../model/WordMeaning";
import {makeAutoObservable} from "mobx";


export class WordMeaningDialogStore {

    isOpen: boolean = false;

    wordMeanings: WordMeaning[] = [];


    constructor() {
        makeAutoObservable(this, {})
    }
}