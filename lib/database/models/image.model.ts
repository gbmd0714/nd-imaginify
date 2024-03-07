import { Document, Schema, model, models } from "mongoose";

export interface IImage extends Document {
  title: string; // 图像的标题
  transformationType: string; // 图像的变换类型
  publicId: string; // 图像的公共ID
  secureURL: string; // 图像的安全URL
  width?: number;
  height?: number;
  config?: object; // 图像的配置
  transformationUrl?: string; // 图像的变换URL
  aspectRatio?: string; // 图像的宽高比
  color?: string;
  prompt?: string; // 图像的提示
  author: {
    // 图像的作者
    _id: string;
    firstName: string;
    lastName: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

const ImageSchema = new Schema({
  title: { type: String, required: true },
  transformationType: { type: String, required: true },
  publicId: { type: String, required: true },
  secureURL: { type: String, required: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: String },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
