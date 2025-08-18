import { useState, useEffect } from "react";
import { ExternalLink, Calendar, Tag } from "lucide-react";
import dummyData from "../utils/dummy";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    // Simulate fetching data
    setProducts(dummyData);
    setFilteredProducts(dummyData);
  }, []);

  // Get unique categories from data
  const categories = [
    "All",
    ...new Set(products.map((product) => product.type)),
  ];

  // Handle search and filtering
  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter((product) => product.type === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, activeCategory, products]);

  const handleSearch = () => {
    // Search is already handled in useEffect
  };

  const handleProductClick = (link) => {
    window.open(link, "_blank");
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getCategoryColor = (type) => {
    const colors = {
      service: "bg-blue-100 text-blue-800",
      hardware: "bg-green-100 text-green-800",
      app: "bg-purple-100 text-purple-800",
      default: "bg-gray-100 text-gray-800",
    };
    return colors[type] || colors.default;
  };

  const getGradientBackground = (index) => {
    const gradients = [
      "from-blue-400 to-purple-600",
      "from-green-400 to-blue-600",
      "from-purple-400 to-pink-600",
      "from-yellow-400 to-red-600",
      "from-indigo-400 to-purple-600",
      "from-pink-400 to-red-600",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen">
      {/* Main Content Area - Full Width */}
      <main className="w-full">
        {/* Hero Header */}
        <div className="w-full flex flex-col justify-center items-center py-16 px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Your own <span className="text-blue-600">Google Graveyard</span>
            <br />
            platform.
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            This is your place to explore discontinued Google products, to share
            what matters, and to discover stories of innovation that once was,
            whether it's one product or a thousand, your exploration starts
            here.
          </p>

          {/* Search Bar */}
          <div className="flex w-full justify-center px-4 my-4">
            <div className="relative w-full max-w-2xl flex gap-2">
              <input
                type="text"
                placeholder="Search for blogs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              />
              <button
                onClick={handleSearch}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium rounded-full hover:from-purple-600 hover:to-indigo-600 transition-colors duration-200"
              >
                Search
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex justify-center flex-wrap gap-2 px-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md transition-all duration-200 capitalize text-sm font-medium ${
                  activeCategory === category
                    ? "!bg-blue-600 !text-white shadow-md"
                    : "text-gray-700 bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.name}
                onClick={() => handleProductClick(product.link)}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden group"
              >
                {/* Card Header with Gradient */}
                <div
                  className={`h-32 bg-gradient-to-r ${getGradientBackground(
                    index
                  )} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="relative z-10 text-center">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {product.name}
                    </h3>
                    <div
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                        product.type
                      )}`}
                    >
                      <Tag className="w-3 h-3 inline mr-1" />
                      {product.type}
                    </div>
                  </div>
                  <ExternalLink className="absolute top-3 right-3 w-4 h-4 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Dates */}
                  <div className="space-y-2">
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span className="font-medium">Launched:</span>
                      <span className="ml-1">
                        {formatDate(product.dateOpen)}
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-red-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span className="font-medium">Discontinued:</span>
                      <span className="ml-1">
                        {formatDate(product.dateClose)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="py-8 flex flex-col items-center justify-center w-full">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No products found
              </h3>
              <p className="text-gray-500 text-center">
                Try adjusting your search terms or category filter
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
