import { Schema, model, models } from "mongoose";

const subscriptionSchema = new Schema({
  endpoint: { type: String, required: true, unique: true },
  keys: {
    p256dh: { type: String, required: true },
    auth: { type: String, required: true },
  },
});

export const Subscription =
  models.Subscription || model("Subscription", subscriptionSchema);