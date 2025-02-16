import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-full h-[68px] bg-black">
            <div className="flex justify-between items-center h-full px-8">
                <div className="flex gap-6 text-[#D8F0F7]">
                    {/* Fixed Header */}
                    <div className="w-full h-[68px] bg-black flex items-center justify-between px-8 shadow-lg z-10">
                        {/* Navigation Links */}
                        <div className="flex gap-6 text-sky-100">
                            <Link href="/welcome" className="hover:text-gray-300 transition-colors font-medium shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
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
            </div>
        </div>
        </div>
    );
}