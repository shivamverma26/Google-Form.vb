"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Define the path to the JSON database file in the src directory
const dbFilePath = path_1.default.join(__dirname, '..', 'src', 'db.json');
// Log the resolved path for debugging purposes
console.log('Resolved dbFilePath:', dbFilePath);
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware to parse JSON bodies
app.use(express_1.default.json());
// Function to read and parse the JSON file
const readDatabase = () => {
    try {
        if (fs_1.default.existsSync(dbFilePath)) {
            const dbData = fs_1.default.readFileSync(dbFilePath, 'utf-8');
            const parsedData = JSON.parse(dbData);
            if (Array.isArray(parsedData.submissions)) {
                return parsedData.submissions;
            }
        }
    }
    catch (error) {
        console.error('Error reading database:', error);
    }
    return [];
};
// Function to write to the JSON file
const writeDatabase = (data) => {
    try {
        const submissionsDB = { submissions: data };
        fs_1.default.writeFileSync(dbFilePath, JSON.stringify(submissionsDB, null, 2));
    }
    catch (error) {
        console.error('Error writing to database:', error);
    }
};
// Initialize submissions array
let submissions = readDatabase();
// GET /ping endpoint
app.get('/ping', (req, res) => {
    res.json({ success: true });
});
// POST /submit endpoint
app.post('/submit', (req, res) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;
    if (!name || !email || !phone || !github_link || !stopwatch_time) {
        return res.status(400).json({ error: 'All fields are required.' });
    }
    const newSubmission = {
        name,
        email,
        phone,
        githubLink: github_link,
        stopwatchTime: stopwatch_time
    };
    submissions.push(newSubmission);
    // Save submissions array to db.json
    writeDatabase(submissions);
    res.json({ success: true });
});
// GET /read endpoint
app.get('/read', (req, res) => {
    try {
        res.json({ submissions });
    }
    catch (error) {
        console.error('Error fetching submissions:', error);
        res.status(500).json({ error: 'Failed to fetch submissions.' });
    }
});
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
