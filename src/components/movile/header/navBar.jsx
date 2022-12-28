import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  position: fixed;
  top: 15vh;
  right: ${(props) => (props.open ? "0" : "-100%")};
  width: 100%;
  height: 90vh;
  transition: all 0.3s linear;

  a {
    padding: 0.5rem 0.8rem;
    color: grey;
    text-decoration: none;
  }
`;
