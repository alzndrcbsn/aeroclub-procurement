// File: script.js

// Listen for auth state changes
firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    // Redirect if not logged in
    window.location.href = "index.html";
  }
});

// Logout button functionality
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    firebase.auth().signOut().then(() => {
      window.location.href = "index.html";
    }).catch((error) => {
      console.error("Logout failed:", error);
    });
  });
}

// Optional: Get user role from Firestore
async function getUserRole(uid) {
  try {
    const userDoc = await firebase.firestore().collection("users").doc(uid).get();
    if (userDoc.exists) {
      return userDoc.data().role || "engineer";
    }
  } catch (error) {
    console.error("Error fetching user role:", error);
  }
  return "engineer";
}
