import { Order } from "@/types";
import { Separator } from "@/components/ui/separator";

type Props = {
  order: Order;
};

const OrderStatusDetails = ({ order }: Props) => {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-2">
        <span className="font-semibold">Delivering to</span>
        <span>{order.deliveryDetails.name}</span>
        <span>{order.deliveryDetails.email}</span>
        <span>
          {order.deliveryDetails.address}, {order.deliveryDetails.city}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-semibold">Your order</span>
        <ul>
          {order.cartItems.map((item) => (
            <li key={item.menuItemId}>
              {item.name} x {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <Separator />
      <div className="flex flex-col gap-2">
        <span className="font-semibold">Total</span>
        <span>{(order.totalAmount / 100).toFixed(2)} $</span>
      </div>
    </div>
  );
};

export default OrderStatusDetails;
