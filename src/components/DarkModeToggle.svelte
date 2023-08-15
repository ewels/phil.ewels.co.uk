<script lang="ts">
  // <Icon name="ph:sun-bold" class="mr-2 inline h-4 w-4 text-gray-300 dark:text-gray-600" />
  const icon_ph_sun_bold = `<svg viewBox="0 0 256 256" class="mr-2 inline h-4 w-4 text-gray-600 dark:text-gray-600" astro-icon="ph:sun-bold"><path fill="currentColor" d="M128 56a72 72 0 1 0 72 72 72.1 72.1 0 0 0-72-72zm0 120a48 48 0 1 1 48-48 48 48 0 0 1-48 48zM116 28V12a12 12 0 0 1 24 0v16a12 12 0 0 1-24 0zm74.2 37.8a12 12 0 0 1 0-17l11.3-11.3a12 12 0 0 1 17 17l-11.3 11.3a12 12 0 0 1-8.5 3.5 12.2 12.2 0 0 1-8.5-3.5zM256 128a12 12 0 0 1-12 12h-16a12 12 0 0 1 0-24h16a12 12 0 0 1 12 12zm-37.5 73.5a12 12 0 0 1 0 17 11.6 11.6 0 0 1-8.5 3.5 12 12 0 0 1-8.5-3.5l-11.3-11.3a12 12 0 0 1 17-17zM140 228v16a12 12 0 0 1-24 0v-16a12 12 0 0 1 24 0zm-74.2-37.8a12 12 0 0 1 0 17l-11.3 11.3A12 12 0 0 1 46 222a11.6 11.6 0 0 1-8.5-3.5 12 12 0 0 1 0-17l11.3-11.3a12 12 0 0 1 17 0zM28 140H12a12 12 0 0 1 0-24h16a12 12 0 0 1 0 24zm9.5-85.5a12 12 0 0 1 17-17l11.3 11.3a12 12 0 0 1 0 17 12.2 12.2 0 0 1-8.5 3.5 12 12 0 0 1-8.5-3.5z"></path></svg>`;
  // <Icon name="ph:moon-bold" class="inline h-4 w-4 text-gray-600 dark:text-gray-300" />
  const icon_ph_moon_bold = `<svg viewBox="0 0 256 256" class="inline h-4 w-4 text-gray-300 dark:text-gray-300" astro-icon="ph:moon-bold"><path fill="currentColor" d="M228.1 149.1a12 12 0 0 0-11.6-8.5 11.4 11.4 0 0 0-3.3.6 80 80 0 0 1-98.3-98.4 13.5 13.5 0 0 0 .4-2.8 12 12 0 0 0-7.5-11.8 12.6 12.6 0 0 0-7.9-.4A104 104 0 1 0 228.2 156a12.5 12.5 0 0 0-.1-6.9zM128 208A80 80 0 0 1 88.1 58.6a104.2 104.2 0 0 0 109.3 109.3A80.4 80.4 0 0 1 128 208z"></path></svg>`;

  // Set in BaseHead.astro on page load
  $: theme = localStorage.getItem("theme");
  const toggleDarkMode = () => {
    if (theme == "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      theme = "dark";
    }
  };
</script>

<button
  class="rounded-full border dark:border-transparent bg-gray-100 dark:bg-zinc-800 px-2 py-1"
  title="Toggle between light and dark theme"
  on:click={() => toggleDarkMode()}
>
  {@html icon_ph_sun_bold}
  {@html icon_ph_moon_bold}
</button>
