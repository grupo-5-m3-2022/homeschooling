import styled from "styled-components";

export const HeaderStyle = styled.header`
    padding: 25px 45px;
    background-color: #FFFDFD;
    position: sticky;
    top: 0;
    z-index: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .sidebar-switch {
        cursor: pointer;
        font-size: 26px;
    }

    @media (max-width: 800px) {
        padding: 15px 20px;

        .sidebar-switch {
            display: block;
        }
    }

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
        padding: 7px 12px;
        border-radius: 5px;
        width: 230px;
        height: 60px;

        h3 {
            font-weight: 400;
            font-size: 16px;
            color: #444444;
        }

        h4 {
            font-weight: 400;
            font-size: 12px;
            color: #999B9F;
        }

        svg {
            background-color: #A0A5B2;
            color: white;
            font-size: 32px;
        }
    }
`;