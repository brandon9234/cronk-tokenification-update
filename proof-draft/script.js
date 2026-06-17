const layerTabs = Array.from(document.querySelectorAll(".layer-tab"));
const layerPanels = Array.from(document.querySelectorAll("[data-layer-panel]"));

layerTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const layer = tab.dataset.layer;

    layerTabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", active ? "true" : "false");
    });

    layerPanels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.layerPanel === layer);
    });
  });
});

const stageCopy = {
  customer: {
    title: "Customer service",
    body: "Order received, personalization checked, and ambiguous notes, files, colors, or deadlines flagged before production starts.",
    phone: "Your personalization has been checked and the production file is being prepared."
  },
  proof: {
    title: "Proof / render",
    body: "High-risk custom orders can show a proof or render before production. Normal orders can move forward automatically.",
    phone: "Your order has a production-ready render. We are checking the details before making it."
  },
  production: {
    title: "Production",
    body: "Artwork, engraving, printing, cut files, LED parts, or assembly instructions are routed to the right production step.",
    phone: "Your custom artwork is in production and moving through the shop."
  },
  qc: {
    title: "Quality check",
    body: "The finished product is checked for scratches, chips, cracks, print quality, spelling, orientation, and LED function where applicable.",
    phone: "Your nameplate has been made and is being checked before it is packed."
  },
  packaging: {
    title: "Packaging",
    body: "The product is protected, packed, matched to the order, and prepared for carrier handoff.",
    phone: "Your finished nameplate is being inspected and packed."
  },
  label: {
    title: "Label created",
    body: "A label exists, the package is staged, and the customer has progress visibility before the first external scan.",
    phone: "Your shipping label has been created and your package is waiting for pickup."
  },
  transit: {
    title: "In transit",
    body: "Carrier scans can be translated into simple events: pickup, origin facility, regional hub, destination facility, and out for delivery.",
    phone: "Your package is moving through the carrier network."
  },
  delivered: {
    title: "Delivered",
    body: "The experience can close with care instructions, review timing, and a managed support path if something went wrong.",
    phone: "Delivered. Your custom nameplate should now be at the destination address."
  }
};

const stageButtons = Array.from(document.querySelectorAll(".stage-button"));
const stageTitle = document.querySelector("#stage-title");
const stageBody = document.querySelector("#stage-body");
const statusCopy = document.querySelector("#status-copy");

stageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const status = button.dataset.status;
    const copy = stageCopy[status];

    stageButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", active ? "true" : "false");
    });

    stageTitle.textContent = copy.title;
    stageBody.textContent = copy.body;
    statusCopy.textContent = copy.phone;
  });
});
