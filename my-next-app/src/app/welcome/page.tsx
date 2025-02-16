import Link from "next/link";
export default function Welcome() {

    return (
        <main className="relative flex flex-col items-center justify-start pb-4 min-h-screen">
            {/* Background Layer */}
            <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat z-0"></div> {/* Lower z-index for background */}

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

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center w-full pt-[80px] z-10"> {/* Ensuring content has higher z-index */}
                <h1 className="text-[60px] font-bold text-gray-800 mb-2 pt-8 drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
                    <span className="text-[#683BFC] font-serif italic">DeFaux</span> Data Detector
                </h1>
                <p className="text-black text-center text-2xl mb-9">
                    Verify the authenticity of your media with DDD. Upload images, audio, or video, to secure and ensure validity.
                    <br />
                    We flush out altered or untrustworthy files to keep your data faux-free.
                </p>

                <div className="w-[80%] h-60 bg-[#4B4949E6] rounded-3xl mb-8">

                    <div className="flex h-full">
                        {/* Upload Section */}
                        <div className="flex-1 flex flex-col items-center justify-center border-r-3 border-white">
                            <Link href="/upload">
                                <div className="bg-[#683BFC] text-white px-20 py-4 rounded-lg hover:bg-[#5731D6] transition-colors font-bold shadow-lg text-3xl">
                                    Upload
                                </div>
                            </Link>
                            <p className="text-white text-2xl mt-4 text-center">
                                Upload a file (image, video, or audio) to be <br />
                                encrypted for future verification.
                            </p>
                        </div>

                        {/* Verify Section */}
                        <div className="flex-1 flex flex-col items-center justify-center">
                            <Link href="/verify">
                                <div className="bg-[#683BFC] text-white px-20 py-4 rounded-lg hover:bg-[#5731D6] transition-colors font-bold shadow-lg text-3xl">
                                    Verify
                                </div>
                            </Link>
                            <p className="text-white text-2xl mt-4 text-center">
                                Check your files against our secure <br />
                                database to ensure their validity.
                            </p>
                        </div>
                    </div>
                </div>
                <Link href="/about">
                    <div className="text-[#683BFC] text-2xl font-serif italic hover:underline">Our Goal</div>
                </Link>
            </div >
        </main >
    );
}
