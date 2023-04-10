import React, {FC, ReactNode, useState} from 'react'
import {YMaps, Map as YMap, Placemark} from '@pbe/react-yandex-maps'
import Modal from '../modal/modal'

type Coord = {
    id: number
    lat: number,
    lon: number
    onPointClick?: (id: number) => void
}

type MapProps = {
    center: Coord,
    objectPoints: Coord[]
    zoom: number
    children?: ReactNode
    className?: string
}

const Map: FC<MapProps> = ({
    zoom,
    objectPoints,
    center,
    children,
    className
}) => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    
    const pointClickHandler = (id: number, onPointClick?: (id: number) => void) => {
        setIsOpenModal(true)
        onPointClick?.(id)
    }
    
    const closeModalHandler = () => setIsOpenModal(false)
    
    return (
        <YMaps>
            <YMap
                className={className}
                defaultState={{
                    center: [center.lat, center.lon],
                    zoom,
                }}
            >
                {objectPoints.map(({lat, lon, id, onPointClick}, index) => <Placemark
                    key={index}
                    onClick={() => pointClickHandler(id, onPointClick)}
                    geometry={[lat, lon]}/>)}
                <Modal isOpen={isOpenModal} onClose={closeModalHandler}>{children}</Modal>
            </YMap>
        </YMaps>
    )
}

Map.displayName = 'Map'

export default Map
