let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Utrecht",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#f38ba8",
  },
  disabled: [],
  fastlink: "https://arc8.dev",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "raindrop",
              url: "https://app.raindrop.io",
              icon: "droplet-bolt",
              icon_color: "#a6e3a1",
            },
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net/sixty",
              icon: "binary-tree",
              icon_color: "#fab387",
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: "#a6e3a1",
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: "#fab387",
            },
            {
              name: "sheets",
              url: "https://docs.google.com/spreadsheets",
              icon: "table",
              icon_color: "#f38ba8",
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: "#89b4fa",
            },
            {
              name: "keep",
              url: "https://keep.google.com/",
              icon: "notebook",
              icon_color: "#a6e3a1",
            },
          ],
        },
        {
          name: "bible study",
          links: [
            {
              name: "Bible",
              url: "https://www.bible.com/bible",
              icon: "bible",
              icon_color: "#a6e3a1",
            },
            {
              name: "Study Bible",
              url: "https://online.studiebijbel.nl",
              icon: "book",
              icon_color: "#fab387",
            },
            {
              name: "Bible commentary",
              url: "https://freecommentaries.com/index.html",
              icon: "messages",
              icon_color: "#f38ba8",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "resources",
          links: [
            {
              name: "github",
              url: "https://github.com/Arc891?tab=repositories",
              icon: "brand-github",
              icon_color: "#a6e3a1",
            },
            {
              name: "jira",
              url: "https://anamata-nl.atlassian.net",
              icon: "briefcase",
              icon_color: "#fab387",
            },
            {
              name: "wakatime",
              url: "https://wakatime.com/dashboard",
              icon: "24-hours",
              icon_color: "#f38ba8",
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com/volodymyrpivoshenko",
              icon: "brain",
              icon_color: "#a6e3a1",
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: "#fab387",
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: "#f38ba8",
            },
          ],
        },
        {
          name: "blogs",
          links: [
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: "#fab387",
            },
            {
              name: "uber research",
              url: "https://eng.uber.com/category/articles",
              icon: "brand-uber",
              icon_color: "#f38ba8",
            },
            {
              name: "google research",
              url: "https://blog.research.google",
              icon: "hexagon-letter-g",
              icon_color: "#89b4fa",
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [
        {
          name: "social medias",
          links: [
            {
              name: "whatsapp",
              url: "https://web.whatsapp.org",
              icon: "brand-whatsapp",
              icon_color: "#a6e3a1",
            },
            {
              name: "telegram",
              url: "https://web.telegram.org",
              icon: "brand-telegram",
              icon_color: "#89b4fa",
            },
            {
              name: "instagram",
              url: "https://www.instagram.com",
              icon: "brand-instagram",
              icon_color: "#fab387",
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: "#f38ba8",
            },
          ],
        },
        {
          name: "games",
          links: [
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: "#89b4fa",
            },
            {
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: "#fab387",
            },
            {
              name: "nintendo",
              url: "https://nintendo.nl",
              icon: "device-nintendo",
              icon_color: "#f38ba8",
            },
            {
              name: "chess",
              url: "https://chess.com",
              icon: "chess",
              icon_color: "#a6e3a1",
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: "#fab387",
            },
            {
              name: "netflix",
              url: "https://www.netflix.com",
              icon: "brand-netflix",
              icon_color: "#f38ba8",
            },
            {
              name: "disney+",
              url: "https://disneyplus.com",
              icon: "brand-disney",
              icon_color: "#89b4fa",
            },
            {
              name: "twitch",
              url: "https://twitch.tc",
              icon: "brand-twitch",
              icon_color: "#cba6f7",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config);
