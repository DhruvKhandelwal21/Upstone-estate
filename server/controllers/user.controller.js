const Property = require("../models/property.js");
const User = require("../models/user.js");

module.exports.createUser = async (req, res) => {
  try {
    const { name, email, avatar } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(200).json(userExist);
    }

    const newUser = await User.create({ name, email, avatar });
    res.status(200).json(newUser);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
module.exports.getAllUsers = async (req, res) => {
   try{
      
       const data = await User.find({}).limit(req.query._end);
       res.status(200).json(data)
   }catch(e){
    res.status(500).json({ message: e.message });
   }
};
module.exports.getUserInfoByID = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ _id: id }).populate("allProperties");

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
} catch (error) {
    res.status(500).json({ message: error.message });
}
};
