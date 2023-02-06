import axios from "axios";
import {Lang} from "../enums/Lang";

const API = axios.create({
    baseURL: 'https://translate.googleapis.com'
})

export type TranslateReponse = [
    [
        [string, string, any, any, number, any, any, any[][], string[][][]][],
        any,
        string,
        any,
        any,
        any,
        any,
        any[]
    ]
]

interface TranslateParma {
    q: string
    src: Lang,
    tag: Lang,
}

// https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ru&dt=t&q=Word

export class WordTranslateService {

    async translate(props: TranslateParma) {
        return await API.get('/translate_a/single', {
            params: {
                client: 'gtx',
                dt: 't',
                sl: props.src,
                tl: props.tag,
                q: props.q

            }
        })
    }
}