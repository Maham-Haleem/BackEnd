import MoU from "../models/mou.model.js";

// GET all MoUs
export const getAllMoUs = async (req, res) => {
  try {
    const mous = await MoU.find().sort({ createdAt: -1 });
    res.json(mous);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE MoU
export const createMoU = async (req, res) => {
  try {
    const mou = new MoU(req.body);
    await mou.save();
    res.json(mou);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE status
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const updated = await MoU.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};