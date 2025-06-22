import SideBar from "./SideBar";
import Header from "./Header";
import {useState} from "react";
import Footer from "./Footer";

const Dashboard = (props) => {
    const [showSideBar, setShowSideBar] = useState("page-header");

    const onClickSideBarTop = () => {
        console.log("clicked")
        if (showSideBar === "page-header close_icon") {
            setShowSideBar("page-header")
        } else {
            setShowSideBar("page-header close_icon")
        }
    }

    return (
            <div className={"page-wrapper compact-wrapper"} id={"pageWrapper"}>
                <Header showSideBar={showSideBar}/>
                <div className="page-body-wrapper">
                    <SideBar onClickTopBar={onClickSideBarTop}/>
                    {props.children}
                </div>
                <Footer/>
            </div>
    )
}

export default Dashboard;
