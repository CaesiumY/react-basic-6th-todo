import { Outlet } from "react-router-dom";
import styled from "styled-components";

// Compositional Layout - Apple
const RootLayout = () => {
  return (
    <RootLayoutMain>
      <RootLayoutContents className="dark:bg-black">
        <Outlet />
      </RootLayoutContents>
    </RootLayoutMain>
  );
};

export default RootLayout;

const RootLayoutMain = styled.main`
  background-color: #f7f6f9;
  min-height: 100vh;
`;

const RootLayoutContents = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
`;
