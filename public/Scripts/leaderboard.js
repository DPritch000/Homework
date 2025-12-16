import { fetchData } from "./main.js"; // adjust path if needed

async function loadLeaderboard() {
    try {
        const data = await fetchData("/lb/leaderboard", undefined, "GET");

        // Ensure we have an array
        if (!Array.isArray(data)) {
            console.error("Leaderboard data is not an array:", data);
            return;
        }

        const tableBody = document.querySelector("#leaderboardTable tbody");
        tableBody.innerHTML = ""; // clear old rows

        data.forEach((entry, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${entry.username}</td>
                <td>${entry.score}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (err) {
        console.error("Error loading leaderboard:", err);
    }
}

// Load leaderboard on page load
loadLeaderboard();
