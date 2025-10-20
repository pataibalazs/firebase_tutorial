export default function Favourites() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center space-x-3 mb-6">
          <svg
            className="w-8 h-8 text-red-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <h1 className="text-3xl font-bold text-gray-900">My Favourites</h1>
        </div>

        <div className="border-2 border-dashed border-gray-200 rounded-lg p-12 text-center">
          <svg
            className="w-16 h-16 text-gray-300 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            No favourites yet
          </h2>
          <p className="text-gray-500 mb-6">
            You haven't added any properties to your favourites list yet. Browse
            properties and click the heart icon to add them here.
          </p>

          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-2">
              ❤️ Start Building Your Dream List
            </h3>
            <p className="text-red-100">
              Save your favourite properties and compare them easily. Never lose
              track of the homes you love!
            </p>
          </div>

          <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-red-500/25 hover:scale-105">
            Browse Properties
          </button>
        </div>
      </div>
    </div>
  );
}
