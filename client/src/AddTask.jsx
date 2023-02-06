import React from "react";

export default function AddTask() {
  return (
    <div>
      <button className="flex gap-8 mb-4 item-center">
        <imput className="grow border-b border-b-black" />
        <svg
          className="relative top-2"
          width="35px"
          height="35px"
          version="1.1"
          viewBox="0 0 700 700"
        >
          <path
            d="m418.71 493.01c0 89.324-135.71 89.324-135.71 0v-144.29h-146.01c-89.324 0-89.324-135.71 0-135.71h146.01v-146.01c0-89.324 135.71-89.324 135.71 0v146.01h146.01c87.605 0 87.605 135.71 0 135.71h-146.01z"
            fill-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

AddTask.attributions = `Plus by yasminvisible from <a href="https://thenounproject.com/browse/icons/term/plus/" target="_blank" title="Plus Icons">Noun Project</a>`;
