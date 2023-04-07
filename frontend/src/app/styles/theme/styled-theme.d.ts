import 'styled-components'

interface ColorVariant {
    extraLight: string
    light: string
    dark: string
    extraDark: string
}

interface NotificationVariant {
    success: string
    successLight: string
    warning: string
    warningLight: string
    danger: string
    dangerLight: string
}

interface NeutralVariant {
    black: string
    blackLight: string
    gray: string
    grayLight: string
    white: string
    whiteLight: string
}

interface FontVariant {
    size: number
    weight: 'regular' | 'medium' | 'bold'
    lineHeight?: number
}

type BaseSizes = 'small' | 'large'
type FullSizes = 'normal' | 'medium' | BaseSizes


type HeadlineVariant = {
    [key in `headline-${FullSizes}`]: FontVariant
}

type SubtitleVariant = {
    [key in `subtitle-${BaseSizes}`]: FontVariant
}

type BodyVariant = {
    [key in `body-${BaseSizes}`]: FontVariant
}

type ButtonVariant = {
    [key in `button-${BaseSizes}`]: FontVariant
}

type TextVariant = HeadlineVariant & SubtitleVariant & BodyVariant & ButtonVariant

interface SpacingVariant {
    [key: `sp-${number}`]: number
}

type ShadowVariant = {
    [key in FullSizes]: string
}

type RadiusVariant = {
    [key in FullSizes]: number
}

declare module 'styled-components' {
    export interface DefaultTheme {
        font: {
            family: string
            desktop: TextVariant
            mobile: TextVariant
        }
        colors: {
            primary: ColorVariant
            secondary: ColorVariant
            tertiary: ColorVariant
            neutral: NeutralVariant
            notification: NotificationVariant
        }
        spacing: SpacingVariant
        shadow: ShadowVariant
        radius: RadiusVariant
    }
}
