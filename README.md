# 🌧️ Unsent – Anime Memory Game

A visually soothing memory card game inspired by anime aesthetics and rain. Built with **React + Vite**, the game challenges players to click each unique image only once. Features rain effects, ambient audio, and dynamic image fetching from the Tenor API.

---

## 🎮 Features

- 🎴 Anime-style cards sourced from Tenor API
- 🌧️ Animated rain background
- 🎧 Lo-fi ambient music
- 🔀 Shuffling logic for card randomness
- 📈 Score + Best Score tracking
- 🔄 Reset on wrong click
- ⚡ Fast performance using Vite

---

## 🚀 Live Demo

**[▶️ Play here (Vercel link)](unsent-three.vercel.app)**

---

## 🛠️ Tech Stack

- **React**
- **Vite**
- **CSS Modules**
- **Tenor API** (GIF search)
- **Custom rain animation (CSS)**
- **Vercel (Deployment)**

---

## 📦 Setup

### 1. Clone the repo

```bash
git clone https://github.com/zedai00/unsent.git
cd unsent
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add Tenor API key

Create a `.env` file:

```
VITE_TENOR_KEY=your_api_key_here
```

> 🔑 Get your API key: [Tenor Developer Portal](https://tenor.com/gifapi)

### 4. Start dev server

```bash
npm run dev
```

### 5. Build for production

```bash
npm run build
```

---

## 🖼️ Project Structure

```
.
├── public/                # Static assets
├── src/
│   ├── components/        # Card & Board UI
│   ├── utils/             # fetchImages util (Tenor API)
│   ├── App.jsx            # Main component
│   ├── App.css            # Styling
│   └── main.jsx           # Entry point
├── .env                   # API key (not committed)
├── index.html
├── vite.config.js
└── README.md
```

---

## 🔊 Audio Attribution

- Music by [Milagros Gomez](https://pixabay.com/users/milagrosgomez-50598653/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=352570) from [Pixabay](https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=352570)

---

## 📜 License

MIT License — free to use, remix, and share.

---

## 🤍 Aesthetic Inspiration

> _"Sometimes, silence says what words can’t."_

Made with rain, lo-fi, and memory.
