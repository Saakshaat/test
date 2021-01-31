import styles from "./footer.module.scss";
import utilStyles from "../styles/utils.module.scss";

import Typerwriter from "./typewriter";

import { AnimatedSocialIcon } from "react-animated-social-icons";

export default function Footer() {
  return (
    <footer className={`${styles.socialsFooter} ${utilStyles.padTopMd}`}>
      <AnimatedSocialIcon
        brandName="github"
        url="https://github.com/saakshaat"
        animation="grow"
        defaultColor="#bd2c00"
        hoverColor="black"
        width="3em"
        animationDuration={0.2}
        style={{ padding: "3em" }}
      />
      <AnimatedSocialIcon
        brandName="linkedin"
        url="https://linkedin.com/in/saakshaat"
        animation="grow"
        defaultColor="#0e76a8"
        hoverColor="black"
        width="3em"
        animationDuration={0.2}
        style={{ padding: "3em" }}
      />
      <AnimatedSocialIcon
        brandName="instagram"
        url="https://www.instagram.com/icog_pizza/"
        animation="grow"
        defaultColor="#bc2a8d"
        hoverColor="black"
        width="3em"
        animationDuration={0.2}
        style={{ padding: "3em" }}
      />
      <AnimatedSocialIcon
        brandName="facebook"
        url="https://www.facebook.com/saakshaat.sama"
        animation="grow"
        defaultColor="#3b5998"
        hoverColor="black"
        width="3em"
        animationDuration={0.2}
        style={{ padding: "3em" }}
      />
      <br />
      <br />
      <br />
      <Typerwriter
        className={styles.typewriter}
        elements={[
          "Waffles over pancakes",
          "I'm trilingual",
          "Benny Harvey R.I.P.",
          "Monkey never cramp",
          "My name means 'In the flesh'",
          "fav color: #800080",
          "I suck at frontend :p",
        ]}
        cursorColor={"black"}
      />
    </footer>
  );
}
