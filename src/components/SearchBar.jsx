export const SearchBar = () => {
  return (
    <div className="w-full md:px-4 mb-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search blogs..."
          className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-2.5 px-4 text-dark-6 outline-none transition focus:border-white focus:ring focus:ring-orange-400"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 px-3 py-2.5 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
};
