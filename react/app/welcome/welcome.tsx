import Navbar from "./components/navbar";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pb-4">
      <div className="bg-[url('/bubbles-background.jpg')] absolute inset-0 bg-cover bg-center bg-no-repeat grayscale-[30%] -z-50">
        {/* Header area w buttons */}
        <Navbar />
        {/*main portion*/}
        <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)]">
          <h1 className="text-[60px] font-bold text-gray-800 mb-2"><span className="text-[#683BFC] font-serif italic">DeFaux</span> Data Detector</h1>
          <p className= "text-black text-center text-2xl mb-9">
            Verify the authenticity of your media with DDD. Upload images, audio, or video, to secure and ensure validity. 
            <br />
            We flush out altered or untrustworthy files to keep your data faux-free. 
          </p>
          <div className="w-[80%] h-[30%] bg-[#4B4949] rounded-4xl mb-8">
            <div className="flex h-full">
              
              {/* Left part of the box */}
              <div className="flex-1 flex flex-col items-center justify-center border-r-3 border-white">
                <button className="bg-[#683BFC] text-white w-70 py-4 rounded-lg hover:bg-[#5731D6] transition-colors font-bold shadow-lg text-3xl">Upload</button>
                <p className="text-white text-2xl mt-4 text-center">
                  Upload a file (image, video, or audio) to be 
                  <br />
                  encrypted for future verification. 
                </p>
              </div>

              {/* Right part of the box */}
              <div className="flex-1 flex flex-col items-center justify-center">
                <button className="bg-[#683BFC] text-white w-70 py-4 rounded-lg hover:bg-[#5731D6] transition-colors font-bold shadow-lg text-3xl">Verify</button>
                <p className="text-white text-2xl mt-4 text-center">
                  Check your files against our secure
                  <br /> database to ensure their validity.
                </p>
              </div>
            </div>
          </div>
          <button className= "text-[#683BFC] text-2xl font-serif italic hover:underline">Our Goal</button>
          
        </div>
      </div>
    </main>
  );
}