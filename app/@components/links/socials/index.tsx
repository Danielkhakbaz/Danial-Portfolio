import { ReactElement } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import {
  FaEnvelope,
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaSpotify,
} from "react-icons/fa6";

type SocialsType = {
  link: string;
  name: string;
  logo: ReactElement;
};

export const socials: SocialsType[] = [
  {
    link: "mailto:danialkhakbaz.dk@gmail.com",
    name: "Email address",
    logo: (
      <FaEnvelope
        style={{
          fontSize: "30px",
          color: "#D3D3D3",
          transition: "opacity 0.2s",
        }}
      />
    ),
  },
  {
    link: "https://t.me/danielkhakbaz",
    name: "Telegram account",
    logo: (
      <FaTelegramPlane
        style={{
          fontSize: "30px",
          color: "#0088CC",
          transition: "opacity 0.2s",
        }}
      />
    ),
  },
  {
    link: "https://twitter.com/danielkhakbaz",
    name: "Twitter account",
    logo: (
      <FaXTwitter
        style={{
          fontSize: "30px",
          color: "#1DA1F2",
          transition: "opacity 0.2s",
        }}
      />
    ),
  },
  {
    link: "https://www.instagram.com/danielkhakbaz/",
    name: "Instagram page",
    logo: (
      <FaInstagram
        style={{
          fontSize: "30px",
          color: "#DD2A7B",
          transition: "opacity 0.2s",
        }}
      />
    ),
  },
  {
    link: "https://github.com/danielkhakbaz",
    name: "Github page",
    logo: (
      <FaGithub
        style={{
          fontSize: "30px",
          color: "#818288",
          transition: "opacity 0.2s",
        }}
      />
    ),
  },
  {
    link: "https://www.linkedin.com/in/danielkhakbaz/",
    name: "Linkedin page",
    logo: (
      <FaLinkedinIn
        style={{
          fontSize: "30px",
          color: "#0077B5",
          transition: "opacity 0.2s",
        }}
      />
    ),
  },
  {
    link: "https://open.spotify.com/user/3p0q2i0j7g4e0vo9hc0kkpmov?si=22691cd459ad4736&nd=1",
    name: "Spotify page",
    logo: (
      <FaSpotify
        style={{
          fontSize: "30px",
          color: "#1ED760",
          transition: "opacity 0.2s",
        }}
      />
    ),
  },
];
