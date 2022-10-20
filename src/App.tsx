import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Header from "./components/Header";
import LottoryTicket from "./pages/LottoryTicket";
import Clock from "./pages/Clock";
import PdfSign from "./pages/PdfSign";
import ProtocolPage from "./pages/ProtocolPage";

const PageCss = styled.div``;

const App: React.FC = () => {
  return (
    <>
      <Header />
      <PageCss>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lottoryTicket" element={<LottoryTicket />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/pdfSign" element={<PdfSign />} />
          <Route path="/protocolPage" element={<ProtocolPage />} />
        </Routes>
      </PageCss>
    </>
  );
};

export default App;
