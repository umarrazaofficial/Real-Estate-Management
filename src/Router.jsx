import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Business from './Pages/business';
import Login from './components/atoms/Login';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from './Context/authContext';
import Dashboard from './Pages/dashboard';

const Router = () => {
  function PublicRoute({ children, redirectTo, isLoggedIn }) {
    return isLoggedIn ? <Navigate to={redirectTo} /> : children;
  }

  function PrivateRoute({ children, redirectTo, isLoggedIn }) {
    return isLoggedIn ? children : <Navigate to={redirectTo} />;
  }
  const { isLoggedIn } = useContextHook(AuthContext, ['isLoggedIn']);
  // const redirectTo = allowedPages?.length > 0 ? `/${allowedPages[0]}` : '/dashboard';
  // const loadBussinessRequests = allowedPages.some(elem => elem === 'business-requests');
  // const loadBussinessStore = allowedPages.some(elem => elem === 'business-store');
  // const loadBusinessUsersDetail = allowedPages.some(elem => elem === 'users');
  // const loadDevicesDetail = allowedPages.some(elem => elem === 'devices');
  // console.log(allowedPages);
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <PrivateRoute redirectTo="/" isLoggedIn={true}>
            <Layout showTemplate={true}>
              <Dashboard />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/business"
        element={
          <PrivateRoute redirectTo="/" isLoggedIn={true}>
            <Layout showTemplate={true}>
              <Business />
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path="/sign-up"
        element={
          <PublicRoute isLoggedIn={false} redirectTo={redirectTo}>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="*"
        element={
          <PublicRoute isLoggedIn={false} redirectTo={redirectTo}>
            <Login />
          </PublicRoute>
        }
      />
    </Routes>
  );
};

export default Router;
