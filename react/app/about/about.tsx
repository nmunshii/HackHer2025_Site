import Navbar from "../../components/navbar";

export function About() {
  return (
    <main className="flex items-center justify-center pb-4">
      <div className="bg-[url('/background.jpg')] absolute inset-0 bg-cover bg-center bg-no-repeat grayscale-[30%] -z-50">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)]">
          <h1 className = "text-[60px] font-bold text-gray-800 mb-2">What is <span className="text-[#683BFC] font-serif italic">DeFaux</span>?</h1>
          <div className = "w-[80%] h-[37%] bg-[#4B4949] rounded-4xl mb-7">
            <div className = "text-xl p-8">
              <p>We like AI as much as the next group of CS students, but we understand the risks posed by its rapid rise and ever-growing presence. This project is a proof-of-concept for a simple but potentially powerful idea if scaled up: a universal place to validate data integrity. The idea is that when you upload data, we embed a unique hash somewhere in it. Later, if you (or anyone else) need to verify that the data is still original and hasn't been tampered with, we check for that hash.
              <br />
              <br />
              Right now, it's just an experiment to show that this kind of validation can be easy and reliable. But in theory, if everyone used it, it would be the go-to place for confirming data authenticity online. For now, we’re just testing the waters to show what it could be like. <span className = "text-[#A8D9EF]">The future could be far more secure than you think!</span></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}