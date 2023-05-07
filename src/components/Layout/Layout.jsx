import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ColorRing } from 'react-loader-spinner'
import { Header, Nav, StyledLink, LoaderContainer } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Header>
      <Suspense
        fallback={
          <LoaderContainer>
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          </LoaderContainer>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;