import { useFormik } from "formik";
import { FC } from "react";
import { API } from "../../../../api/api";
import { Buttons } from "../../../../components/buttons";
import { Inputs } from "../../../../components/inputs";
import { Option } from "../../../../components/inputs/select";
import { DeliveryStatuses } from "../../../../enums/delivery-statuses";
import { PaymentOptions } from "../../../../enums/payment-options";
import { withLabel } from "../../../../hocs/withLabel";

const ProductName = withLabel(Inputs.Input, { label: "Produce Name" });
const ProductImage = withLabel(Inputs.Input, { label: "Product Image" });
const Customer = withLabel(Inputs.Input, { label: "Customer" });
const Amount = withLabel(Inputs.Input, { label: "Amount" });
const PaymentMode = withLabel(Inputs.Select, { label: "Payment Mode" });
const Status = withLabel(Inputs.Select, { label: "Status" });

export const Form: FC = () => {
  const formik = useFormik({
    initialValues: {
      productName: "",
      productImage: "",
      customer: "",
      amount: 0,
      paymentMode: PaymentOptions.TRANSFER_BANK,
      status: DeliveryStatuses.PROCESS,
    },
    onSubmit: async (values, actions) => {
      try {
        await API.post("products/create", values);
        alert("Succeeded");
        actions.resetForm();
      } catch (err) {
        if (err instanceof Error) {
          console.error(err);
        }
      }
    },
  });
  const paymentOptions: Option[] = [
    {
      label: "Transfer Bank",
      value: PaymentOptions.TRANSFER_BANK,
    },
    {
      label: "Cash on Delivery",
      value: PaymentOptions.CASH_ON_DELIVERY,
    },
  ];
  const statuses: Option[] = [
    {
      label: "Process",
      value: DeliveryStatuses.PROCESS,
    },
    {
      label: "Delivered",
      value: DeliveryStatuses.DELIVERED,
    },
    {
      label: "Canceled",
      value: DeliveryStatuses.CANCELED,
    },
  ];

  return (
    <form onSubmit={formik.handleSubmit}>
      <ProductName
        name="productName"
        value={formik.values.productName}
        onChange={formik.handleChange}
        placeholder="Name of your product"
        isRequired
      />
      <ProductImage
        name="productImage"
        value={formik.values.productImage}
        onChange={formik.handleChange}
        placeholder="Image URL"
        isRequired
      />
      <Customer
        name="customer"
        value={formik.values.customer}
        onChange={formik.handleChange}
        placeholder="Customer"
        isRequired
      />
      <Amount
        type="number"
        name="amount"
        value={formik.values.amount}
        onChange={formik.handleChange}
        placeholder="Amount"
        isRequired
      />
      <PaymentMode
        name="paymentMode"
        value={formik.values.paymentMode}
        onChange={formik.handleChange}
        options={paymentOptions}
        isRequired
      />
      <Status
        name="status"
        value={formik.values.status}
        onChange={formik.handleChange}
        options={statuses}
        isRequired
      />
      <Buttons.Primary type="submit">Submit</Buttons.Primary>
    </form>
  );
};
