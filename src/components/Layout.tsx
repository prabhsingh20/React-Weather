import { Haze, SunSnow } from "lucide-react";
import type { PropsWithChildren } from "react";
import Header from "./Header";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className=" bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-6">
        <div className="container mx-auto px-4 text-center text-gray-200 flex  justify-center">
          <p className="flex juscenter items-center gap-2">
            <SunSnow /> React Weather <Haze />
          </p>
        </div>
      </footer>
    </div>
  );
}
