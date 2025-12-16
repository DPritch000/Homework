const express = require('express');
const leaderboardModel = require('../models/leaderboard.js'); 
const router = express.Router();

router.get('/leaderboard', async (req, res) => {
  try {
    const rows = await leaderboardModel.getLeaderboard(); // already returns an array
    res.json(Array.isArray(rows) ? rows : [rows]); // ensure it’s an array
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});




// DELETE leaderboard entry
router.delete('/deletelb', async (req, res) => {
  try {
    await leaderboardModel.deleteLeaderboard(req.body.leaderboard_id);
    res.json({ success: "Leaderboard Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new score
router.post('/score', async (req, res) => {
  try {
    const result = await leaderboardModel.leaderboardEntry(req.body.user_id, req.body.score);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;