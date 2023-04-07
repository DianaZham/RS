import styled from 'styled-components'
import {FullSizes} from '../../../app'

type HeadlineProps = {
    $size: FullSizes
}

const Headline = styled.h1<HeadlineProps>`
  font-family: ${({theme}) => theme.font.family};
  font-size: ${({theme, $size = 'normal'}) => theme.font.desktop[`headline-${$size}`].size}px;
  font-weight: ${({theme, $size = 'normal'}) => theme.font.desktop[`headline-${$size}`].weight};
  line-height: ${({
        theme,
        $size = 'normal'
    }) => theme.font.desktop[`headline-${$size}`].lineHeight ?? theme.font.desktop[`headline-${$size}`].size}px;
`

Headline.displayName = 'Headline'

export default Headline
