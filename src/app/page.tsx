import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import { VideoGrid } from "@/components/VideoGrid";
import Image from "next/image";

export default function Home() {
  return (
    <main className="py-[1vw]">
      <Navbar />
      <VideoGrid />
    </main>
  );
}
