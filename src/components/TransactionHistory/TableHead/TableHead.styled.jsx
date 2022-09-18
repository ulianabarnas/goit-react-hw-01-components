import styled from 'styled-components';

export const TableHeadRow = styled.tr`
    text-transform: uppercase;
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primary};
    border: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.primary};
`

export const TableHeadData = styled.th`
    padding: ${p => p.theme.space[3]}px;
`