const express = require("express");
const Checkout = require("../models/Checkout");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const Order = require("../models/Order");
const { protect } = require("../middleware/authMiddleware");


const router = express.Router();


// @route POST /api/checkout
// @desc Create a new checkout session
// @access Private
router.post("/", protect, async (req, res) => {
  const { checkoutItems, shippingAddress, paymentMethod, totalPrice } =
    req.body;

  if (!checkoutItems || checkoutItems.length === 0)
    return res.status(400).json({ message: "No items in checkout" });

  try {
    //create a new checkout session
    const userCheckout = await Checkout.create({
      user: req.user._id,
      checkoutItems,
      shippingAddress,
      paymentMethod,
      totalPrice,
      paymentStatus: "pending",
      isPaid: false,
    });
    console.log(`Checkout session created for user ${req.user._id}`);
    res.status(201).json(userCheckout);
  } catch (error) {
    console.log("Error in checkout session", error);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route PUT /api/checkout/:id/pay
// @desc Update checkout to mark as paid after successfull payment
// @access Private



// @route POST /api/checkout/:id/finalize
// @desc Finalizecheckout and convert to an order after payment confirmation
// @access Private

module.exports = router;