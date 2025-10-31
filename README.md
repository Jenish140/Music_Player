Neumorphic Music Player Project

Project Title: Neumorphic Music Player
Technologies: HTML, CSS, JavaScript
Design Style: Dark Neumorphic (Soft UI)


## Project Description

This is a web-based music player application built as a project assignment. It uses HTML for the structure, CSS for the dark neumorphic styling and animations, and JavaScript for all functionality.

The player is designed to be fully interactive, responsive, and provide a modern, tactile user experience.


## Core Features

* **Full Playback Controls:** Play, pause, next song, and previous song.
* **Dynamic UI:** The album art, song title, and artist name update automatically for each track.
* **Animated Album Art:** The album art image gently rotates when a song is playing and pauses when the song is paused.
* **Interactive Progress Bar:** Users can see the song's progress and click anywhere on the progress bar to "seek" (jump) to that part of the song.
* **Volume Control:** A vertical slider allows for easy volume adjustment.
* **Playlist Logic:** The JavaScript manages a playlist array, allowing the "next" and "previous" buttons to loop through the available songs.
* **Responsive Design:** The player layout adapts to look great on both desktop and mobile screens.


## How to Run This Project

This project is a static website and does not require a server. You can run it directly from your local computer in any web browser.

Follow these 3 simple steps:

### Step 1: Set Up Your Project Folder

1.  Make sure all three files (`index.html`, `style.css`, `script.js`) are in the same main folder.
2.  Inside that main folder, create two new folders:
    * `music`
    * `images`

Your folder structure should look like this:

    /YourProjectFolder
        |-- index.html
        |-- style.css
        |-- script.js
        |-- /music
        |-- /images

### Step 2: Add Your Music & Covers

1.  Place all your music files (e.g., `.mp3` files) inside the `/music` folder.
2.  Place all your cover art (e.g., `.jpg` or `.png` files) inside the `/images` folder.

### Step 3: Edit the `script.js` File

This is the most important step. You must tell the player what your songs are.

1.  Open `script.js` in a text editor (like Notepad or VS Code).
2.  Find the `songs` array at the top of the file. It looks like this:

    ```javascript
    const songs = [
        {
            title: 'Song One',
            artist: 'Artist A',
            src: 'music/song1.mp3',
            cover: 'images/cover1.jpg'
        },
        {
            title: 'Song Two',
            artist: 'Artist B',
            src: 'music/song2.mp3',
            cover: 'images/cover2.jpg'
        },
        // ... more songs
    ];
    ```

3.  **Edit this array** to match your files.
    * `title`: The name of the song you want to display.
    * `artist`: The artist name you want to display.
    * `src`: The path to the music file (e.g., `music/your-song-name.mp3`).
    * `cover`: The path to the cover art (e.g., `images/your-cover-name.jpg`).

### Step 4: Run the Project

After saving your changes to `script.js`, just double-click the **`index.html`** file. It will open directly in your default web browser (like Chrome, Firefox, or Edge), and your music player will be ready to use.
