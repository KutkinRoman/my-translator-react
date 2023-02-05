import {makeAutoObservable} from "mobx";

export class WordStore {

    original: string = '';

    html: string = '';

    constructor(original: string, html: string) {
        this.original = original;
        this.html = html;
        makeAutoObservable(this, {})
    }
}