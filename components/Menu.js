import React,{useState ,useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
// import JSToolkits from "../pages/jstoolkits";
// import WebDev from "../pages/webdev";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Links from "./navbar/Links";
// import Landingpage from "./Landingpage";
// import Ambassador from "../pages/ambassador";
// import Programs from "../pages/programs";
// import Error404 from "./Error404";

const NavigationBar = () => {
  
  const [menuopen,setmenuopen]=useState(false);
  useEffect(()=>{
    Aos.init({delay:900});
  },[])
  return (
    <>
      {/* <BrowserRouter> */}
        {/* <nav>
          <div className="navWide">
            <div className="wideDiv">
              <Links />
            </div>
          </div>

          <div
            className="navNarrow"
            onClick={function () {
              let narrowLinks = document.querySelector(".narrowLinks");
              narrowLinks.classList.toggle("hidden");
              let i = document.getElementById("icon");
              if(!menuopen){
                  i.classList.replace("fa-bars","fa-times");
                  setmenuopen(true);
              }else{
                  i.classList.replace("fa-times","fa-bars");
                  setmenuopen(false);
              }
              
            }}
          >
            <i id="icon" className="fa fa-bars fa-2x" />
            <div className="narrowLinks hidden">
              <Links />
            </div>
          </div>
        </nav> */}


        <div className="nav-version" data-aos="fade-in">
          <h2>
            Introducing Dev Empire v2! We&apos;re currently in early release 🚀
          </h2>
        </div>

        <div className="navigation">
          <div className="github-button">
            <a
              className="github"
              href="https://github.com/swapnilsparsh/DevEmpire"
              target="_blank"
              rel="noreferrer"
            >
              <img src="../assets/share-img/Github-share.png" alt="Github-Share-Button" />
            </a>
          </div>
          <div className="product-hunt-button ">
            <a
              className="product-hunt"
              href="https://www.producthunt.com/posts/developer-empire?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-developer-empire"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=315221&theme=light"
                alt="Developer Empire - All in one place where you can find all the resources | Product Hunt"
              />
            </a>
          </div>
          <div className="twitter-button">
            <a
              className="twitter"
              href="https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20website%20having%20a%20collection%20of%20all%20the%20campus%20ambassador%20and%20fellowship%20programs&url=https://devempire.netlify.app&via=swapnilsparsh"
              target="_blank"
              rel="noreferrer"
            >
              <img src="../assets/share-img/Twitter-share.png" alt="Twitter-Share-Button" />
            </a>
          </div>
        </div>

        {/* <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/ambassador" component={Ambassador} />
          <Route exact path="/landingpage" component={Landingpage} />
          <Route exact path="/programs" component={Programs} />
          <Route exact path="/webdev" component={WebDev} />
          <Route exact path="/jstoolkits" component={JSToolkits} />
          <Route path="*" component={Error404} />
        </Switch> */}
      {/* </BrowserRouter> */}
    </>
  );
};

export default NavigationBar;
