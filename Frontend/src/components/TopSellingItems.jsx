export const TopSellingItems = () => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Top Selling Items</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2">Product</th>
              <th className="p-2">Category</th>
              <th className="p-2">Sales</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">Laptop</td>
              <td className="p-2">Electronics</td>
              <td className="p-2">500</td>
            </tr>
            <tr>
              <td className="p-2">Headphones</td>
              <td className="p-2">Accessories</td>
              <td className="p-2">350</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  export default TopSellingItems;