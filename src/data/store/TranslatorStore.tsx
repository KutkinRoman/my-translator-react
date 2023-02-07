import {makeAutoObservable} from "mobx";
import {Lang} from "../enums/Lang";
import {VoiceEnum} from "../enums/Voice";
import {WordTranslateService} from "../services/WordTranslationService";

export type TranslateType = 'Word' | 'Sentence'

export const TranslateTypes: TranslateType[] = ['Word', 'Sentence']

export interface TranslatorParams {

    translateType: TranslateType

    sourceText: string

    sourceLang: Lang

    targetLang: Lang

    voice: VoiceEnum

    rows: number
}

export class TranslatorStore {

    wordTranslateService = new WordTranslateService()

    translateType: TranslateType = 'Sentence'

    sourceText: string = ''

    sourceLang = Lang.EN

    translateText: string = ''

    translateLines: string[] = []

    targetLang = Lang.EN;

    voice = VoiceEnum.MALE_1;

    rows = 5

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
            this.translateText = response.data[0].map(val => {
                console.log(val)
                return val[0]
            }).join('')
        } else {
            this.translateText = this.sourceText
        }
        this.updateTranslateLines()
    }

    setParams(p: TranslatorParams) {
        this.translateType = p.translateType || 'Sentence'
        this.sourceText = p.sourceText || ''
        this.sourceLang = p.sourceLang || Lang.EN
        this.targetLang = p.targetLang || Lang.EN
        this.voice = p.voice || VoiceEnum.MALE_1
        this.rows = p.rows || 10
        this.runTranslate()
    }

    getParams(): TranslatorParams {
        return {
            translateType: this.translateType,
            sourceText: this.sourceText,
            sourceLang: this.sourceLang,
            targetLang: this.targetLang,
            voice: this.voice,
            rows: this.rows
        }
    }

    getParamsJson(): string {
        return JSON.stringify(this.getParams())
    }

}