import {RegistryBuilding} from './building'

export type RegistryProject = {
    id: number
    businessNumber: string
    status: string
    constructionArea: string[]
    nextControlDate: string
    accountable: string[]
    buildings: RegistryBuilding[]
}
