import React, {FC} from 'react'
import {MetricList} from '../../../../../entities/metric'
import {BsFillHouseAddFill, BsFillHouseXFill, BsFillHouseSlashFill, BsFillHouseExclamationFill} from 'react-icons/bs'

const ProjectsByTypeList: FC = () => {
    return <MetricList
        title="Доля объектов по типу:"
        metrics={[
            {title: <span><BsFillHouseAddFill/> Памятники</span>, value: '10'},
            {title: <span><BsFillHouseXFill/> Незаконная застройка</span>, value: '7'},
            {title: <span><BsFillHouseSlashFill/> Аварийное жилье</span>, value: '24'},
            {title: <span><BsFillHouseExclamationFill/> Имеющих историческую ценность</span>, value: '24'},
        ]}
        color="rgb(228 183 223)"
    />
}

ProjectsByTypeList.displayName = 'ProjectsByTypeList'

export default ProjectsByTypeList
