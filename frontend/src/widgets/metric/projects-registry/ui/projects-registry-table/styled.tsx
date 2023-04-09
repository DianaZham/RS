import styled from 'styled-components'

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    thead {
    }

    tbody {
      tr {
        border-bottom: 1px solid ${({theme}) => theme.colors.neutral.gray};
        
        &:last-child{
          border: none;
        }
        
        td {
          text-align: center;
          padding: 10px;
        }
      }
    }
`
