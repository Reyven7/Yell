import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/scenario/moodboard")({
  component: Moodboard,
});

function Moodboard() {
  return <div>Hello "/scenario/moodboard"!</div>;
}
