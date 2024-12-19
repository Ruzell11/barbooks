import HomePageFilterBar from "../components/homepage-filter-bar";
import HomePageHeader from "../components/homepage-header";

export default function HomePage(){
    return (
       <main className="homepage__body">
        <HomePageHeader/>
        <HomePageFilterBar/>
       </main>
    )
}