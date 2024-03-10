// // ProductComparisonPage.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProductComparisonPage = () => {
//   const [product1, setProduct1] = useState(null);
//   const [product2, setProduct2] = useState(null);

//   useEffect(() => {
//     // Fetch data for product 1
//     axios.get('your-api-endpoint-for-product-1')
//       .then(response => setProduct1(response.data))
//       .catch(error => console.error('Error fetching product 1 data:', error));

//     // Fetch data for product 2
//     axios.get('your-api-endpoint-for-product-2')
//       .then(response => setProduct2(response.data))
//       .catch(error => console.error('Error fetching product 2 data:', error));
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Product Comparison</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {product1 && (
//           <div className="border p-4">
//             <h2 className="text-xl font-semibold mb-2">{product1.name}</h2>
//             <p>{product1.description}</p>
//             {/* Add other product details */}
//           </div>
//         )}

//         {product2 && (
//           <div className="border p-4">
//             <h2 className="text-xl font-semibold mb-2">{product2.name}</h2>
//             <p>{product2.description}</p>
//             {/* Add other product details */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductComparisonPage;


// ProductComparisonPage.js
// ProductComparisonPage.js
// ProductComparisonPage.js
import React from 'react';
// import './themes.css';


const ProductComparisonPage = () => {
  // Mock data for product 1
  const product1 = {
    name: 'Product A',
    description: 'This is the description for Product A.',
    price: '$50',
    deliverySpeed: '2 days',
    sales: '1000 units',
    reviews: '4.5 stars',
  };

  // Mock data for product 2
  const product2 = {
    name: 'Product B',
    description: 'This is the description for Product B.',
    price: '$40',
    deliverySpeed: '3 days',
    sales: '800 units',
    reviews: '4.0 stars',
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 w-800 h-800">
        <h1 className="text-3xl font-bold mb-4">Product Comparison</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="border p-4 pt-4 pb-4 ">
            <h2 className="text-xl font-semibold mb-2 pt-4 pb-4">{product1.name}</h2>
            <p>{product1.description}</p>
            <p className="mt-2 pt-2 pb-2">Price: {product1.price}</p>
            <p className="mt-2 pt-2 pb-2">Delivery Speed: {product1.deliverySpeed}</p>
            <p className="mt-2 pt-2 pb-2">Sales: {product1.sales}</p>
            <p className="mt-2 pt-2 pb-2">Reviews: {product1.reviews}</p>
            {/* Add other product details */}
          </div>

          <div className="border p-4">
            <h2 className="text-xl font-semibold mb-2 pt-4 pb-4">{product2.name}</h2>
            <p className="mt-2 pt-2 pb-2">{product2.description}</p>
            <p className="mt-2 pt-2 pb-2">Price: {product2.price}</p>
            <p className="mt-2 pt-2 pb-2">Delivery Speed: {product2.deliverySpeed}</p>
            <p className="mt-2 pt-2 pb-2">Sales: {product2.sales}</p>
            <p className="mt-2 pt-2 pb-2">Reviews: {product2.reviews}</p>
            {/* Add other product details */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComparisonPage;
