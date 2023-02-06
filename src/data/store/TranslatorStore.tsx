import {makeAutoObservable} from "mobx";
import {Lang} from "../enums/Lang";
import {VoiceEnum} from "../enums/Voice";
import {WordTranslateService} from "../services/WordTranslationService";

export type TranslateType = 'Word' | 'Sentence'

export const TranslateTypes: TranslateType[] = ['Word', 'Sentence']

export class TranslatorStore {

    wordTranslateService = new WordTranslateService()

    translateType: TranslateType = 'Sentence'

    sourceText: string = ''

    sourceLang = Lang.EN

    translateText: string = ''

    translateLines: string[] = []

    targetLang = Lang.EN;

    voice = VoiceEnum.MALE_1;

    rows = 1

    constructor() {
        makeAutoObservable(this, {})
    }

    updateTranslateLines() {
        this.translateLines = this.translateText.split((this.translateType === 'Sentence') ? '.' : ' ')
    }

    async runTranslate() {
        if (this.sourceLang !== this.targetLang && this.sourceText) {
            const response = await this.wordTranslateService.translate({
                q: this.sourceText,
                src: this.sourceLang,
                tag: this.targetLang
            })
            this.translateText = response.data[0][0][0]
        } else {
            this.translateText = this.sourceText
        }
        this.updateTranslateLines()
    }

}