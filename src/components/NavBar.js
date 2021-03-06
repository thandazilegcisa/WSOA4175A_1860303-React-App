import React from "react";
import {Switch, Route,NavLink} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import blogPageOne from "../pages/blogPageOne";
import blogPageTwo from "../pages/blogPageTwo";
import blogPageThree from "../pages/blogPageThree";
import blogPageFour from "../pages/blogPageFour";
import blogPageFive from "../pages/blogPageFive";
import blogPageSix from "../pages/blogPageSix";
import blogPageSeven from "../pages/blogPageSeven";
import blogPageEight from "../pages/blogPageEight";
import blogPageNine from "../pages/blogPageNine";
import blogPageTen from "../pages/blogPageTen";
import blogPageEleven from "../pages/blogPageEleven";
import blogPageTwelve from "../pages/blogPageTwelve";
import blogPageThirteen from "../pages/blogPageThirteen";
import Home from "../pages/Home"
import Blogs from "../pages/Blogs"
import About from "../pages/About"
import "../styles/NavBar.css"

class NavBar extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            isToggled: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState(prevState =>({
            isToggled: !prevState.isToggled
        }))
    }

    render(){
        return(
            <div>
                <div className="Navigation">
                    <nav className="slide" id={this.state.isToggled ? "open" : "closed"}>
                    </nav>
                    <nav id="menu" className="main-Nav" >
                        <ul>
                              <NavLink exact className="list-Item" to="/WSOA4175A_1860303-React-App/">Home</NavLink>
                              <NavLink exact className="list-Item" to="/blogs">Blogs</NavLink>
                              <NavLink exact className="list-Item" to="/about">About</NavLink>
                        </ul>
                    </nav>
                    <MenuIcon className="Hamburger" onClick={this.toggleNav}/>
                </div>
                           
                <Switch/>
                     <Route exact path="/blogPageOne" component={blogPageOne}/>
                     <Route exact path="/blogPageTwo" component={blogPageTwo}/>
                     <Route exact path="/blogPageThree" component={blogPageThree}/>
                     <Route exact path="/blogPageFour" component={blogPageFour}/>
                     <Route exact path="/blogPageFive" component={blogPageFive}/>
                     <Route exact path="/blogPageSix" component={blogPageSix}/>
                     <Route exact path="/blogPageSeven" component={blogPageSeven}/>
                     <Route exact path="/blogPageEight" component={blogPageEight}/>
                     <Route exact path="/blogPageNine" component={blogPageNine}/>
                     <Route exact path="/blogPageTen" component={blogPageTen}/>
                     <Route exact path="/blogPageEleven" component={blogPageEleven}/>
                     <Route exact path="/blogPageTwelve" component={blogPageTwelve}/>
                     <Route exact path="/blogPageThirteen" component={blogPageThirteen}/>
                     <Route exact path="/WSOA4175A_1860303-React-App/" component={Home}/>
                     <Route exact path="/blogs" component={Blogs}/>
                     <Route exact path="/about" component={About}/>
                <Switch/>
            </div>
        )
    }
}

export default NavBar;