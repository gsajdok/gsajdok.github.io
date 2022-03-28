import {useEffect, useState} from "react";
import {ConsoleWindow} from "./ConsoleWindow";
import {Welcome} from "./Welcome";
import {AboutMe} from "./AboutMe";
import {Header} from "./Header";
import {Projects} from "./Projects";
import {Contact} from "./Contact";
import {Footer} from "./Footer";
import {Copyright} from "./Copyright";


export const App = () => {
  return (
      <>
          <Header/>
          <Footer/>
          <Welcome/>
          <AboutMe/>
          <Projects/>
          {/*<Contact/>*/}
          <Copyright/>
      </>
  );
}