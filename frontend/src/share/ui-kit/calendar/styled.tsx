import {Calendar} from 'react-big-calendar'
import styled from 'styled-components'
import 'react-big-calendar/lib/css/react-big-calendar.css'


export const StyledCalendar = styled(Calendar)`
  .rbc-btn-group {

    .rbc-active, .rbc-active:hover, .rbc-active:focus-visible {
      background-color: ${({theme}) => theme.colors.tertiary.dark};
      color: ${({theme}) => theme.colors.neutral.grayLight};
    }

    button {
      background-color: ${({theme}) => theme.colors.tertiary.light};
      color: ${({theme}) => theme.colors.neutral.white};

      &:active {
        background-color: ${({theme}) => theme.colors.tertiary.dark};
        color: ${({theme}) => theme.colors.neutral.grayLight};
      }
    }
  }
`
