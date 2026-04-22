# GEMINI.md - Anniversary Website Context

## Project Overview
This project is a professional and romantic **3-Year Anniversary Website** built using modern web technologies. It is designed to tell a "love story" through interactive elements, animations, and media.

### Main Technologies
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Fonts**: Dancing Script, Playfair Display (via Google Fonts/Tailwind)

### Architecture
The project follows a standard Next.js App Router structure:
- `app/`: Contains the main layout and the home page.
- `components/`: Modular UI components for different sections (Hero, Timeline, Gallery, etc.).
- `data/`: Centralized data management in `memories.ts`.
- `public/`: Static assets like background music (`music.mp3`) and images.

---

## Building and Running
The following commands are available via `npm`:

- **Install Dependencies**: `npm install`
- **Development Server**: `npm run dev` (Runs at [http://localhost:3000](http://localhost:3000))
- **Production Build**: `npm run build`
- **Start Production Server**: `npm run start`
- **Linting**: `npm run lint`

---

## Key Files & Development Conventions

### Data Customization
Most of the website's content is controlled by `data/memories.ts`. To update the website, you should modify:
- `coupleInfo`: Names, anniversary date, and the main love letter message.
- `photos`: An array of photo objects (supports URLs or local paths in `/public`).
- `timelineEvents`: Key milestones in the relationship with dates, titles, and emojis.

### Components
- `Hero.tsx`: The landing section with an entry animation.
- `Timeline.tsx`: An interactive vertical timeline using Framer Motion.
- `Gallery.tsx`: A masonry-style photo gallery with a lightbox viewer.
- `Countdown.tsx`: A real-time timer counting down to the next anniversary.
- `MusicPlayer.tsx`: Handles background audio playback.
- `FloatingHearts.tsx`: A background animation effect.

### Styling
- **Global Styles**: Defined in `app/globals.css`.
- **Tailwind Config**: Found in `tailwind.config.js`.
- **Animations**: Prefer `framer-motion` for complex transitions and `tailwind` for simple ones.

---

## Usage for Gemini CLI
When assisting with this project:
1. **Content Updates**: Focus on `data/memories.ts`.
2. **UI Changes**: Identify the specific component in `components/`.
3. **Styling**: Use Tailwind utility classes directly in the TSX files.
4. **Media**: Ensure `music.mp3` exists in `public/` for the music player to work.
5. **Deployment**: The project is optimized for Vercel but can be hosted on any Node.js platform.
