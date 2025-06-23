let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Utrecht",
    scale: "C",
  },
  clock: {
    format: "h:i:s A d/m/Y",
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
          name: "favorites",
          links: [
            {
              name: "spotify",
              url: "https://open.spotify.com",
              icon: "brand-spotify",
              icon_color: "#a6e3a1",
            },
            {
              name: "namokiMods",
              url: "https://namokimods.com",
              icon: "clock-cog",
              icon_color: "#fab387",
            },
            {
              name: "start",
              url: "https://start.arc8.dev",
              icon: "terminal",
              icon_color: "#f38ba8"
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
              icon: "calendar",
              icon_color: "#fab387",
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: "#89b4fa",
            },
            {
              name: "photos",
              url: "https://photos.google.com",
              icon: "brand-google-photos",
              icon_color: "#cba6f7"
            },
            {
              name: "keep",
              url: "https://keep.google.com/",
              icon: "bulb",
              icon_color: "#f2de94",
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
              name: "study Bible",
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
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "resources",
          links: [
            {
              name: "github",
              url: "https://github.com/Arc891",
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
              name: "azure",
              url: "https://dev.azure.com/INGCDaaS/IngOne/_workitems/assignedtome/",
              icon: "brand-azure",
              icon_color: "#89b4fa",
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
            {
              name: "kaggle",
              url: "https://www.kaggle.com/competitions",
              icon: "brain",
              icon_color: "#a6e3a1",
            },
            {
              name: "chatgpt",
              url: "https://chatgpt.com",
              icon: "brand-openai",
              icon_color: "#ffffff",
            },
          ],
        },
        {
          name: "hosting",
          links: [
            {
              name: "cloudflare",
              url: "https://dash.cloudflare.com",
              icon: "brand-cloudflare",
              icon_color: "#fab387",
            },
            {
              name: "porkbun",
              url: "https://porkbun.com",
              icon: "pig",
              icon_color: "#f38ba8",
            },
            {
              name: "apiscp",
              url: "https://ezrah.me",
              icon: "binary-tree-2",
              icon_color: "#a6e3a1",
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
          name: "entertainment",
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
              name: "prime video",
              url: "https://primevideo.com",
              icon: "brand-amazon",
              icon_color: "#89b4fa"
            },
            {
              name: "disney+",
              url: "https://disneyplus.com",
              icon: "brand-disney",
              icon_color: "#89b4fa",
            },
            {
              name: "crunchyroll",
              url: "https://cruncyroll.com",
              icon: "brand-funimation",
              icon_color: "#fab387",
            },
            {
              name: "F1TV",
              url: "https://f1tv.com",
              icon: "square-f1",
              icon_color: "#f38ba8",
            },
            {
              name: "WEC",
              url: "https://fiawec.tv",
              icon: "clock-24",
              icon_color: "#89b4fa",
            },
            {
              name: "odido tv",
              url: "https://tv.odido.com",
              icon: "device-tv",
              icon_color: "#cba6f7",
            },
          ],
        },
        {
          name: "games",
          links: [
            
            {
              name: "chess",
              url: "https://chess.com",
              icon: "chess",
              icon_color: "#a6e3a1",
            },
            {
              name: "lichess",
              url: "https://lichess.org",
              icon: "chess-knight",
              icon_color: "#ffffff",
            },
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
            
          ],
        },
        {
          name: "communication",
          links: [
            {
              name: "whatsapp",
              url: "https://web.whatsapp.org",
              icon: "brand-whatsapp",
              icon_color: "#a6e3a1",
            },
            {
              name: "discord",
              url: "https://discord.com/channels/@me",
              icon: "brand-discord",
              icon_color: "#cba6f7"
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
      ],
    },
  ],
};

const CONFIG = new Config(default_config);
