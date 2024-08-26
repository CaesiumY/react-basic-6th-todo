import styled from "styled-components";

const RootLayout = ({ children }) => {
  return (
    <RootLayoutMain>
      <RootLayoutContents>{children}</RootLayoutContents>
    </RootLayoutMain>
  );
};

export default RootLayout;

const RootLayoutMain = styled.main`
  background-color: #f7f6f9;
`;

const RootLayoutContents = styled.div``;
