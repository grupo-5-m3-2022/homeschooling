import styled from "styled-components"

export const DashboardContainer = styled.div`
    display: flex;
    background-color: #F0F7FD;

    .dashboard-content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
`

export const DashboardAside = styled.aside`
    height: 100vh;
    background-color: white;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, .3);
    position: relative;
    z-index: 1;

    .aside-title {
        padding: 34px 61px 34px 16px;
        color: #0075FF;
        font-size: 20px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 14px;
        
        svg {
            font-size: 30px;
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
`

export const DashboardFunction = styled.div`
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
`

export const DashboardHeader = styled.header`
    padding: 25px 45px;
    background-color: #FFFDFD;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-container {
        display: flex;
        align-items: center;
        gap: 12px;

        svg {
            background-color: #F2F8FF;
            color: #93B0C8;
            padding: 5px;
            font-size: 28px;
            border-radius: 50%;
        }
    }

    .header-user {
        background-color: #F2F8FF;
        display: flex;
        align-items: center;
        gap: 15px;

        svg {
            background-color: #A0A5B2;
            color: white;
            font-size: 38px;
        }
    }
`