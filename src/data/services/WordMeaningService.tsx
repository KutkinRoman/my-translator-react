import axios from "axios";
import {WordMeaning} from "../model/WordMeaning";

const API = axios.create({
    baseURL: 'https://dictionary.skyeng.ru/api/public/v1'
})

interface SearchParams {
    search: string,

    page?: number

    pageSize?: number
}

export class WordMeaningService {

    async search(params: SearchParams) {
        return await API.get<WordMeaning[]>('/words/search', {
            params
        })
    }
}