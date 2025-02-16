export function Welcome() {
  return (
    <main className="flex items-center justify-center pb-4">
      <div className="bg-[url('/bubbles-background.jpg')] absolute inset-0 bg-cover bg-center bg-no-repeat grayscale-[30%] -z-50">
        {/* Header Bar */}
        <div className="w-full h-[68px] bg-black">
          <div className="flex justify-between items-center h-full px-8">
            {/* Nav */}
            <div className="flex gap-6 text-sky-100">
              <button className="hover:text-gray-300 transition-colors font-medium">Home</button>
              <button className="hover:text-gray-300 transition-colors font-medium">Upload</button>
              <button className="hover:text-gray-300 transition-colors font-medium">Verify</button>
            </div>

            {/* Logo */}
            <span className="text-sky-100 text-2xl font-extrabold tracking-wider">© DDD</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-[calc(100vh-68px)]">
          <h1 className="text-[60px] font-bold text-gray-800 mb-5"><span className="text-[#683BFC]">Dookie</span> Data Detector</h1>
          <p className= "text-black text-center text-2xl mb-10">
            Verify the authenticity of your media with DDD. Upload images, audio, or video, to secure and ensure validity. 
            <br />
            We flush out altered or untrustworthy files to keep your data clog-free. 
          </p>
          <div className="w-[80%] h-[30%] bg-[#4B4949] rounded-4xl">
            <div className="flex h-full">
              {/* Left part of the box */}
              <div className="flex-1 flex flex-col items-center justify-center border-r-3 border-white">
                <button className="bg-[#683BFC] text-white px-8 py-3 rounded-lg hover:bg-[#5731d6] transition-colors font-medium shadow-lg">
                  Upload
                </button>
                <p className="text-white mt-4 text-center">
                  Upload a file (image, video, or audio) to be encrypted for future verification. 
                </p>
              </div>

              {/* Right part of the box */}
              <div className="flex-1 flex flex-col items-center justify-center">
                <button className="bg-[#683BFC] text-white px-8 py-3 rounded-lg hover:bg-[#5731d6] transition-colors font-medium shadow-lg">
                  Verify
                </button>
                <p className="text-white text-2xl mt-4 text-center">
                  Check your files against our secure database to ensure their validity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}