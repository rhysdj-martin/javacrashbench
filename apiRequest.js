// Fetch data from a public API (JSONPlaceholder example)
async function fetchData() {
    try {
        const response = await fetch("");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();
