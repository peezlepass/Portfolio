import Zero from "./Counter/Zero";
import One from "./Counter/One";
import Two from "./Counter/Two";
import Three from "./Counter/Three";
import Four from "./Counter/Four";
import Five from "./Counter/Five";
import Six from "./Counter/Six";
import Seven from "./Counter/Seven";
import Eight from "./Counter/Eight";
import Nine from "./Counter/Nine";

const numberMap = {
  0: <Zero></Zero>,
  1: <One></One>,
  2: <Two></Two>,
  3: <Three></Three>,
  4: <Four></Four>,
  5: <Five></Five>,
  6: <Six></Six>,
  7: <Seven></Seven>,
  8: <Eight></Eight>,
  9: <Nine></Nine>,
};

export default function Counter({ number }) {
  let hundreds = Math.floor((number % 1000) / 100);
  let tens = Math.floor((number % 100) / 10);
  let ones = number % 10;
  return (
    <div className="flex gap-x-1 bg-black p-1">
      {numberMap[hundreds]}
      {numberMap[tens]}
      {numberMap[ones]}
    </div>
  );
}
