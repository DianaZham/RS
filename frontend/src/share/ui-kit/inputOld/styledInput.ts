import styled from 'styled-components'

const StyledInput = styled.input`
  background: ${({theme}) => theme.colors.neutral.whiteLight};
  border: 1px solid ${({theme}) => theme.colors.neutral.grayLight};
  border-radius: ${({theme}) => theme.radius.normal}px;
  height: ${({theme}) => theme.spacing['sp-8']}px;
  padding: 0 ${({theme}) => theme.spacing['sp-4']}px;
  width: 100%;
  font-size: ${({theme}) => theme.font.desktop['subtitle-large'].size}px;
  font-weight: ${({theme}) => theme.font.desktop['subtitle-large'].weight};
  color: ${({theme}) => theme.colors.neutral.blackLight};

  &:hover {
    border-color: ${({theme}) => theme.colors.neutral.gray};
  }

  &:focus {
    outline: none !important;
    border-color: ${({theme}) => theme.colors.primary.extraDark};
  }

  &::placeholder {
    font-size: ${({theme}) => theme.font.desktop['subtitle-large'].size}px;
    font-weight: ${({theme}) => theme.font.desktop['subtitle-large'].weight};
    color: ${({theme}) => theme.colors.neutral.gray};
  }

  &:focus::placeholder {
    color: ${({theme}) => theme.colors.neutral.grayLight};
  }
`

export default StyledInput
