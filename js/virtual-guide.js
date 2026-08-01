function createNavigationHotspot(hotSpotDiv, args) {
  hotSpotDiv.classList.add("campus-navigation-hotspot");

  const icon = document.createElement("div");

  // icon.innerHTML = "↑";

  hotSpotDiv.appendChild(icon);
}

const scenes = {
  // ==================================================
  // LOBBY
  // ==================================================

  lobby: {
    title: "Lobby Kampus",

    author: "Virtual Guide",

    type: "equirectangular",

    panorama: "/assets/360/lobby/panorama.jpg",

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

        //custom pitch nya
        // cssClass: "campus-hotspot",
        // createTooltipFunc: createNavigationHotspot,

      },

      {
        pitch: -5,
        yaw: -90,

        type: "scene",

        text: "Perpustakaan",

        sceneId: "library",
      },
    ],
  },

  // ==================================================
  // LABORATORY
  // ==================================================

  laboratory: {
    title: "Laboratorium Komputer",

    author: "Virtual Guide",

    type: "equirectangular",

    panorama: "/assets/360/laboratory/panorama.jpg",

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
      },

      {
        pitch: -5,
        yaw: 45,

        type: "scene",

        text: "Auditorium",

        sceneId: "auditorium",
      },
    ],
  },

  // ==================================================
  // LIBRARY
  // ==================================================

  library: {
    title: "Perpustakaan",

    author: "Virtual Guide",

    type: "equirectangular",

    panorama: "/assets/360/library/panorama.jpg",

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
      },
    ],
  },

  // ==================================================
  // AUDITORIUM
  // ==================================================

  auditorium: {
    title: "Auditorium",

    author: "Virtual Guide",

    type: "equirectangular",

    panorama: "/assets/360/auditorium/panorama.jpg",

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
      },
    ],
  },
};

// ==================================================
// PANNELLUM
// ==================================================

const viewer = pannellum.viewer("panorama", {
  default: {
    firstScene: "lobby",

    sceneFadeDuration: 800,

    autoLoad: true,

    autoRotate: false,

    showControls: true,
    //hospost debug nya
    hotSpotDebug: true,

    compass: true,
  },

  scenes,
});

// ==================================================
// DEBUG
// ==================================================

viewer.on("load", () => {
  console.log("Panorama berhasil dimuat");

  console.log("Scene:", viewer.getScene());
});

viewer.on("error", (error) => {
  console.error("Pannellum error:", error);
});
