
console.log("Hello SOnu")
async function fetchUserData() {
    await new Promise(resolve => setTimeout(resolve, 3000));

    return { username: "Sonu kumar", email: "sksonu8544@gmail.com" }
}

async function getUserData() {
    try {
        console.log("Hello User data...");
        const userData = await fetchUserData();
        console.log(userData);
        console.log("User profile page load...")
    } catch (error) {
        console.log(error, "This os dmnfewqkf")
    }
}

getUserData()
