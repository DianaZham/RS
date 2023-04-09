import {GetAllProjectsResponseBuilding, GetAllProjectsResponseProject} from '../../../entities/project/api'
import {RegistryBuilding, RegistryProject} from '../types'

//TODO: ДАТУ В ЗАПРОС, ID В СТРОЕНИЕ

export const toRegistryBuilding = (data: GetAllProjectsResponseBuilding): RegistryBuilding => ({
    id: 1,
    fullAddress: data.adres,
    type: data.tip_obekta ?? ' - ',
    quality: data.sostoyanie_doma ?? ' - ',
    owner: data.vladelez_doma ?? ' - ',
    square: data.ploshad,
})

export const toRegistryProject = (data: GetAllProjectsResponseProject): RegistryProject => ({
    id: data.id,
    status: data.status,
    businessNumber: data.vnutrinii_nomer,
    accountable: data.otvestvenie,
    constructionArea: data.raioni,
    nextControlDate: 'ДАТА!',
    buildings: data.doma.map(toRegistryBuilding)
})
