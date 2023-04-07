import styled from 'styled-components'
import {type BaseSizes} from '../../../app'

type SubtitleProps = {
    $size?: BaseSizes
}

const Subtitle = styled.span<SubtitleProps>`
  font-family: ${({theme}) => theme.font.family};
  font-size: ${({theme, $size = 'large'}) => theme.font.desktop[`subtitle-${$size}`].size}px;
  font-weight: ${({theme, $size = 'large'}) => theme.font.desktop[`subtitle-${$size}`].weight};
  line-height: ${({
        theme,
        $size = 'large'
    }) => theme.font.desktop[`subtitle-${$size}`].lineHeight ?? theme.font.desktop[`subtitle-${$size}`].size}px;
`

Subtitle.displayName = 'Subtitle'

export default Subtitle
