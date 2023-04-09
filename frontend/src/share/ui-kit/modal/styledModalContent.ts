import styled from 'styled-components'

const StyledModalContent = styled.div`
    padding: ${({theme}) => theme.spacing['sp-5']}px;
	border-radius: ${({theme}) => theme.radius.medium}px;
	background-color: ${({theme}) => theme.colors.neutral.whiteLight};
`

export default StyledModalContent