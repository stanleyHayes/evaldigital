import './App.css';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./utils/themes";
import {Route, Routes} from "react-router";
import {lazy, Suspense} from "react";
import Splash from "./components/shared/splash";
import {useLocation} from "react-router-dom";

const HomePage = lazy(() => import("./pages/home/home-page"));
const AboutPage = lazy(() => import("./pages/about/about-page"));
const ContactPage = lazy(() => import("./pages/contact/contact-page"));
const PortfolioPage = lazy(() => import("./pages/portfolio/portfolio-page"));
const NotFoundPage = lazy(() => import("./pages/others/not-found-page"));


function App() {
    const location = useLocation();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme={true}/>
            <Routes location={location}>
                <Route path="/">
                    <Route index={true} element={<Suspense fallback={<Splash/>}><HomePage/></Suspense>}/>
                    <Route path="us" element={<Suspense fallback={<Splash/>}><AboutPage/></Suspense>}/>
                    <Route path="contact" element={<Suspense fallback={<Splash/>}><ContactPage/></Suspense>}/>
                    <Route path="portfolio" element={<Suspense fallback={<Splash/>}><PortfolioPage/></Suspense>}/>
                    <Route path="*" element={<Suspense fallback={<Splash/>}><NotFoundPage/></Suspense>}/>
                </Route>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
