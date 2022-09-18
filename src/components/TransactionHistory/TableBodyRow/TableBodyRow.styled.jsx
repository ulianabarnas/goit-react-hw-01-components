import styled from 'styled-components';

export const Row = styled.tr`
    :nth-child(even){
        background-color: ${p => p.theme.colors.muted};
    }
`

export const Data = styled.td`
    border: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.muted};
    padding: ${p => p.theme.space[3]}px;
`