import React, { Suspense } from 'react';
import LoadingSpinner from '../components/spinner';

// Lazy load the components
const HomePageHeader = React.lazy(() => import("../components/home-page/header"));
const HomePageFilterBar = React.lazy(() => import("../components/home-page/filter-bar"));
const HomePageGameList = React.lazy(() => import("../components/home-page/game-list"));
const HomePageProvider = React.lazy(() => import("../components/home-page/store"));


export default function HomePage() {
    return (
        <main className="homepage__body">
            <Suspense fallback={<LoadingSpinner />}>
                <HomePageProvider>
                    <HomePageHeader />
                    <HomePageFilterBar />
                    <HomePageGameList />
                </HomePageProvider>
            </Suspense>
        </main>
    );
}
