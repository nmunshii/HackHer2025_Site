export default function Navbar() {
  return (
    <div className="w-full h-[68px] bg-black">
      <div className="flex justify-between items-center h-full px-8">
        <div className="flex gap-6 text-[#D8F0F7]">
          <button className="hover:text-gray-500 transition-colors font-medium">Home</button>
          <button className="hover:text-gray-500 transition-colors font-medium">Upload</button>
          <button className="hover:text-gray-500 transition-colors font-medium">Verify</button>
        </div>
        <span className="text-sky-100 text-2xl font-extrabold tracking-wider">© DDD</span>
      </div>
    </div>
  );
}