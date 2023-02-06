import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function Checkbox() {
  const [enabled, setEnabled] = useState(false);
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-200"
      } relative inline-flex h-7 w-7 items-center rounded-lg`}
    >
      {enabled ? (
        <svg
          className="mt-1"
          width="25px"
          height="25px"
          version="1.1"
          viewBox="0 0 700 700"
        >
          <path
            fill="white"
            d="m292.88 482.72c-15.68 0-30.801-6.1602-42-17.359l-149.52-149.52c-22.961-22.961-22.961-60.48 0-83.441 22.961-22.961 60.48-22.961 83.441 0l106.4 106.4 221.76-241.92c21.84-24.078 59.359-25.762 83.441-3.3594 24.078 21.84 25.762 59.359 3.3594 83.441l-263.2 286.72c-10.641 11.762-26.32 19.039-42.559 19.039h-1.1211z"
          />
        </svg>
      ) : null}
      <span className="sr-only">Toggle complete</span>
    </Switch>
  );
}

Checkbox.attributions = `tick by Adrien Coquet from <a href="https://thenounproject.com/browse/icons/term/tick/" target="_blank" title="tick Icons">Noun Project</a>`;
