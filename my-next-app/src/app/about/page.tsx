import Navbar from "@/components/navbar";
import Link from "next/link";

export default function About() {
  return (
    <main className="flex items-center justify-center pb-4">
      <div className="bg-[url('/background.jpg')] absolute inset-0 bg-cover bg-center bg-no-repeat -z-50">
        {/* Fixed Header */}
        <div className="w-full h-[68px] bg-black flex items-center justify-between px-8 shadow-lg z-10">
          {/* Navigation Links */}
          <div className="flex gap-6 text-sky-100">
            <Link href="/" className="hover:text-gray-300 transition-colors font-medium shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
              Home
            </Link>
            <Link href="/upload" className="hover:text-gray-300 transition-colors font-medium shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
              Upload
            </Link>
            <Link href="/verify" className="hover:text-gray-300 transition-colors font-medium shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
              Verify
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-6">
            <Link href="/signup" className="text-sky-100 hover:text-gray-300 transition-colors font-medium shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
              Exit
            </Link>
            <span className="text-sky-100 text-2xl font-extrabold tracking-wider">© DDD</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)]">
          <h1 className= "text-[60px] font-bold text-gray-800 mb-2 drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]  ">What is <span className="text-[#683BFC] font-serif italic">DeFaux</span>?</h1>
          <div className = "w-[80%] h-[37%] bg-[#4B4949E6] rounded-3xl mb-7">
            <div className = "text-xl p-8">
              <p>We like AI as much as the next group of CS students, but we understand the risks posed by its rapid rise and ever-growing presence. This project is a proof-of-concept for a simple but potentially powerful idea if scaled up: a universal place to validate data integrity. The idea is that when you upload data, we embed a unique hash somewhere in it. Later, if you (or anyone else) need to verify that the data is still original and hasn't been tampered with, we check for that hash.
              <br />
              <br />
              Right now, it's just an experiment to show that this kind of validation can be easy and reliable. But in theory, if everyone used it, it would be the go-to place for confirming data authenticity online. For now, we're just testing the waters to show what it could be like. <span className = "text-[#A8D9EF]">The future could be far more secure than you think!</span></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}