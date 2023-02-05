const baseURL = 'https://vimbox-tts.skyeng.ru/api/v1'
interface AudioParams {
    text: string,

    lang: string

    voice: string
}


export class WordSoundService {

    async getAudio({text, lang, voice}: AudioParams) {
        return new Audio(`${baseURL}/tts?text=${text}&lang=${lang}&voice=${voice}`)
    }
}