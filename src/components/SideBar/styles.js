import styled from "styled-components";

export const Aside = styled.aside`
    height: 100%;
    background-color: white;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, .3);
    position: fixed;
    z-index: 2;

    display: ${props => props.show ? "block" : "none"};

    .aside-title {
        padding: 31px 40px 34px 45px;
        color: #0075FF;
        font-size: 20px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 14px;
        
        svg {
            font-size: 30px;
        }

        .sidebar-switch {
            cursor: pointer;
            color: black;
            font-size: 26px;
        }
    }

    .aside-functions ul {
        display: flex;
        flex-direction: column;
        gap: 11px;

        small {
            padding-left: 30px;
            font-size: 10px;
            color: #ADB4C2;
        }
    }

    .aside-functions {
        display: flex;
        flex-direction: column;
        gap: 45px;
    }

    @media (max-width: 800px) {
        .aside-title {
            padding: 24px 20px 34px 20px;
            font-size: 16px;
            gap: 10px;

            svg {
                font-size: 26px;
            }
        }
    }
`;

export const AsideFunction = styled.div`
    display: flex;
    gap: 10px;
    padding: 13px 0px 13px 30px;
    color: ${props => props.selected ? "#0075FF" : "#A0A5B2"};
    font-size: 14px;
    position: relative;
    background: ${props => props.selected ? "linear-gradient(to right, rgba(0, 117, 255, .15), rgba(0, 117, 255, 0));" : "linear-gradient(to right, rgba(160, 165, 178, .2), rgba(0, 117, 255, 0));"};
    cursor: pointer;

    &::after {
        content: "";
        position: absolute;
        background-color: ${props => props.selected ? "#0075FF" : "#A0A5B2"};
        inset: 0 99% 0 0;
    }
`;