import { PropsWithChildren } from "react";
import Navbar from "@/components/Navbar";

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
