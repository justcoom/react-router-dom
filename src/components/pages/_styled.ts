import styled from "styled-components";

export const NavWrapper = styled.div`
    margin-left: 10px;
    font-size: 40px;

    & > a {
        text-decoration: none;
        color: #1e3786;
    }

    & > a.active {
        text-decoration: none;
        color: #03eaff;
    }

    & > a:hover {
        color: steelblue;
    }
`
