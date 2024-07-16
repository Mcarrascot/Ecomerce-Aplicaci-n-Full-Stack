import OrderItem from "./OrderItem";

const OrderSummary = ({ items }) => (
  <div className="px-4 py-8">
    <p className="text-xl font-medium">Order Summary</p>
    <p className="text-gray-400">Review your items.</p>
    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
      {items.map((item, index) => (
        <OrderItem key={index} item={item} />
      ))}
    </div>
  </div>
);

export default OrderSummary;
