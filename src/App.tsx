import React from 'react';
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components';
import Home from './pages/Home'
import Header from './components/Header';
import LottoryTicket from './pages/LottoryTicket';

const PageCss = styled.div`
  @media (max-width:996px) {
  }
`

const App: React.FC = () => {
  return (
    <>
      <Header />
      <PageCss>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path='/lottoryTicket' element={<LottoryTicket />} />
        </Routes>
      </PageCss>
    </>
  );
}

export default App