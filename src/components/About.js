import react from "react";
import logo from "../assets/logo.svg";

function About(props) {
  let imagee = props.image;
  function image1() {
    if (props.image == null) {
      imagee = "https://via.placeholder.com/215";
    } else {
      imagee = props.image;
    }
    return imagee
  }
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{props.about}</p>
    </aside>
  );
}

export default About;
