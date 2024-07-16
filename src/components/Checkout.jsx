import { useContext, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axiosClient from '../config/axios';
import CartContext from "../context/Cart/CartContext";

const initialOptions = {
  "client-id": "AacCBv2sjxWeFSYxAJT2YlWPG45ETSsKs9xmbbB97O92GXg8x7ayHQFEfII9BNOPLtgWIuVnRv-k4x2k",
  "enable-funding": "venmo",
  "disable-funding": "",
  // country: "CL",
  currency: "USD",
  "data-page-type": "product-details",
  components: "buttons",
  "data-sdk-integration-source": "developer-studio",
};

// Renders errors or successfull transactions on the screen.
function Message({ content }) {
  return <p>{content}</p>;
}
import Swal from 'sweetalert2'

const Checkout = () => {
  const { cartItems, handleCheckout } = useContext(CartContext);
  const [message, setMessage] = useState("");
  return (
    <div>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            shape: "rect",
            layout: "vertical",
            color: "gold",
            label: "paypal",
          }}
          createOrder={async () => {
            try {
              const response = await axiosClient.post("/api/orders", {
                cart: [
                  ...cartItems.map(({ _id, ...items }) => ({
                    ...items,
                    id: _id}
                  ),
                )],
              });
              const orderData = await response.data;

              if (orderData.id) {
                return orderData.id;
              } else {
                const errorDetail = orderData?.details?.[0];
                const errorMessage = errorDetail
                  ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                  : JSON.stringify(orderData);

                throw new Error(errorMessage);
              }
            } catch (error) {
              console.error(error);
              setMessage(`Could not initiate PayPal Checkout...${error}`);
              Swal.fire({
                title: 'Could not initiate PayPal Checkout.',
                // text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Retry'
              })
            }
          }}
          onApprove={async (
            data,
            actions
          ) => {
            Swal.fire({
              title: 'Your payment was successful!',
              // text: 'Do you want to continue',
              icon: 'success',
              confirmButtonText: 'Continue'
            })
            handleCheckout();
          }}
        />
      </PayPalScriptProvider>
      <Message content={message} />
    </div>
  );
}

export default Checkout;
