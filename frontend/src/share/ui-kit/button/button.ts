import styled from 'styled-components'

type StyledButtonProps = {
	$secondary?: boolean,
	$outline?: boolean
}

const Button = styled.button<StyledButtonProps>`
    height: ${({theme}) => theme.spacing['sp-7']}px;
	background: ${({theme, $secondary, $outline}) => {
        if ($outline) return 'none'

        const color = $secondary ? theme.colors.tertiary.dark : theme.colors.primary.dark
        return color
    }};
	box-shadow: ${({theme}) => theme.shadow.normal};
	border: ${({theme, $secondary, $outline}) => {
        const color = $secondary ? theme.colors.tertiary.dark : theme.colors.primary.dark
        if ($outline) return `1px solid ${color}`
        return 'none'
    }};
	border-radius:  ${({theme}) => theme.spacing['sp-2']}px;
	padding: 0px ${({theme}) => theme.spacing['sp-5']}px;
	font-weight: ${({theme}) => theme.font.desktop['button-large'].weight};
	font-size:  ${({theme}) => theme.font.desktop['button-large'].size}px;
	color: ${({theme}) => theme.colors.neutral.black};
    transition: 0.2s all;

	&:hover {
		background: ${({theme, $secondary}) => {
        return $secondary ? theme.colors.tertiary.light : theme.colors.primary.light
    }};
		box-shadow: ${({theme}) => theme.shadow.medium};
	}

	&:active {
		background: ${({theme, $secondary}) => {
        return $secondary ? theme.colors.tertiary.extraDark : theme.colors.primary.extraDark
    }};
		box-shadow: ${({theme}) => theme.shadow.small};
	}
`

Button.displayName = 'Button'
export default Button