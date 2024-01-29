import { type ArgumentArray, default as classnames } from "classnames";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ArgumentArray) {
  return twMerge(classnames(inputs));
}
import { bar } from "@bdsqqq/bartm";
import { createSignal, type ComponentProps } from "solid-js";

export const InputAndBar = () => {
  const [percentage, setPercentage] = createSignal<string>("25");
  const [width, setWidth] = createSignal<string>("10");

  const safePercentage = (percentage: string) => {
    const parsed = parseFloat(percentage);
    if (isNaN(parsed)) return 0;
    if (parsed < 0) return 0;
    if (parsed > 100) return 100;
    return parsed;
  };

  const safeWidth = (width: string) => {
    const parsed = parseInt(width);
    if (isNaN(parsed)) return 0;
    if (parsed < 0) return 0;
    return parsed;
  };

  return (
    <div class="flex flex-col gap-4 items-center">
      <div class="flex gap-2">
        <span class="flex">
          <DynamicWidthInput
            aria-label="Percentage"
            title="Percentage"
            class="bg-gray-A5 rounded-sm border-b border-b-gray-A7 placeholder:text-gray-A9 px-0.5"
            placeholder="00"
            value={percentage()}
            onInput={(e) => setPercentage(e.target.value)}
          />
          <span>%</span>
        </span>
        in
        <DynamicWidthInput
          aria-label="Character amount"
          title="Character amount"
          id="width-input"
          class="bg-gray-A5 rounded-sm border-b border-b-gray-A7 placeholder:text-gray-A9 px-0.5"
          placeholder="10"
          maxLength={3}
          value={width()}
          onInput={(e) => setWidth(e.target.value)}
        />
        characters
      </div>
      {/* 3.815 rem gets us 20 chars max per row in big screens */}
      <span class="text-[3.815rem] leading-tight text-gray-12 center break-all whitespace-pre-line">
        {bar(safePercentage(percentage()), safeWidth(width()))}
      </span>
    </div>
  );
};

const DynamicWidthInput = ({
  class: className,
  style,
  onInput: propOnInput,
  value: propValue,
  ...rest
}: ComponentProps<"input">) => {
  const styleThatIKnowIsAnObject = typeof style === "object" ? style : {};

  const usesPropValue = typeof propValue !== "undefined";
  const [localValue, setLocalValue] = createSignal<string>(
    usesPropValue ? propValue.toString() : ""
  );

  return (
    <input
      value={usesPropValue ? propValue : localValue()}
      onInput={(e) => {
        setLocalValue(e.target.value);

        if (typeof propOnInput === "function") propOnInput(e);
      }}
      class={cn(className)}
      style={{
        ...styleThatIKnowIsAnObject,
        "--chars": localValue().length,
        width: "calc(var(--chars) * 1ch + 0.25em)",
        "min-width": "calc(2ch + 0.25em)",
      }}
      {...rest}
    />
  );
};
