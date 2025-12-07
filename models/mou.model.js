import mongoose from "mongoose";

const mouSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    address: { type: String, required: true },
    contactPerson: { type: String, required: true },
    contactEmail: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    status: { type: String, default: "pending" }
  },
  { timestamps: true }
);

const MoU = mongoose.model("MoU", mouSchema);
export default MoU;