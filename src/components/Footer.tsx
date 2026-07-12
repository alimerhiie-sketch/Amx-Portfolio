import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t px-6 py-8" style={{ borderColor: "#3A3A3A" }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm" style={{ color: "#8A8A86" }}>
        <a href="#home" className="flex items-center">
          <Image src="/logo 2.png" alt="AMX Logo" width={48} height={48} className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
        </a>
        <p>Â© {new Date().getFullYear()} AMX. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-fg cursor-pointer">Privacy</a>
          <a href="#" className="transition-colors hover:text-fg cursor-pointer">Terms</a>
        </div>
      </div>
    </footer>
  );
}
