import { Controller } from "@hotwired/stimulus";
import "@melloware/coloris/dist/coloris.css";
import Coloris from "@melloware/coloris";

// Connects to data-controller="colors"
export default class extends Controller {
  connect() {
    Coloris.init();
    Coloris({ el: "#post_font_color" });
    Coloris({ el: "#post_background_color" });

    Coloris.setInstance(".font-color", {
      swatchesOnly: true,
      swatches: [
        "#264653",
        "#2a9d8f",
        "#e9c46a",
        "rgb(244,162,97)",
        "#e76f51",
        "#d62828",
        "navy",
        "#07b",
        "#0096c7",
        "#00b4d880",
        "rgba(0,119,182,0.8)",
      ],
      theme: "pill",
      themeMode: "dark",
    });

    Coloris.setInstance(".background-color", {
      swatchesOnly: false,
      swatches: ["#264653", "#2a9d8f", "#e9c46a"],
    });
  }
}
