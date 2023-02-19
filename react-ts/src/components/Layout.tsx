import { Footer } from "./Footer";
import { Header } from "./Header/Header";
import styled from "styled-components";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
