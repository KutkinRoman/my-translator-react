import {makeAutoObservable} from "mobx";
import {Lang} from "../enums/Lang";
import {VoiceEnum} from "../enums/Voice";

export class TranslatorStore {

    sourceText: string = ''

    sourceLang = Lang.EN
    fullText: string = ''

    words: string[] = []

    targetLang = Lang.RU;
    voice = VoiceEnum.MALE_1;

    constructor() {
        makeAutoObservable(this, {})
    }

    setSourceText(sourceText: string) {
        this.sourceText = sourceText;
    }

    setFullText(fullText: string) {
        this.fullText = fullText;
    }
    updateWords() {
        this.words = this.sourceText.split(' ')
    }
}