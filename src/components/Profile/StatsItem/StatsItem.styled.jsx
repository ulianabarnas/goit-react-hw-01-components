import styled from 'styled-components';

export const Item = styled.li`
    flex-basis: calc(100%/3);
    text-align: center;
    padding: ${(p) => p.theme.space[4]}px 0;

    :not(:last-child) {
        border-right: ${p => p.theme.borders.normal} 
                    ${p => p.theme.colors.secondary}
    };
`;

export const Label = styled.span`
    display: block;
    text-transform: capitalize;
    color: ${p => p.theme.colors.secondary};
    font-size: ${p => p.theme.fontSizes.s};
`;

export const Quantity = styled.span`
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};
`;