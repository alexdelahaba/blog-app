import React from "react";
import "./../styles/home.scss";
import Image from "./../assets/landing.jpg";
import { BookIcon } from "./../modules/iconsUI-module";
import { Button } from "./../modules/materialUI-module";
import Timer from "./../components/Timer";
import { useHistory } from "react-router-dom";

export default function Home() {
  let history = useHistory();

  function handleRedirect() {
    history.push("/posts");
  }
  return (
    <div className="ba-homePage">
      <div className="sideImage">
        <img src={Image} alt="Displayed in the home page" />
      </div>
      <div className="landing">
        <BookIcon />
        <h2>Blog App</h2>
        <h5>Welcome to this super react-based app to manage blogs.</h5>
        <Timer />
        <Button variant="contained" color="secondary" onClick={handleRedirect}>
          Enter
        </Button>
        <p className="author">
          Designed and developed by Alejandro Martínez De La Haba
        </p>
      </div>
    </div>
  );
}
