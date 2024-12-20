import HeaderText from "../../shared/header-text";
import HomePageSearchBar from "./HomePageSearchBar";
import "./index.css";

export default function HomePageHeader(){
    return (
        <section className="homepage__wrapper">
            <HeaderText/>
            <HomePageSearchBar/>
        </section>
    )
}