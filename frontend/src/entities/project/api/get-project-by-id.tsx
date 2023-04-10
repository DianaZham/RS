export type GetProjectByIDBuilding= {
    'adres': string
    'ploshad': string
    'tip_obekta': string | null
    'sostoyanie_doma': string | null
    'vladelez_doma': string | null
}

export type GetProjectByIDProject = {
    'id': number,
    'vnutrinii_nomer': string,
    'status': string,
    'raioni': string[],
    'otvestvenie': string[],
    'doma': GetProjectByIDBuilding[],
    'blizaishaia_data': string
}

export const getProjectById = async (id: number | string) => {
    const response = await fetch(`http://127.0.0.1:8000/api/proekti/proekt/${id}`)
    return response.json() as Promise<GetProjectByIDProject>
}
