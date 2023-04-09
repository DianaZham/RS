import styled from 'styled-components'
import Color from 'color'

type BoxProps = {
    $color: string
}

const Box = styled.div<BoxProps>`
  background: ${({$color}) => $color};
  border-radius: ${({theme}) => theme.radius.small}px;
  padding: ${({theme}) => theme.spacing['sp-3']}px;
  border: 1px solid ${({$color}) => Color($color).darken(0.1).rgb().string()};
`

Box.displayName = 'Box'

export default Box
