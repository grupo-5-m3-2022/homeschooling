import styled from "styled-components";

export const DashboardContainer = styled.div`
    display: flex;
    background-color: #F0F7FD;
    min-height: 100vh;
    
    .dashboard-content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    .notfound {
        display: flex;
        flex-direction: column;
        gap: 30px;
        justify-content: center;
        align-items: center;
        flex-grow: 1;

        button {
            padding: 20px 10px;
            background-color: #0075FF;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 14px;
        }
    }
`;