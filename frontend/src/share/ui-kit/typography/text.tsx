import styled from 'styled-components'
import {type BaseSizes} from '../../../app'

type TextProps = {
    $size?: BaseSizes
}

const Text = styled.span<TextProps>`
  font-family: ${({theme}) => theme.font.family};
  font-size: ${({theme, $size = 'large'}) => theme.font.desktop[`text-${$size}`].size}px;
  font-weight: ${({theme, $size = 'large'}) => theme.font.desktop[`text-${$size}`].weight};
  line-height: ${({
        theme,
        $size = 'large'
    }) => theme.font.desktop[`text-${$size}`].lineHeight ?? theme.font.desktop[`text-${$size}`].size}px;
`

Text.displayName = 'Text'

export default Text
