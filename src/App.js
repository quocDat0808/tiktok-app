import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FollowProvider } from '~/context/FollowContext';
import DefaultLayout from '~/layouts/DefaultLayout/DefaultLayout';
import routes from '~/routes';
import './App.css';

function App() {
    return (
        <FollowProvider>
            <BrowserRouter>
                <Routes>
                    {routes.map((route) => {
                        const Page = route.component;

                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={
                                    <DefaultLayout>
                                        <Page />
                                    </DefaultLayout>
                                }
                            />
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </FollowProvider>
    );
}

export default App;
