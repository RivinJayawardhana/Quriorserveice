export const RecentOrders = () => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2">Order ID</th>
              <th className="p-2">Customer</th>
              <th className="p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">#12345</td>
              <td className="p-2">John Doe</td>
              <td className="p-2">$250</td>
            </tr>
            <tr>
              <td className="p-2">#12346</td>
              <td className="p-2">Jane Smith</td>
              <td className="p-2">$300</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  export default RecentOrders;