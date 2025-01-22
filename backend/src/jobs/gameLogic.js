import User from "../models/User.js";

// Fetch user data or create a new user
export const getUserData = async (req, res) => {
    try {
        let user = await User.findOne(); // Assume single user for simplicity
        if (!user) {
            user = await User.create({ totalScore: 0, prizesWon: 0 });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Error fetching user data." });
    }
};

// Handle button click logic
export const updateUser = async (req, res) => {
    try {
        const rewardChance = Math.random();
        let points = 1;
        let prizeWon = false;

        if (rewardChance < 0.5) points += 10; // 50% chance for bonus points
        if (rewardChance < 0.25) prizeWon = true; // 25% chance for prize

        const user = await User.findOneAndUpdate(
            {},
            {
                $inc: {
                    totalScore: points,
                    prizesWon: prizeWon ? 1 : 0,
                },
            },
            { new: true, upsert: true }
        );

        res.json({ user, points, prizeWon });
    } catch (error) {
        res.status(500).json({ error: "Error updating user data." });
    }
};
