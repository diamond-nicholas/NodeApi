const Played = require('../models/played');

const getAllPlayed = async (req, res) => {
  try {
    const task = await Played.find({});
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createPlayed = async (req, res) => {
  try {
    const task = await Played.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getPlayed = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Played.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id ${taskID}` });
    }
    res.status(200).json({ task });
    // res.status(200).json({ id: req.params.id });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deletePlayed = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Played.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const unpdatePlayed = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Played.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `No task with id ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllPlayed,
  createPlayed,
  getPlayed,
  deletePlayed,
  unpdatePlayed,
};
