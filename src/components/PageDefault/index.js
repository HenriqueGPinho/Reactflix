import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;

`;

function PageDefault(props) {
  const { children } = props;

  return (
    <>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </>

  );
}

PageDefault.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.array.isRequired,
};

export default PageDefault;
