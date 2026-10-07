import { createFileRoute } from "@tanstack/react-router";
import { ElectionGame } from "@/components/election/game";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <ElectionGame />;
}
