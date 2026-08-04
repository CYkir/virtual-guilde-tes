
console.log("Virtual Guide 360");
// CUSTOM HOTSPOT

function createNavigationHotspot(hotSpotDiv, args) {
  hotSpotDiv.classList.add("campus-navigation-hotspot");

  // Tooltip
  hotSpotDiv.title = args.text || "Pindah lokasi";
}

// SCENES

const scenes = {
  // LOBBY

  lobby: {
    title: "Lobby Kampus",

    author: "Virtual Guide",

    type: "equirectangular",

    panorama: "./assets/360/lobby/panorama.jpg",

    pitch: 0,

    yaw: 0,

    hfov: 100,

    hotSpots: [
      {
        pitch: -18.39125533507745,

        yaw: 45,

        type: "scene",

        text: "Laboratorium Komputer",

        sceneId: "laboratory",

        cssClass: "campus-navigation-hotspot",

        createTooltipFunc: createNavigationHotspot,

        createTooltipArgs: {
          text: "Laboratorium Komputer",
        },
      },

      {
        pitch: -5,

        yaw: -90,

        type: "scene",

        text: "Perpustakaan",

        sceneId: "library",

        cssClass: "campus-navigation-hotspot",

        createTooltipFunc: createNavigationHotspot,

        createTooltipArgs: {
          text: "Perpustakaan",
        },
      },
    ],
  },

  // LABORATORY

  laboratory: {
    title: "Laboratorium Komputer",

    author: "Virtual Guide",

    type: "equirectangular",

    panorama: "./assets/360/laboratory/panorama.jpg",

    pitch: 0,

    yaw: 0,

    hfov: 100,

    hotSpots: [
      {
        pitch: -5,

        yaw: 180,

        type: "scene",

        text: "Kembali ke Lobby",

        sceneId: "lobby",

        cssClass: "campus-navigation-hotspot",

        createTooltipFunc: createNavigationHotspot,

        createTooltipArgs: {
          text: "Kembali ke Lobby",
        },
      },

      {
        pitch: -5,

        yaw: 45,

        type: "scene",

        text: "Auditorium",

        sceneId: "auditorium",

        cssClass: "campus-navigation-hotspot",

        createTooltipFunc: createNavigationHotspot,

        createTooltipArgs: {
          text: "Auditorium",
        },
      },
    ],
  },

  // LIBRARY

  library: {
    title: "Perpustakaan",

    author: "Virtual Guide",

    type: "equirectangular",

    panorama: "./assets/360/library/panorama.jpg",

    pitch: 0,

    yaw: 0,

    hfov: 100,

    hotSpots: [
      {
        pitch: -5,

        yaw: 180,

        type: "scene",

        text: "Kembali ke Lobby",

        sceneId: "lobby",

        cssClass: "campus-navigation-hotspot",

        createTooltipFunc: createNavigationHotspot,

        createTooltipArgs: {
          text: "Kembali ke Lobby",
        },
      },
    ],
  },

  // AUDITORIUM

  auditorium: {
    title: "Auditorium",

    author: "Virtual Guide",

    type: "equirectangular",

    panorama: "./assets/360/auditorium/panorama.jpg",

    pitch: 0,

    yaw: 0,

    hfov: 100,

    hotSpots: [
      {
        pitch: -5,

        yaw: 180,

        type: "scene",

        text: "Laboratorium",

        sceneId: "laboratory",

        cssClass: "campus-navigation-hotspot",

        createTooltipFunc: createNavigationHotspot,

        createTooltipArgs: {
          text: "Laboratorium",
        },
      },
    ],
  },
};

// PANNELLUM

const viewer = pannellum.viewer("panorama", {
  default: {
    firstScene: "lobby",

    sceneFadeDuration: 800,

    autoLoad: true,

    autoRotate: false,

    showControls: true,

    compass: true,

    hotSpotDebug: true,
  },

  scenes,
});

// DEBUG

viewer.on("load", () => {
  console.log("✅ Panorama berhasil dimuat");

  console.log("Scene:", viewer.getScene());
});

viewer.on("scenechange", (sceneId) => {
  console.log("Scene berubah:", sceneId);
});

viewer.on("error", (error) => {
  console.error("❌ Pannellum Error:", error);
});
