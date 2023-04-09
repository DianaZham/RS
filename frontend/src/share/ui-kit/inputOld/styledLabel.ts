import styled from 'styled-components'

const StyledLabel = styled.span`
	font-weight: ${({theme}) => theme.font.desktop['text-small'].weight};
	font-size: ${({theme}) => theme.font.desktop['text-small'].size}px;
	text-align: right;
	color: ${({theme}) => theme.colors.neutral.blackLight};
`

export default StyledLabel