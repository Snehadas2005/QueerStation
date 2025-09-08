# 🌈 QueerStation – A Digital Pride Zine Revolution

![QueerStation Banner](https://github.com/user-attachments/assets/7b61655b-c9d7-42cc-8608-4a4876682d1b)

**QueerStation** is a vibrant, CSS-art-driven digital zine that celebrates love, identity, and belonging—loudly and unapologetically. Created for the [DEV.to Frontend Challenge – June Celebrations](https://dev.to/challenges/frontend-2025-06-04), it blends punk zine aesthetics with inclusive web design to create a space where *everyone* feels human, loved, and safe. This project was selected as one of the winning projects of the challenge. 


## 🖼️ Live Demo

👉 [Visit the Zine](https://queerstationdev.netlify.app/)  
📝 [Read the DEV.to Post](https://dev.to/sneha_2004/queerstation-a-digital-pride-zine-revolution-43h4)

## 🏆 Recognition

This project was **selected as one of the winning projects** of the [DEV.to Frontend Challenge – June Celebrations](https://dev.to/devteam/congrats-to-the-frontend-challenge-june-celebrations-winners-5dd1).

> _"This project stands out for its bold design and meaningful content."_

It was my **first ever dev community project**, and being recognized for it was a truly inspiring milestone in my journey. 💫

## 📌 Features

- ✒️ **Handcrafted Zine Layout** – Glitchy titles, bold colors, and punk-inspired chaos.
- 🏳️‍🌈 **CSS Pride Flags** – Rainbow, Trans, and Bi flags made with pure CSS & hover magic.
- 💌 **Send Love** – Share anonymous affirmations through a simple EmailJS form.
- 📚 **Resources Page** – Support and advocacy links tailored for LGBTQ+ individuals in India.
- 📖 **Your Stories (with Firebase)** – Read and post stories stored in Firestore – live, persistent, and synced across devices.
- 🎈 **Floating Shapes & Glitch Vibes** – A visual rebellion powered by keyframes and creativity.


## 🧩 Project Structure

```plaintext
├── index.html             # Home + Zine grid articles
├── lovepage.html          # Send anonymous love
├── stories.html           # Share & read user stories
├── resources.html         # India-specific LGBTQ+ resources
├── style.css              # Zine styling, flag art, glitch effects
├── script.js              # Interactivity, hover, flag logic
├── stories.js             # Firebase Firestore story logic
└── README.md              # You're here!
````


## ☁️ Firebase Integration

This project uses **Firebase Firestore** to store and retrieve user-submitted stories in real time. When a visitor submits a story through the **“Your Stories”** page, it’s securely added to a public Firestore collection and displayed to all users across devices.

### 🔒 Security Note

In development, Firestore rules are open to allow easy posting. For production, update them to allow only safe, read-only access with optional validation.

### 🔧 Setup (optional, if forking or rebuilding):

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Cloud Firestore** and start in test mode
3. Replace the `firebaseConfig` in `stories.js` with your project credentials
4. Deploy with Netlify, GitHub Pages, or any static host



## 🚀 Getting Started

### 1. Clone the repo:

```bash
git clone https://github.com/yourusername/queerstation-zine.git
cd queerstation-zine
```

### 2. Open in your browser:

Just open `index.html` or use VSCode’s Live Server.

### 3. Enable the "Send Love" feature:

* Sign up at [EmailJS](https://www.emailjs.com/)
* In `lovepage.html`, replace:

  * `service_xxx`
  * `template_xxx`
  * `userID`
    with your own EmailJS credentials.



## 🧠 Built With

* Pure **HTML5, CSS3, and JavaScript**
* Firebase **Firestore** for persistent story storage
* CSS techniques: gradients, `clip-path`, `@keyframes`, and glitch animations
* DOM manipulation + real-time content fetching
* Fully responsive and keyboard accessible

## 🤝 Contributing

Pull requests are welcome! Feel free to:

* Add more pride flags 🌈
* Improve accessibility 🦾
* Suggest layout/design improvements 💡
* Or just share a kind word 🌻

## 📜 License

**MIT License** – Use it, remix it, build on it—just credit this project and its message of love & inclusion.


## 💖 Credits & Acknowledgements

* [DEV.to Frontend Challenge: June 2025](https://dev.to/challenges/frontend-2025-06-04)
* Every LGBTQ+ heart that inspired this zine
* The power of CSS art, punk zine culture, Firebase, and radical softness


**You are not a label. You are not a checkbox. You are human.**
Welcome home. 🏳️‍⚧️🏳️‍🌈💗

