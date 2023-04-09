import {LastProjectWidgetProject} from '../types'

// TODO: ПОПРОСИТЬ API

const mock: LastProjectWidgetProject[] = [
    {id: 1, businessNumber: '#0990929', dateApproval: '31.11.1997'},
    {id: 2, businessNumber: '#7812393', dateApproval: '01.12.1997'},
    {id: 3, businessNumber: '#8928399', dateApproval: '04.12.1997'},
    {id: 4, businessNumber: '#9811240', dateApproval: '05.12.1997'},
    {id: 5, businessNumber: '#9149392', dateApproval: '09.12.1997'},
    {id: 6, businessNumber: '#1238839', dateApproval: '17.12.1997'},
]

export const getLastProjects = async () => {
    return new Promise(e => e(mock)) as Promise<LastProjectWidgetProject[]>
}
