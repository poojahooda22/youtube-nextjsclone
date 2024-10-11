import Button from "@/components/Button/Button";
import Card from "@/components/Card";
import FlashButton from "@/components/flash/FlashButton";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { VideoGrid } from "@/components/VideoGrid";
import Image from "next/image";

export default function Home() {
  return (
    <main className="py-[1vw]">
      <Navbar />
      {/* <Sidebar/> */}
      <VideoGrid />
      {/* <Button /> */}
      <FlashButton />

    </main>
  );
}
