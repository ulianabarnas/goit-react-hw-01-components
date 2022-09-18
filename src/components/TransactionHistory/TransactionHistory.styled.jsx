import styled from "styled-components";

export const Table = styled.table`
    display: table;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: ${p => p.theme.space[5]}px;
    box-shadow: ${p => p.theme.shadows.normal};
    border-radius:  ${p => p.theme.radii.normal};
    overflow: hidden;
    border-collapse: collapse;
` 