import React, {FC, useEffect, useState} from 'react'
import {MetricList} from '../../../../../entities/metric'
import {getLastProjects} from '../../api'
import {LastProjectWidgetProject} from '../../types'
import {Link} from '../../../../../share'
import {Path} from '../../../../../app'
import {withoutSlug} from '../../../../../app/routes'

const LastProjectsList: FC = () => {
    
    const [projects, setProjects] = useState<LastProjectWidgetProject[]>([])
    
    useEffect(() => {
        (async () => {
            const data = await getLastProjects()
            setProjects(data)
        })()
    }, [])
    
    return <MetricList
        title="Последние проекты / Дата согласования"
        metrics={projects.map((project) => ({
            title: <Link to={`/${withoutSlug(Path.Project)}/${project.id}`}>{project.businessNumber}</Link>,
            value: project.dateApproval
        }))}
        color="rgb(193 233 227)"
    />
}

LastProjectsList.displayName = 'LastProjectsList'

export default LastProjectsList
