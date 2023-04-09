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

export type BaseSizes = 'small' | 'large'
export type FullSizes = 'normal' | 'medium' | BaseSizes


type HeadlineVariant = {
    [key in `headline-${FullSizes}`]: FontVariant
}

type SubtitleVariant = {
    [key in `subtitle-${BaseSizes}`]: FontVariant
}

type TextVariant = {
    [key in `text-${BaseSizes}`]: FontVariant
}

type ButtonVariant = {
    [key in `button-${BaseSizes}`]: FontVariant
}

type TypographyVariant = HeadlineVariant & SubtitleVariant & TextVariant & ButtonVariant

interface SpacingVariant {
    [key: `sp-${number}`]: number
}

type ShadowVariant = {
    [key in FullSizes]: string
} & {
    'large-2': string
}

type RadiusVariant = {
    [key in FullSizes]: number
}

declare module 'styled-components' {
    export interface DefaultTheme {
        font: {
            family: string
            desktop: TypographyVariant
            mobile: TypographyVariant
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
