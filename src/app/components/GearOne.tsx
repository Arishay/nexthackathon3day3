const GearUp = () => {
    const products = [

      {
        title: 'Nike Dri-FIT ADV Run Division',
        description: "Women's Long-Sleeve Running Top",
        price: '₹ 5,295',
        image: '/Image (5).png',
      },
      {
        title: 'Nike Fast',
        description: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
        price: '₹ 3,795',
        image: '/Image (6).png',
      },
      {
        title: 'Nike Sports Bra',
        description: "Women's High-Support Sports Bra",
        price: '₹ 2,995',
        image: '/Image (7).png',
      },
      {
        title: 'Nike Windrunner',
        description: "Women's Running Jacket",
        price: '₹ 6,495',
        image: '/Image (8).png',
      },
    ];
  
    return (
      <div className="w-full bg-white py-12 px-4">
        <h1 className="text-lg pl-4  font-semibold mb-8">Gear Up</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center border p-4 rounded-md bg-white shadow-sm"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-base font-bold">{product.title}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-lg font-semibold mt-2">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default GearUp;
  