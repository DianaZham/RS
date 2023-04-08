import React, {FC, useEffect, useRef} from 'react'

type VideoPlayerProps = {
    listSrc: string[]
}

const VideoPlayer: FC<VideoPlayerProps> = ({
    listSrc
}) => {

    const ref = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        const [first] = listSrc

        if (ref.current) {
            ref.current.src = first
        }
    }, [listSrc])

    return (
        <video ref={ref} controls></video>
    )
}

VideoPlayer.displayName = 'VideoPlayer'

export default VideoPlayer
