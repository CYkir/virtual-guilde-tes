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
    // title: "halaman Depan",

    author: "Virtual Guide",

    type: "equirectangular",

    panorama: "./assets/360/halaman/panorama.jpeg",

    pitch: 0,

    yaw: 0,

    hfov: 100,

    hotSpots: [
      {
        pitch: -5.207806885444995,
        yaw: 45.580173923607475,

        type: "scene",

        // text: "Kelas",

        sceneId: "lobi",

        // cssClass: "campus-navigation-hotspot",

        // createTooltipFunc: createNavigationHotspot,

        createTooltipArgs: {
          // text: "Laboratorium Komputer",
        },
      },

      {
        pitch: -6.883940616930251,
        yaw: -31.689857759167637,

        type: "scene",

        // text: "Kelas",

        sceneId: "belakang",

        // cssClass: "campus-navigation-hotspot",

        // createTooltipFunc: createNavigationHotspot,

        createTooltipArgs: {
          // text: "Laboratorium Komputer",
        },
      },
    ],
  },

  // LABORATORY

  lobi: {
    // title: "Lobi Mall",

    author: "Virtual Guide",

    type: "equirectangular",

    panorama: "./assets/360/lobby/panorama.jpeg",

    pitch: 0,

    yaw: 0,

    hfov: 100,

    hotSpots: [
      {
        pitch: -14.600626951848493,

        yaw: 162.48575232796708,

        type: "scene",

        // text: "Keluar ke Halaman",

        sceneId: "halaman",

        // cssClass: "campus-navigation-hotspot",

        // createTooltipFunc: createNavigationHotspot,

        createTooltipArgs: {
          // text: "Keluar ke Halaman",
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
        pitch: 6.894056709961352,

        yaw: -4.464844021044616,

        type: "scene",

        text: "Kembali ke Lobby",

        sceneId: "lobby",

        // cssClass: "campus-navigation-hotspot",

        // createTooltipFunc: createNavigationHotspot,

        createTooltipArgs: {
          // text: "Kembali ke Lobby",
        },
      },
    ],
  },

  // AUDITORIUM

  belakang: {
    // title: "belakang",

    author: "Virtual Guide",

    type: "equirectangular",

    panorama: "./assets/360/belakang/panorama.jpeg",

    pitch: 0,

    yaw: 0,

    hfov: 100,

    hotSpots: [
      {
        pitch: -11.336833453831881,

        yaw: -118.55521803995978,

        type: "scene",

        // text: "Kembali ke Lobby",

        sceneId: "halaman",

        // cssClass: "campus-navigation-hotspot",

        // createTooltipFunc: createNavigationHotspot,

        createTooltipArgs: {
          // text: "Kembali ke Lobby",
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

    // hotSpotDebug: true,
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
