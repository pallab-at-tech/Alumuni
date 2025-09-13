import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const Shop = () => {
    const categories = ["All", "Clothing", "Accessories", "Stationery"];
    const products = [
        { id: 1, name: "Alumni T-Shirt", price: "₹499", category: "Clothing", img: "https://images-cdn.ubuy.co.in/634d0aca36f1f47c7a1fbe5d-bulls-athletic-university-college-alumni.jpg" },
        { id: 2, name: "Coffee Mug", price: "₹299", category: "Accessories", img: "https://i.etsystatic.com/34684222/r/il/259a30/5764006516/il_fullxfull.5764006516_ejsp.jpg" },
        { id: 3, name: "Campus Hoodie", price: "₹999", category: "Clothing", img: "https://nodiploma.ca/cdn/shop/products/productshots-new2_c07bc781-fc6f-4c69-b89e-f25d1ddf4295_2048x2048.png?v=1676787261" },
        { id: 4, name: "Notebook", price: "₹199", category: "Stationery", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdPVdG08-Ll3OX8qXjdsnprQkrAgo-uumJYA&s" },
        { id: 5, name: "Alumni Cap", price: "₹399", category: "Accessories", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEja3zlCjN1xKECXBZMA0-vRiayLXaGd4rcw&s" },
    ];

    return (
        <section className="min-h-[calc(100vh-416px)] px-[70px] py-12 bg-gradient-to-b from-gray-50 to-white">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-10">
                <div className="text-center md:text-left">
                    <h1 className="text-3xl font-bold text-gray-900">Alumni Shop</h1>
                    <p className="text-gray-500 mt-2">Exclusive merchandise for our alumni community</p>
                </div>

                {/* Cart Button */}
                <button className="flex items-center cursor-pointer gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition mt-4 md:mt-0">
                    <FiShoppingCart className="" /> Cart (0)
                </button>
            </div>

            {/* Categories */}
            <div className="flex gap-4 mb-8 overflow-x-auto">
                {categories.map((cat, i) => (
                    <button
                        key={i}
                        className="px-4 py-2 cursor-pointer border rounded-lg text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition"
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {products.map((product) => (
                    <div key={product.id} className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition p-4 flex flex-col">
                        <img src={product.img} alt={product.name} className="rounded-lg mb-4 w-full h-48 object-contain" />
                        <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
                        <p className="text-indigo-600 font-bold mt-2">{product.price}</p>
                        <button className="mt-auto cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2">
                            <FiShoppingCart /> Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            {/* About Section */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-10 max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How Shopping Works</h2>
                <p className="text-gray-600 leading-relaxed">
                    The Alumni Shop is more than just merchandise – it’s a way to stay connected with your alma mater.
                    Every purchase you make helps fund scholarships, alumni events, and campus development initiatives.
                    Simply browse products, add them to your cart, and checkout securely.
                    Your support ensures future generations of students benefit from a stronger alumni network. <br /><br />

                    As a <span className="font-semibold text-indigo-600">Smart Premium Membership Card</span> holder,
                    you’ll unlock exclusive discounts on alumni merchandise, priority access to new product launches,
                    and special rewards for contributing to community growth.
                    Your membership not only saves you money but also strengthens our collective alumni impact.
                </p>
            </div>
        </section>
    );
};

export default Shop;
