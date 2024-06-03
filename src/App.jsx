import React from "react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/main/navbar";
import Footer from "./components/main/footer";
import HomePage from "./pages/main/home";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import ForgotPage from "./pages/auth/forgot";
import ResetPage from "./pages/auth/reset";
import NotFoundPage from "./pages/notfound";
import TransactionPage from "./pages/transaction/transaction";
import AboutPage from "./pages/about/about";
import ProductPage from "./pages/product/product";
import ProductDetailPage from "./pages/product/detail/detail";

const DefaultLayout = ({ children }) => (
  <div>
    <NavBar />
    {children}
    <Footer />
  </div>
);

function App() {
  const location = useLocation();

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: { background: "#1A4D2E", color: "#F5EFE6" },
        }}
      />
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route
          path="/"
          element={
            <DefaultLayout>
              <HomePage />
            </DefaultLayout>
          }
        />

        <Route
          path="/about"
          element={
            <DefaultLayout>
              <AboutPage />
            </DefaultLayout>
          }
        />
        <Route path="/auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgot" element={<ForgotPage />} />
          <Route path="reset" element={<ResetPage />} />
        </Route>

        <Route
          path="/product"
          element={
            <DefaultLayout>
              <ProductPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/product/detail/:id"
          element={
            <DefaultLayout>
              <ProductDetailPage />
            </DefaultLayout>
          }
        />
        <Route path="/product/transaction/" element={<TransactionPage />} />
      </Routes>
    </>
  );
}

export default App;
