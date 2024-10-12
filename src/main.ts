import { useCloud } from "freestyle-sh";
import type { CounterCS } from "./cloudstate/counter.ts";

Deno.serve(async () => {
  const counter = useCloud<typeof CounterCS>("counter");

  return new Response(
    JSON.stringify({
      count: await counter.getCount(),
    })
  );
});
