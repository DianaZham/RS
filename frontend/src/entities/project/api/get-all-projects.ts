export type GetAllProjectsResponseBuilding = {
    'adres': string
    'ploshad': string
    'tip_obekta': string | null
    'sostoyanie_doma': string | null
    'vladelez_doma': string | null
}

export type GetAllProjectsResponseProject = {
    'id': number,
    'vnutrinii_nomer': string,
    'status': string,
    'raioni': string[],
    'otvestvenie': string[],
    'doma': GetAllProjectsResponseBuilding[],
    'blizaishaia_data': string
}

export const getAllProjects = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/proekti/proekt/')
    return response.json() as Promise<GetAllProjectsResponseProject[]>
}
