import {type Building} from '../../building'

export interface ControlDate {
    date: Date
    description: string
}

export interface Project {
    id: number
    number: string
    status: string
    constructionArea: string[]
    controlDates: ControlDate[]
    accountable: string
    buildings: Building[]
}
