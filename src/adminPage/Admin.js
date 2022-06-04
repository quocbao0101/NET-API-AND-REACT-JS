import styled from "styled-components/macro";
import { Outlet } from "react-router-dom";
import Navigation from "../pages/AdminNav";


const Admin = () => {
  return (
    <div>
        <Container>
            <Navigation>
                <Content>
                    <Outlet />
                </Content>
            </Navigation>
        </Container>
    </div>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  margin-top: 65px;
`
export default Admin;
