const express = require("express")
const staffModel = require("../model/staffModel")
const router = express.Router()
router.post("/staff", async (req, res) => {
    try {
        const newstaff = new staffModel(req.body)
        await newstaff.save()
        res.send("Staff Saved Successfully")
    } catch (error) {
        res.status(400).json(error)

    }
})

router.get("/get-staff", async (req, res) => {
    try {
        const staff = await staffModel.find()
        res.send(staff)
    } catch (error) {
        res.status(400).json(error)

    }
})
router.post("/delete-staff", async (req, res) => {
    try {
        const staff = await staffModel.findOneAndDelete({ _id: req.body.staffId });
        if (!staff) {
            return res.status(404).json({ message: "Staff not found" });
        }
        // Assuming image file path is stored in the staff document as "image" field
        if (staff.image) {
            // Delete the associated image file from the server
            fs.unlinkSync(staff.image);
        }
        res.send("Staff deleted successfully");
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});




module.exports = router
