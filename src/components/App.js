import {useEffect, useState} from "react";
import {ConsoleWindow} from "./ConsoleWindow";
import {Welcome} from "./Welcome";
import {AboutMe} from "./AboutMe";
import {Header} from "./Header";
import {Projects} from "./Projects";
import {Contact} from "./Contact";
import {Footer} from "./Footer";

export const App = () => {
  return (
      <>
          <Header/>
          <Footer/>
          <Welcome/>
          <AboutMe/>
          <Projects/>
          {/*<Contact/>*/}

      </>
  );
}