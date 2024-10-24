import { Welcome } from "@/components/Welcome";
import { useStore } from "@/store";

export default function App() {
  const { inc, count } = useStore()
  return (
    <main className="min-h-screen w-full bg-slate-950">
      <Welcome onClick={inc} count={count} />
    </main>
  )
}
