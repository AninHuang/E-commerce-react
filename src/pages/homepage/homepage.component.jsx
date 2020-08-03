import React from "react";

import Directory from "../../components/directory/directory.component";

// import "./homepage.styles.scss";

import { HomePageContainer } from "./homepage.styles";

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

// const HomePage = () => (
//   <div className="homepage">
//     <Directory />
//   </div>
// );

export default HomePage;
