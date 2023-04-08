import React, {FC} from 'react'
import {YMaps, Map as YMap, Placemark} from '@pbe/react-yandex-maps'
import { nanoid } from '@reduxjs/toolkit'
import { Modal } from '../modal'
import { useAppDispatch, useAppSelector } from '../../../app'
import { modalSlice } from '../../../entities/modal/model/slice/modalSlice'

type Coord = {
    lat: number,
    lon: number
}


type MapProps = {
    center: Coord,
    coords: Coord[]
    zoom: number
}
    
const Map: FC<MapProps> = ({zoom, coords, center}) => {
    const {isModal} = useAppSelector(state => state.rootReducer.modalReducer)
    const {closeModal, opneModal} = modalSlice.actions
    const dispatch = useAppDispatch()

    return (
        <YMaps>
            <YMap
                defaultState={{
                    center: [center.lat, center.lon],
                    zoom,
                }}
            >
                {coords.map(({lat, lon}) => <Placemark 
                    onClick={() => {dispatch(opneModal())}} 
                    key={nanoid()} 
                    geometry={[lat, lon]} />)}
                <Modal isModal={isModal} onClose={() => dispatch(closeModal())}>Любооооой контент!!!</Modal>
            </YMap>
        </YMaps>
    )
}

Map.displayName = 'Map'

export default Map
