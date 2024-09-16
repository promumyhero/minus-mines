import { 
    Refine,
    GitHubBanner, 
    WelcomePage,
    Authenticated, 
} from '@refinedev/core';
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { Home, ForgotPassword, Login, Register } from './pages';
import { AuthPage,ErrorComponent
,useNotificationProvider
,ThemedLayoutV2
,ThemedSiderV2} from '@refinedev/antd';
import "@refinedev/antd/dist/reset.css";
import { authProvider, dataProvider, liveProvider } from './providers';
import { App as AntdApp } from "antd"
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import routerBindings, { NavigateToResource, CatchAllNavigate, UnsavedChangesNotifier, DocumentTitleHandler } from "@refinedev/react-router-v6";
import Layout from './components/layout';





function App() {
    

    
    
    return (
        <BrowserRouter>
        <GitHubBanner />
        <RefineKbarProvider>
            <AntdApp>
            <DevtoolsProvider>
                <Refine 
                        dataProvider={dataProvider}
                        liveProvider={liveProvider}
                        notificationProvider={useNotificationProvider}
                        routerProvider={routerBindings}
                        authProvider={authProvider} 
                        options={{
                            syncWithLocation: true,
                            warnWhenUnsavedChanges: true,
                            useNewQueryKeys: true,
                                projectId: "qoruZQ-pZ7jjf-YBYcqZ",
                            liveMode: "auto",
                    }}
                >
                        <Routes>
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/forgotPassword" element={<ForgotPassword />} />
                            <Route
                                element={<Authenticated 
                                    key="authenticated-layout"
                                    fallback={<CatchAllNavigate 
                                        to="/login" />}
                                >
                                <Layout>
                                    <Outlet />
                                </Layout>
                                </Authenticated>
                                }>
                                    <Route index element={<Home />} />


                            </Route>
                        </Routes>
                    <RefineKbar />
                    <UnsavedChangesNotifier />
                    <DocumentTitleHandler />
                </Refine>
            <DevtoolsPanel />
            </DevtoolsProvider>
            </AntdApp>
        </RefineKbarProvider>
        </BrowserRouter>
      );
};

export default App;
