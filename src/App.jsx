import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsPage from "./about_us/AboutUs";
import TermsOfUsePage from "./terms_of_use/TermsOfUse";
import PrivacyPolicyPage from "./privacy_policy/PrivacyPolicy";
import NotFoundPage from "./not_found/not_found";
import HomePage from "./home/Home";
import Layout from "./components/layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutUsPage />
            </Layout>
          }
        />
        <Route
          path="/terms"
          element={
            <Layout>
              <TermsOfUsePage />
            </Layout>
          }
        />
        <Route
          path="/privacy"
          element={
            <Layout>
              <PrivacyPolicyPage />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFoundPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
