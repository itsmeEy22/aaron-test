import '../ProductCard/productCard.css'

function ProductCard() {
  return(
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm card-container">
        <div className="relative product-header">
          <img
            className="w-full img-container"
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="Product Image"
          />
          {/* <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div> */}
        </div>
        <div className="p-4 product-body">
          <h3 className="text-lg font-medium mb-2 product-title">Product Title</h3>
          <p className="text-gray-600 text-sm mb-4 card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante
            vel eros fermentum faucibus sit amet euismod lorem.
          </p>
          <div className="flex items-center product-footer">
            <span className="font-bold text-lg">$19.99</span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded btn-buy">
              Enquiry
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;