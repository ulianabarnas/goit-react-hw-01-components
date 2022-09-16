import styled from 'styled-components';

export const Item = styled.li`
    display: flex;
    align-items: center;
    box-shadow: ${p => p.theme.shadows.normal};
    border-radius: ${p => p.theme.radii.normal};
    padding: ${p => p.theme.space[3]}px;

    :not(:last-child) {
        margin-bottom: ${p => p.theme.space[4]}px;
    }
`

export const Status = styled.span`
    display: inline-block;
    background-color: ${p => {
        return p.isOnline
        ? p.theme.colors.online 
        : p.theme.colors.offline
    }};
    border-radius: ${p => p.theme.radii.round};
    width: 14px;
    height: 14px;
    color: #11b61c;
`

export const Avatar = styled.img`
    background-color: ${p => p.theme.colors.muted};
    margin: 0 10px;
    border-radius: ${p => p.theme.radii.normal};
`

export const Name = styled.p`
    font-size: ${p => p.theme.fontSizes.m};
    font-weight:  ${p => p.theme.fontWeights.bold};
`