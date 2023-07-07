import React, { useContext, useEffect, useState } from "react";
import {
  BillingDetails,
  CardField,
  initStripe,
  useConfirmPayment,
} from "@stripe/stripe-react-native";
import { fetchData } from "../helper/dataProvider";
import { ProductContext } from "../context/ProductContext";
import { View } from "react-native";
import { ActivityIndicator, Button, Text } from "react-native-paper";
import { customTheme } from "../utils/theme";
import { REACT_APP_STRIPE_PUBLIC_KEY } from "@env";

const Payment = ({ navigation: { navigate } }) => {
  const { cart, customer, clearCart } = useContext(ProductContext);
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { confirmPayment } = useConfirmPayment();

  const createPaymentIntent = () =>
    fetchData({
      url: "/payments/payment-intent",
      method: "post",
      body: cart,
    });

  const makePayment = async () => {
    setSubmitting(true);
    const billingDetails: BillingDetails = {
      email: customer.email,
      name: customer.name,
    };

    const { client_secret } = await createPaymentIntent();

    const { error } = await confirmPayment(client_secret, {
      paymentMethodType: "Card",
      paymentMethodData: { billingDetails },
    });

    navigate(
      "payment-message",
      error
        ? {
            type: "failure",
            message: error.localizedMessage,
            name: billingDetails.name,
          }
        : { type: "success", name: billingDetails.name }
    );
    if (!error) clearCart();
  };

  const initializeStripe = () =>
    initStripe({ publishableKey: REACT_APP_STRIPE_PUBLIC_KEY });

  useEffect(() => {
    initializeStripe();
    return () => setSubmitting(false);
  }, []);

  return (
    <View
      style={{ padding: 20, justifyContent: "space-between", height: "100%" }}
    >
      <View>
        <Text
          style={{
            color: customTheme.colors.textDark,
            fontSize: 18,
            marginBottom: 20,
          }}
        >
          Add debit or credit card
        </Text>
        <CardField
          postalCodeEnabled={true}
          placeholders={{
            number: "4242 4242 4242 4242",
          }}
          cardStyle={{
            backgroundColor: "#FFFFFF",
            textColor: "#000000",
          }}
          style={{
            width: "100%",
            height: 60,
            marginVertical: 30,
          }}
          onCardChange={(cardDetails) => {
            setEnableSubmit(cardDetails.complete);
          }}
        />
      </View>

      <View>
        {submitting && (
          <ActivityIndicator
            animating={true}
            size="large"
            color={customTheme.colors.primary}
          />
        )}
        <Button
          style={{ justifyContent: "flex-end", marginVertical: 30 }}
          labelStyle={{
            color: enableSubmit
              ? customTheme.colors.textLight
              : customTheme.colors.textDark,
            fontSize: 18,
          }}
          mode="contained"
          disabled={!enableSubmit || submitting}
          onPress={() => makePayment()}
        >
          Place order
        </Button>
      </View>
    </View>
  );
};

export default Payment;
