import React from "react";
import Checkbox from "./Checkbox";

export default function Task({ task }) {
  return (
    <div className="flex gap-x-4">
      <Checkbox checked={task.status} />
      <span className="grow">{task.name}</span>
      <button type="button">
        <svg width="35px" height="35px" version="1.1" viewBox="0 0 700 700">
          <path d="m400.4 71.68h-100.8c-16.801 0-30.801 14-30.801 30.801v28h-95.199v39.199h28v221.2c0 47.602 39.199 86.801 86.801 86.801h123.2c47.602 0 86.801-39.199 86.801-86.801l-0.003906-221.76h28v-39.199h-95.199v-28c0-16.801-14-30.242-30.801-30.242zm-92.398 39.199h84v19.602h-84zm151.2 280c0 26.32-21.281 47.602-47.602 47.602h-123.2c-26.32 0-47.602-21.281-47.602-47.602l0.003906-221.76h218.4z" />
        </svg>
      </button>
    </div>
  );
}

Task.attributions = `Delete by Ananth from <a href="https://thenounproject.com/browse/icons/term/delete/" target="_blank" title="Delete Icons">Noun Project</a>`;
