# Education Responsive Design React Tailwind

## Description

Source Code untuk mempelajari `Responsive Web Design` (RWD) dengan menggunakan React dan Tailwind

## Step-by-step Installation

1. Buka `sources/a-start`
1. `npm install -D tailwindcss postcss autoprefixer`
1. `npx tailwindcss init -p`
1. Buka `tailwind.config.js` dan modifikasi kode sebagai berikut:
    ```js
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```
1. Buka `index.css` dan tambahkan `tailwind`
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

## References

- https://tailwindcss.com/docs/guides/vite#react