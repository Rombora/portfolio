import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import Profile from "./profile/Profile";

// import WorkExperience from "./workExperience/WorkExperience";
// import Achievement from "./achievement/Achievement";
// import Blogs from "./blogs/Blogs";
// import Talks from "./talks/Talks";
// import Podcast from "./podcast/Podcast";
// import Twitter from "./twitter-embed/twitter";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <StackProgress />
        <Projects />
        <StartupProject />
        <Profile />
        <Footer />
        <Top />
      </div>
    );
  }
}

