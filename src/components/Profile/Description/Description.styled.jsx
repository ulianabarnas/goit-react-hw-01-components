import styled from 'styled-components'

export const Photo = styled.img`
    border-radius: ${props => props.theme.radii.round};
    background-color:${props => props.theme.colors.muted};
    max-width: 150px;
    text-align: center;
    margin: 0 auto;
    object-fit: contain;
    object-position: left bottom;
`;

export const Name = styled.p`
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight:  ${props => props.theme.fontWeights.bold};
`;

export const Info = styled.p`
    font-size: ${props => props.theme.fontSizes.m};
    color: ${props => props.theme.colors.secondary}
`;