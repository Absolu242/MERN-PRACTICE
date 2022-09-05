const asyncHandler = require("express-async-handler");

//@desc Get goals
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get goals" });
});

//@desc Post goals
//@route POST /api/goals
//@access Private
const setGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "set goals" });
});

//@desc Put goals
//@route PUT /api/goals
//@access Private
const putGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `updated goals ${req.params.id}` });
});

//@desc delete goals
//@route DELETE /api/goals
//@access Private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "deleted goals" });
});

module.exports = {
  getGoals,
  setGoals,
  putGoals,
  deleteGoals,
};
