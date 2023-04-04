import { Button } from "ui";
import { lazyThing } from "@bdsqqq/lazytm";
import { useEffect } from "react";

export default function Web() {
  useEffect(() => {
    lazyThing();
  }, []);

  return (
    <div>
      <h1>Web</h1>
      <Button />
    </div>
  );
}
