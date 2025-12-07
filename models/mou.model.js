import mongoose from "mongoose";

const mouSchema = new mongoose.Schema(
  {
    // Frontend fields
    title: { type: String, required: true },
    university: { type: String, required: true },
    department: { type: String, required: true },
    type: { type: String, required: true },
    duration: { type: String, required: true },
    description: { type: String },
    objectives: [{ type: String }],
    terms: [{ type: String }],
    contactPerson: { type: String, required: true },
    contactEmail: { type: String, required: true },
    contactPhone: { type: String, required: true },
    status: { type: String, default: "Draft" },
    category: { type: String, default: "draft" },
    
    // Required fields from current schema
    companyName: { type: String, required: true },
    address: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    
    // Additional useful fields
    industryPartner: { type: String },
    industryLogo: { type: String },
    universityLogo: { type: String },
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

const MoU = mongoose.model("MoU", mouSchema);
export default MoU;