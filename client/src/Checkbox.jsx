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
      <span className="sr-only">Enable notifications</span>
    </Switch>
  );
}
