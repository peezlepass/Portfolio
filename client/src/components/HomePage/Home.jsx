import React from "react";
import Puzzle from "./Puzzle";
import { useEffect, useState } from "react";

const speed = 10;

export default function Home() {
  const [position, setPosition] = useState({ x: 232, y: 154 });

  useEffect(() => {
    const keyHandler = (e) => {
      if (e.key === "ArrowDown") {
        setPosition((prevPosition) => {
          return { ...prevPosition, y: prevPosition.y + speed };
        });
      }
      if (e.key === "ArrowUp") {
        setPosition((prevPosition) => {
          return { ...prevPosition, y: prevPosition.y - speed };
        });
      }

      if (e.key === "ArrowLeft") {
        setPosition((prevPosition) => {
          return { ...prevPosition, x: prevPosition.x - speed };
        });
      }

      if (e.key === "ArrowRight") {
        setPosition((prevPosition) => {
          return { ...prevPosition, x: prevPosition.x + speed };
        });
      }
    };

    document.addEventListener("keydown", keyHandler);
    //Remove the eventListener on the Main Page when we unmount,
    //To prevent double Listening when we remount
    //We remount every time when we navigate to the Home Page
    return () => {
      document.removeEventListener("keydown", keyHandler);
    };
  }, []);

  return (
    <>
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
      <div className="flex">
        <div className="grow">
          <div className="relative">
            <Puzzle
              color="#92d3f5"
              className="absolute top-4 left-[124px]"
            ></Puzzle>
            <Puzzle color="#92d3f5" className="absolute top-4 left-4"></Puzzle>
            <Puzzle
              color="#92d3f5"
              className="absolute top-[124px] left-[16px]"
            ></Puzzle>
            <Puzzle
              color="#92d3f5"
              className="absolute"
              style={{ left: position.x, top: position.y }}
            ></Puzzle>
          </div>
        </div>
        <div className="w-64">
          <ul>
            <li className="w-20 h-20 bg-yellow-500 mx-auto mb-5 mt-5">
              Project 1
            </li>
            <li className="w-20 h-20 bg-yellow-400 mx-auto mb-5">Project 2</li>
            <li className="w-20 h-20 bg-yellow-300 mx-auto mb-5">Project 3</li>
          </ul>
        </div>
      </div>
    </>
  );
}
