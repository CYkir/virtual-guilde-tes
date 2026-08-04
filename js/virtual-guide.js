
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

  halaman: {
    title: "halaman Depan",

    author: "Virtual Guide",

    type: "equirectangular",

    panorama: "./assets/360/halaman/panorama.jpeg",

    pitch: 0,

    yaw: 0,

    hfov: 100,

    hotSpots: [
      {
        pitch: 11.48989556487606,
        yaw: -16.995300920041956,

        type: "scene",

        text: "Lobby",

        sceneId: "lobi",

        // cssClass: "campus-navigation-hotspot",

        // createTooltipFunc: createNavigationHotspot,

        createTooltipArgs: {
          text: "Laboratorium Komputer",
        },
      },
    ],
  },

  // LABORATORY

  lobi: {
    title: "Lobi Mall",

    author: "Virtual Guide",

    type: "equirectangular",

    panorama: "./assets/360/lobby/panorama.jpg",

    pitch: 0,

    yaw: 0,

    hfov: 100,

    hotSpots: [
      {
        pitch: 19.964816817651034,

        yaw: 62.302991360436074,

        type: "scene",

        text: "Keluar ke Halaman",

        sceneId: "halaman",

        // cssClass: "campus-navigation-hotspot",

        // createTooltipFunc: createNavigationHotspot,

        createTooltipArgs: {
          text: "Keluar ke Halaman",
        },
      },

      {
        pitch: 16.3510905085903,

        yaw: 140.46785815145353,

        type: "scene",

        text: "Masuk Kampus",

        sceneId: "masuk",

        // cssClass: "campus-navigation-hotspot",

        // createTooltipFunc: createNavigationHotspot,

        createTooltipArgs: {
          text: "Masuk Kampus",
        },
      },
    ],
  },

  // Masuk

  masuk: {
    title: "Masuk",

    author: "Virtual Guide",

    type: "equirectangular",

    panorama: "./assets/360/masuk/panorama.jpg",

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

        // cssClass: "campus-navigation-hotspot",

        // createTooltipFunc: createNavigationHotspot,

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

        // cssClass: "campus-navigation-hotspot",

        // createTooltipFunc: createNavigationHotspot,

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
    firstScene: "halaman",

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
  console.log("Panorama berhasil dimuat");

  console.log("Scene:", viewer.getScene());
});

viewer.on("scenechange", (sceneId) => {
  console.log("Scene berubah:", sceneId);
});

viewer.on("error", (error) => {
  console.error("Pannellum Error:", error);
});
