import { Document, Schema, model, models } from "mongoose";

export interface ITransaction extends Document {
  createdAt?: Date;
  stripeId: string;
  amount: number; // 交易金额
  plan?: string; // 交易计划
  credits?: number; // 交易积分
  buyer: Schema.Types.ObjectId; // 买家
}

const TransactionSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  plan: {
    type: String,
  },
  credits: {
    type: Number,
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Transaction = models?.Transaction || model("Transaction", TransactionSchema);

export default Transaction;
