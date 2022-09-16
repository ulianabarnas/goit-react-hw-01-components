import styled from 'styled-components'
import getRandomHexColor from 'utils/getRandomHexColor'

export const Item = styled.li`
    background-color: ${getRandomHexColor};
    color: ${p => p.theme.colors.white};
    flex-grow: 1;
    padding: ${p => p.theme.space[3]}px 0;
`

export const Label = styled.span`
    display: block;
    font-size: ${p => p.theme.fontSizes.s};
`

export const Percentage = styled.span`
    font-weight: ${p => p.theme.fontWeights.bold};
`