const mongoose = require("mongoose")

const staffSchema = mongoose.Schema(

    {
        staffId:{ type: String, required: true},
       staff_name: { type: String, required: true },
       domain: { type: String, required: true },
       staff_PhoneNumber: { type: Number, required: true },
       image: { type: String, required: true },
        
    },
    { timestamps: true }
)

const staffModel = mongoose.model("staff",staffSchema)

module.exports = staffModel
