import {DefaultTheme} from 'styled-components'

const desktopFonts: DefaultTheme['font']['desktop'] = {
    'headline-large': {
        size: 32,
        weight: 'medium',
        lineHeight: 56
    },
    'headline-medium': {
        size: 24,
        weight: 'bold',
        lineHeight: 40,
    },
    'headline-normal': {
        size: 20,
        weight: 'bold',
        lineHeight: 32,
    },
    'headline-small': {
        size: 18,
        weight: 'bold',
        lineHeight: 28,
    },
    'subtitle-large': {
        size: 13,
        weight: 'medium',
    },
    'subtitle-small': {
        size: 12,
        weight: 'medium',
    },
    'text-large': {
        size: 16,
        weight: 'regular',
        lineHeight: 24,
    },
    'text-small': {
        size: 14,
        weight: 'medium',
        lineHeight: 21,
    },
    'button-large': {
        size: 14,
        weight: 'bold',
    },
    'button-small': {
        size: 12,
        weight: 'bold',
    }
}

const ApplicationTheme: DefaultTheme = {
    colors: {
        primary: {
            extraDark: '#0B83D9',
            dark: '#0E91EF',
            light: '#3EACFA',
            extraLight: '#73C5FF'
        },
        secondary: {
            extraDark: '#000C58',
            dark: '#000F73',
            light: '#263699',
            extraLight: '#5865BA'
        },
        tertiary: {
            extraDark: '#F26C0C',
            dark: '#FF661A',
            light: '#FF9040',
            extraLight: '#FFA96A'
        },
        neutral: {
            black: '#17181A',
            blackLight: '#666E80',
            gray: '#98A1B3',
            grayLight: '#E1E2E6',
            white: '#F7F8FA',
            whiteLight: '#FFFFFF'
        },
        notification: {
            danger: '#F8183E',
            dangerLight: '#FCA3B2',
            success: '#07D95A',
            successLight: '#9CF0BD',
            warning: '#ffe44e',
            warningLight: '#fff5c3'
        },
    },
    font:
        {
            family: 'Nunito-Sans',
            desktop: {...desktopFonts},
            mobile: {
                ...desktopFonts,
                'headline-large': {
                    size: 24,
                    weight: 'bold',
                    lineHeight: 40
                },
                'headline-medium': {
                    size: 20,
                    weight: 'bold',
                    lineHeight: 32,
                },
                'headline-normal': {
                    size: 18,
                    weight: 'bold',
                    lineHeight: 28,
                },
                'headline-small': {
                    size: 16,
                    weight: 'bold',
                    lineHeight: 24,
                },
            },
        },
    radius: {
        large: 24,
        medium: 16,
        normal: 8,
        small: 4
    },
    shadow: {
        'large-2': '0 16px 32px 0 rgba(38, 54, 153, 0.3)',
        large: '0 16px 32px 0 rgba(38, 54, 153, 0.04)',
        medium: '0 8px 16px 0 rgba(38, 54, 153, 0.04)',
        normal: '0 4px 8px 0 rgba(38, 54, 153, 0.06)',
        small: '0 2px 4px 0 rgba(38, 54, 153, 0.06)'
    },
    spacing: {
        'sp-1': 4,
        'sp-2': 8,
        'sp-3': 12,
        'sp-4': 16,
        'sp-5': 24,
        'sp-6': 32,
        'sp-7': 40,
        'sp-8': 48,
        'sp-9': 56,
        'sp-10': 64,
        'sp-11': 80,
        'sp-12': 120
    }

}


export {ApplicationTheme}
