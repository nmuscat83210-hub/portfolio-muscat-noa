import './App.css'
import { Toaster } from "@/components/ui/toaster"
import { pagesConfig } from './pages.config'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { I18nProvider } from '@/lib/i18n';
import ScrollToTop from '@/lib/ScrollToTop';

const { Pages, Layout, mainPage } = pagesConfig;
const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = mainPageKey ? Pages[mainPageKey] : <></>;

const LayoutWrapper = ({ children, currentPageName }) => Layout ?
  <Layout currentPageName={currentPageName}>{children}</Layout>
  : <>{children}</>;

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={
      <LayoutWrapper currentPageName={mainPageKey}>
        <MainPage />
      </LayoutWrapper>
    } />
    {Object.entries(Pages).map(([path, Page]) => (
      <Route
        key={path}
        path={`/${path}`}
        element={
          <LayoutWrapper currentPageName={path}>
            <Page />
          </LayoutWrapper>
        }
      />
    ))}
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

function App() {
  return (
    <I18nProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <AppRoutes />
      </Router>
      <Toaster />
    </I18nProvider>
  )
}

export default App
