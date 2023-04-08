import styled from 'styled-components'

type AlertProps = {
    $variant: 'success' | 'danger' | 'warning'
}

const Alert = styled.div<AlertProps>`
  background: ${({theme, $variant}) => theme.colors.notification[$variant]};
  color: ${({theme}) => theme.colors.neutral.whiteLight};
  padding: ${({theme}) => theme.spacing['sp-4']}px;
  border-radius: ${({theme}) => theme.radius.normal}px;
`

Alert.displayName = 'Alert'

export default Alert
