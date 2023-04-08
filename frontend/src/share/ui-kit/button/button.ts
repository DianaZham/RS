import styled from 'styled-components'

const Button = styled.button`
    height: ${({theme}) => theme.spacing['sp-7']}px;
	background: ${({theme}) => theme.colors.primary.dark};
	box-shadow: ${({theme}) => theme.shadow.normal};
	border: none;
	border-radius:  ${({theme}) => theme.spacing['sp-2']}px;
	padding: 0px ${({theme}) => theme.spacing['sp-5']}px;
	font-weight: ${({theme}) => theme.font.desktop['button-large'].weight};
	font-size:  ${({theme}) => theme.font.desktop['button-large'].size}px;
	color: ${({theme}) => theme.colors.neutral.black};
`

export default Button