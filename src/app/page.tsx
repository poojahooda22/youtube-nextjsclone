import Button from "@/components/Button/Button";
import Card from "@/components/Card";
import FlashButton from "@/components/flash/FlashButton";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Sidebar2 from "@/components/Sidebar2";
import { SidebarProvider } from "@/components/SidebarContext";
import Testing from "@/components/Testing";
import TextAnimation from "@/components/text/TextAnimation";
import Trigger from "@/components/Trigger";
import { VideoGrid } from "@/components/VideoGrid";
import Image from "next/image";

export default function Home() {
  return (
    <SidebarProvider>
    <main className="py-[1vw]">
      {/* <Navbar />
      <Sidebar/>
      <Trigger /> */}
      <Testing/>
      <Sidebar2 />
      {/* <VideoGrid />
      <Button />
      <FlashButton />
      <TextAnimation /> */}
    </main>
    </SidebarProvider>
  );
}
