
export interface WordMeaning {
    id: number,
    text: string,
    meanings: Meaning []
}

export interface Meaning {
    id: number,
    partOfSpeechCode: string,
    translation: {
        text: string,
        note: string
    },
    previewUrl: string,
    imageUrl: string,
    transcription: string,
    soundUrl: string
}