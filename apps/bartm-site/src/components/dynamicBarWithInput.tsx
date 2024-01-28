import { bar } from "@bdsqqq/bartm";
import { createSignal } from "solid-js";

export const InputAndBar = () => {
  const [percentage, setPercentage] = createSignal<number>(0);
  const [width, setWidth] = createSignal<number>(10);

  return (
    <div class="flex gap-2">
      <input
        class="bg-transparent border-b border-b-gray-A7"
        type="number"
        value={percentage()}
        onChange={(e) => setPercentage(parseInt(e.target.value))}
      />
      <input
        type="number"
        class="bg-transparent border-b border-b-gray-A7"
        value={width()}
        onChange={(e) => setWidth(parseInt(e.target.value))}
      />

      <span>{bar(percentage(), width())}</span>
    </div>
  );
};
