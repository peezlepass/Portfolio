import Puzzle from "./Puzzle";

export default function Home() {
  return (
    <div className="flex">
      <div className="bg-red-500 grow">
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
        </div>

        {/* <Puzzle color="#92d3f5"></Puzzle> */}
      </div>
      <div className="bg-green-500 w-64">
        <ul>
          <li className="w-20 h-20 bg-yellow-500 mx-auto mb-5 mt-5">
            Project 1
          </li>
          <li className="w-20 h-20 bg-yellow-400 mx-auto mb-5">Project 2</li>
          <li className="w-20 h-20 bg-yellow-300 mx-auto mb-5">Project 3</li>
        </ul>
      </div>
    </div>
  );
}
