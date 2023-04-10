import {GetAllProjectsResponseBuilding, GetAllProjectsResponseProject} from '../../../entities/project/api'
import {RegistryBuilding, RegistryProject} from '../types'
import {GetProjectByIDBuilding, GetProjectByIDProject} from '../../../entities/project/api/get-project-by-id'

//TODO: ДАТУ В ЗАПРОС, ID В СТРОЕНИЕ

export const toRegistryBuilding = (data: GetAllProjectsResponseBuilding | GetProjectByIDBuilding): RegistryBuilding => ({
    id: 1,
    fullAddress: data.adres,
    type: data.tip_obekta ?? ' - ',
    quality: data.sostoyanie_doma ?? ' - ',
    owner: data.vladelez_doma ?? ' - ',
    square: data.ploshad,
})

export const toRegistryProject = (data: GetAllProjectsResponseProject | GetProjectByIDProject): RegistryProject => ({
    id: data.id,
    status: data.status,
    businessNumber: data.vnutrinii_nomer,
    accountable: data.otvestvenie,
    constructionArea: data.raioni,
    nextControlDate: data.blizaishaia_data,
    buildings: data.doma.map(toRegistryBuilding)
})
