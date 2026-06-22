
import tech1p from "../assets/tech1p.jpg"
import tech1l from "../assets/tech1l.jpg"
import tech2p from "../assets/tech2p.jpg"
import tech12l from "../assets/tech2l.jpg"
import tech3p from "../assets/tech3p.jpg"
import tech3l from "../assets/tech3l.jpg"



export const technologydata = [
  {
    id: 1,
    role: "THE TERMINOLOGY…",
    name: "LAUNCH VEHICLE",
    bio: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation.",
    images: {
      portrait:
        tech1p,
      landscape:
        tech1l,
    },
  },
  {
    id: 2,
    name: "SPACEPORT",
    role: "THE TERMINOLOGY…",
    bio:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to a seaport for ships or an airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    images: {
      portrait:
        tech2p,
      landscape:
        tech12l,
    },
  },
  {
    id: 3,
    name: "SPACE CAPSULE",
    role: "THE TERMINOLOGY…",
    bio:
      "A space capsule is an often-manned spacecraft that uses a blunt-body reentry capsule to reenter Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    images: {
      portrait:tech3p,
      landscape:tech3l
    },
  },
];
