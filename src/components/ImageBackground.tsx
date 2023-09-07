import BgMobile from "../assets/images/illustration-sign-up-mobile.svg";
import BgDesktop from "../assets/images/illustration-sign-up-desktop.svg";

export const ImageBackground = () => {
  return (
    <picture>
      <source
        srcSet={BgMobile} 
        media="(max-width: 767px)"
      />
      <img
        src={BgDesktop}
        alt="Imagen desktop"
      />
    </picture>
  );
};
