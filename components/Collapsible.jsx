import { useState } from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <CollapsiblePrimitive.Root style={{ aspectRatio: "auto !important" }}>
      <CollapsiblePrimitive.Trigger asChild>
        <button
          className="mx-0 my-[15px] w-[150px] rounded border-[none] bg-accent px-[50px] py-2.5 font-bold text-black shadow-[0_5px_0_var(--accentshadow)] hover:bg-accenthover active:translate-y-1 active:shadow-none"
          type="button"
          onClick={() => setOpen(!open)}
        >
          {open ? "Hide" : "Reveal"}
        </button>
      </CollapsiblePrimitive.Trigger>
      <CollapsiblePrimitive.Content className="[&>small>p]:my-5 [&>small]:text-grey">
        {children}
      </CollapsiblePrimitive.Content>
    </CollapsiblePrimitive.Root>
  );
};

export default Collapsible;
