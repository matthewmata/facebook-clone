import Friends from "../SVG/Friends";

import Ellie from "../../images/ellie.jpeg";
import Marlene from "../../images/marlene.jpeg";
import Tess from "../../images/tess.jpeg";
import Tommy from "../../images/tommy.jpeg";
import Bill from "../../images/bill.jpeg";
import Frank from "../../images/frank.jpeg";

import Ellie_Post_1 from "../../images/ellie-post-1.jpeg";
import Marlene_Post_1 from "../../images/marlene-post-1.jpeg";
import Frank_Post_1 from "../../images/frank-post-1.jpeg";
import Tess_Post_1 from "../../images/tess-post-1.webp";
import Tommy_Post_1 from "../../images/tommy-post-1.webp";
import Bill_Post_1 from "../../images/bill-post-1.jpeg";


const FEED_ITEMS = [
  {
    name: "Ellie",
    timestamp: "1 h",
    profilePicture: Ellie,
    IconSVG: Friends,
    text: 'No Pun Intended Volume Too is too funny. My favorite pun is "A moon rock tastes better than an earthly rock because it’s meat-eor."🤣🍖',
    image: Ellie_Post_1,
    likes: 5,
    comments: 3,
    id: "ellie-1",
  },
  {
    name: "Marlene",
    timestamp: "4 h",
    profilePicture: Marlene,
    IconSVG: Friends,
    text: "Join the fireflies today. We fight today for a better tomorrow! 🪖",
    image: Marlene_Post_1,
    likes: 126,
    comments: 53,
    id: "marlene-1",
  },
  {
    name: "Frank",
    timestamp: "1 d",
    profilePicture: Frank,
    IconSVG: Friends,
    text: "I will always appreciate a great strawberry on a hot summers day! 😎🍓",
    image: Frank_Post_1,
    likes: 15,
    comments: 2,
    id: "frank-1",
  },
  {
    name: "Tess",
    timestamp: "11 h",
    profilePicture: Tess,
    IconSVG: Friends,
    text: "Morning Hikes are always worth waking up for",
    image: Tess_Post_1,
    likes: 5,
    comments: 3,
    id: "tess-1",
  },
  {
    name: "Tommy",
    timestamp: "2 d",
    profilePicture: Tommy,
    IconSVG: Friends,
    text: "Sundays are for the boys 🥃👯‍♂️",
    image: Tommy_Post_1,
    likes: 2,
    comments: 1,
    id: "tommy-1",
  },
  {
    name: "Bill",
    timestamp: "3 d",
    profilePicture: Bill,
    IconSVG: Friends,
    text: "Long Long Time - Linda Ronstadt 🎶",
    image: Bill_Post_1,
    likes: 15,
    comments: 4,
    id: "bill-1",
  },
];

export default FEED_ITEMS;
