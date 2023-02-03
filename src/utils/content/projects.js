import { CgFigma } from "react-icons/cg";
import { BiStoreAlt } from "react-icons/bi";
import { FaStickyNote } from "react-icons/fa";
import { MdEngineering, MdOutlineShopTwo } from "react-icons/md";
import { SiScaleway } from "react-icons/si";
import { RiAppsFill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { BsAppIndicator } from "react-icons/bs";
const projects = {
  projects: [
    {
      title: "Perks",
      index: 0,
      platform: ["M"],
      box1: {
        title: "Intro",
        content:
          "Designed with interactive UI/UX patterns, Perks aims to connect people looking for services, with respective service providers.",
        icon: <FaStickyNote color="rgb(10, 235, 123)" size="22" />,
        iconBox: "rgb(3, 90, 64)",
      },
      box2: {
        title: "Two Individual Apps",
        content:
          "Built using flutter, this consists of two apps, for service providers and seekers.",
        icon: <MdOutlineShopTwo color="rgb(10, 235, 123)" size="22" />,
        iconBox: "rgb(3, 90, 64)",
      },
      box3: {
        title: "Functional Perspective",
        content:
          "Similar to the concept of Uber, but different from a functional perspective.",
        icon: <AiFillSetting color="rgb(10, 235, 123)" size="22" />,
        iconBox: "rgb(3, 90, 64)",
      },
      box4: {
        title: "A Scalable Application",
        content:
          "An application built by HashBaze, which is currently deployed in the real world and going strong.",
        icon: <SiScaleway color="rgb(10, 235, 123)" size="22" />,
        iconBox: "rgb(3, 90, 64)",
      },
      grad: "linear-gradient(to bottom, rgba(17, 173, 126, 0.9), rgba(17, 173, 126, 0.9)",
      backGrad:
        "linear-gradient(to bottom, rgba(17, 173, 126, 0.9), rgba(17, 173, 126, 0.8))",
      titleColor: "rgb(0, 0, 0)",
      contentColor: "rgb(0, 0, 0)",
      link: "https://www.behance.net/gallery/159513969/Perks-Appointment-Scheduling-App",
    },
    {
      title: "MyLawyer",
      index: 1,
      platform: ["M", "W"],
      box1: {
        title: "Intro",
        content:
          "An app for all your legal problems. MyLawyer.lk is a service-based app used for providing legal advice to clients while safeguarding their identity.",
        icon: <FaStickyNote color="rgba(141, 68, 67, 1)" size="22" />,
        iconBox: "rgb(249, 178, 160)",
      },
      box2: {
        title: "Technologies Used",
        content: "A scalable solution built using flutter and firebase.",
        icon: <RiAppsFill color="rgba(141, 68, 67, 1)" size="22" />,
        iconBox: "rgb(249, 178, 160)",
      },
      box3: {
        title: "Functional Perspective",
        content:
          "The flutter app works in close tandem with the web-based admin dashboard built with ReactJs.",
        icon: <AiFillSetting color="rgba(141, 68, 67, 1)" size="22" />,
        iconBox: "rgb(249, 178, 160)",
      },
      box4: {
        title: "UI/UX",
        content:
          "From UI/UX concepts to all the complex database structures were built in-house to provide the clients with the best user experience possible.",
        icon: <CgFigma color="rgba(141, 68, 67, 1)" size="22" />,
        iconBox: "rgb(249, 178, 160)",
      },
      grad: "linear-gradient(to bottom, rgba(141, 68, 67, 1), rgba(120, 44, 50, 0.9))",
      backGrad:
        "linear-gradient(to bottom, rgba(141, 68, 67, 0.9), rgba(120, 44, 50, 0.7))",
      titleColor: "rgba(255, 255, 255, 1)",
      contentColor: "rgba(249, 178, 160, 1)",
      link: "https://www.behance.net/gallery/159296419/MyLawyerLK",
    },
    {
      title: "GymBuddy",
      index: 2,
      platform: ["M"],
      box1: {
        title: "Intro",
        content:
          "Plan your daily workout routines with GymBuddy. The GymBuddy is your friend/coach to get you on your way to becoming healthy and fit.",
        icon: <FaStickyNote color="rgb(255, 255, 255)" size="22" />,
        iconBox: "rgb(214, 129, 49)",
      },
      box2: {
        title: "Functional Perspective",
        content:
          "The state-of-the-art ML models will encourage users to follow a set of videos suited for that particular user.",
        icon: <AiFillSetting color="rgb(255, 255, 255)" size="22" />,
        iconBox: "rgb(214, 129, 49)",
      },
      box3: {
        title: "Engineering Challenges",
        content:
          "The ability to store a lot of video content is an engineering challenge undertaken by the HashBaze team.",
        icon: <MdEngineering color="rgb(255, 255, 255)" size="22" />,
        iconBox: "rgb(214, 129, 49)",
      },
      box4: {
        title: "Why It Is Unique",
        content:
          "Users getting reward points by following fitness sessions of GymBuddy was a cool feature.",
        icon: <BsAppIndicator color="rgb(255, 255, 255)" size="22" />,
        iconBox: "rgb(214, 129, 49)",
      },
      grad: "linear-gradient(to bottom, rgba(234, 73, 37, 0.9), rgba(234, 73, 37, 0.9))",
      backGrad:
        "linear-gradient(to bottom, rgba(16, 16, 16, 0.9), rgba(16, 16, 16, 0.9))",
      titleColor: "rgba(255, 255, 255, 1)",
      contentColor: "rgba(255, 255, 255, 0.7)",
      link: "",
    },
    {
      title: "FamiLife",
      index: 3,
      platform: ["M"],
      box1: {
        title: "Intro",
        content:
          "A Social Media app to connect with friends and family around the world. This app helps to keep your loved ones at your fingertips even though you might be physically apart.",
        icon: <FaStickyNote color="rgb(255, 255, 255)" size="22" />,
        iconBox: "rgb(239, 68, 74)",
      },
      box2: {
        title: "Why It Is Unique",
        content:
          "Implemented a unique chat system, built in-house at HashBaze where everyone can chat with each other through an end-to-end encrypted system.",
        icon: <BsAppIndicator color="rgb(255, 255, 255)" size="22" />,
        iconBox: "rgb(239, 68, 74)",
      },
      box3: {
        title: "Engineering Challenges",
        content:
          "Providing instance notifications irrespective of the user base, and managing high throughput in busy times are some special features of the app.",
        icon: <MdEngineering color="rgb(255, 255, 255)" size="22" />,
        iconBox: "rgb(239, 68, 74)",
      },
      box4: {
        title: "UI/UX",
        content: "Unique UI/UX concept to match the theme and functionality.",
        icon: <CgFigma color="rgb(255, 255, 255)" size="22" />,
        iconBox: "rgb(239, 68, 74)",
      },
      grad: "linear-gradient(to bottom, rgba(99, 151, 243, 1), rgba(99, 151, 243, 1))",
      backGrad:
        "linear-gradient(to bottom, rgba(32, 92, 185, 1),rgba(99, 151, 243, 1))",
      titleColor: "rgba(0, 0, 0, 1)",
      contentColor: "rgba(0, 0, 0, 1)",
      link: "",
    },
    {
      title: "PersonPilot",
      index: 4,
      platform: ["M"],
      box1: {
        title: "Intro",
        content:
          "PersonPilot is a reminder app to match an individual's emotions.",
        icon: <FaStickyNote color="rgb(255, 255, 255)" size="22" />,
        iconBox: "rgb(2, 119, 106)",
      },
      box2: {
        title: "Technologies Used",
        content:
          "This application uses an ML model and a database with previously collected emotions, related responses, side effects, and benefits to generate reminders for a given user.",
        icon: <RiAppsFill color="rgb(255, 255, 255)" size="22" />,
        iconBox: "rgb(2, 119, 106)",
      },
      box3: {
        title: "Why It Is Unique",
        content:
          "This app was built mainly focusing on the optimization of a ML algorithm.",
        icon: <BsAppIndicator color="rgb(255, 255, 255)" size="22" />,
        iconBox: "rgb(2, 119, 106)",
      },
      box4: {
        title: "A Cross Platform App",
        content: "Built for both IOS and Android phones using flutter.",
        icon: <BiStoreAlt color="rgb(255, 255, 255)" size="22" />,
        iconBox: "rgb(2, 119, 106)",
      },
      grad: "linear-gradient(to bottom, rgba(2, 76, 99, 1), rgba(2, 76, 99, 1))",
      backGrad:
        "linear-gradient(to bottom, rgba(0, 57, 79, 1), rgba(0, 57, 79, 1))",
      titleColor: "rgba(255, 255, 255, 0.9)",
      contentColor: "rgba(255, 255, 255, 0.8)",
      link: "",
    },
  ],
};

export default projects;
