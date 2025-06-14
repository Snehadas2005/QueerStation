const firebaseConfig = {
  apiKey: "AIzaSyB4kvaHLnaGIEPq-NQIuPeSHjyJyyypY7c",
  authDomain: "queerstation.firebaseapp.com",
  projectId: "queerstation",
  storageBucket: "queerstation.appspot.com",
  messagingSenderId: "1066174228299",
  appId: "1:1066174228299:web:93cd053bbc2b01027feace",
  measurementId: "G-1YSZYKSFT6"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.addEventListener("DOMContentLoaded", () => {
  fetchStories();
});

async function addStoryToDB(name, text) {
  await db.collection("stories").add({
    name,
    text,
    timestamp: firebase.firestore.Timestamp.now()
  });
}

async function fetchStories() {
  const snapshot = await db.collection("stories").orderBy("timestamp", "desc").get();
  snapshot.forEach(doc => {
    const data = doc.data();
    addStoryToDOM(data.name, data.text, data.timestamp);
  });
}

function addStoryToDOM(name, text, timestamp) {
  const grid = document.getElementById("storiesGrid");

  const card = document.createElement("div");
  card.className = "story-card";

  const header = document.createElement("div");
  header.className = "story-header";
  const dateStr = timestamp?.toDate?.().toLocaleDateString() || "June 2025";
  header.innerHTML = `<strong>${name}</strong><span class="story-date">${dateStr}</span>`;

  const content = document.createElement("div");
  content.className = "story-text";
  content.textContent = text;

  card.appendChild(header);
  card.appendChild(content);
  grid.prepend(card);
}

const form = document.getElementById("storyForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("storyName").value.trim() || "Anonymous";
  const text = document.getElementById("storyContent").value.trim();
  if (!text) return;

  const timestamp = firebase.firestore.Timestamp.now();
  await addStoryToDB(name, text);
  addStoryToDOM(name, text, timestamp);
  form.reset();
});

function goHome() {
  window.location.href = "index.html";
}