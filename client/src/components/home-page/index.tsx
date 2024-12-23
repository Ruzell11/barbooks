import React, { Suspense } from 'react';
import LoadingSpinner from '../shared/spinner';
import ClearFilter from './game-list/ClearFilter';


// Lazy load the components
const HomePageHeader = React.lazy(() => import("./header/index"));
const HomePageFilterBar = React.lazy(() => import("../home-page/filter-bar"));
const HomePageGameList = React.lazy(() => import("../home-page/game-list"));
const HomePageProvider = React.lazy(() => import("../home-page/store"));


export default function HomePage() {
    return (
        <main className="homepage__body">
            <Suspense fallback={<LoadingSpinner />}>
                <HomePageProvider>
                    <HomePageHeader />
                    <HomePageFilterBar />
                    <ClearFilter/>
                    <HomePageGameList />
                </HomePageProvider>
            </Suspense>
        </main>
    );
}
