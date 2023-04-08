import React, {FC} from 'react'
import {YMaps, Map as YMap} from '@pbe/react-yandex-maps'

type MapProps = {
    zoom: number
    lon: number
    lat: number
}

const Map: FC<MapProps> = ({
    zoom,
    lon,
    lat
}) => {
    return (
        <YMaps>
            <YMap defaultState={{center: [lon, lat], zoom: zoom}}/>
        </YMaps>
    )
}

Map.displayName = 'Map'

export default Map
