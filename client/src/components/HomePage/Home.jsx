import React from "react";
import Puzzle from "./Puzzle";
// import { useEffect, useState } from "react";

// const speed = 10;

export default function Home() {
  // const [position, setPosition] = useState({ x: 232, y: 154 });

  // useEffect(() => {
  //   const keyHandler = (e) => {
  //     if (e.key === "ArrowDown") {
  //       setPosition((prevPosition) => {
  //         return { ...prevPosition, y: prevPosition.y + speed };
  //       });
  //     }
  //     if (e.key === "ArrowUp") {
  //       setPosition((prevPosition) => {
  //         return { ...prevPosition, y: prevPosition.y - speed };
  //       });
  //     }

  //     if (e.key === "ArrowLeft") {
  //       setPosition((prevPosition) => {
  //         return { ...prevPosition, x: prevPosition.x - speed };
  //       });
  //     }

  //     if (e.key === "ArrowRight") {
  //       setPosition((prevPosition) => {
  //         return { ...prevPosition, x: prevPosition.x + speed };
  //       });
  //     }
  //   };

  // document.addEventListener("keydown", keyHandler);
  //Remove the eventListener on the Main Page when we unmount,
  //To prevent double Listening when we remount
  //We remount every time when we navigate to the Home Page
  //   return () => {
  //     document.removeEventListener("keydown", keyHandler);
  //   };
  // }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="my-5">
        <p className="text-center text-6xl">
          Hi there! I am <span className="font-bold">Ellina</span> aka{" "}
          <span className="font-bold">peezlepass</span>
          <Puzzle
            color="#83C5BE"
            width="50"
            height="50"
            className="inline-block mx-0.5"
          ></Puzzle>
          and I am <span className="font-bold">full stack</span> developer based
          in <span className="font-bold">Melbourne</span>.
        </p>
        <h1 className="text-center text-xl pt-6">
          Use your keyboard to move a puzzle and choose a project you want to
          visit.
        </h1>
      </div>

      <ul className="flex font-pacifico text-poster text-2xl ">
        <li className="flex w-48 h-64 bg-black mx-auto mb-5 items-end justify-center pb-3">
          Minesweeper
        </li>
        <li className="flex w-48 h-64 bg-black mx-auto mb-5 items-end justify-center pb-3">
          Project Solo
        </li>
        <li className="flex w-48 h-64 bg-black mx-auto mb-5 items-end justify-center pb-3">
          Todo
        </li>
      </ul>
    </div>
  );
}
