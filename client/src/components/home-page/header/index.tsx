import HomePageSearchBar from "./HomepageSearchBar";
import HomePageTexts from "./HomepageTexts";
import "./index.css";

export default function HomePageHeader(){
    return (
        <section className="homepage__wrapper">
            <HomePageTexts/>
            <HomePageSearchBar/>
        </section>
    )
}