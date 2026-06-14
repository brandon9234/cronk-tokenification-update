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
    body: "Order received, personalization checked, and any issue flagged before production starts.",
    phone: "Your personalization has been checked and the production file is being prepared."
  },
  production: {
    title: "Production",
    body: "Artwork, engraving, printing, or cut files are prepared and routed to the right production step.",
    phone: "Your custom artwork is in production and moving through the shop."
  },
  packaging: {
    title: "Packaging",
    body: "The finished product is inspected, protected, packed, and prepared for carrier handoff.",
    phone: "Your finished nameplate is being inspected and packed."
  },
  shipping: {
    title: "Shipping",
    body: "The package is staged for pickup or handoff. The carrier scan is the next external signal.",
    phone: "Your package is ready for shipping handoff."
  },
  carrier: {
    title: "Carrier tracking",
    body: "UPS, FedEx, USPS, or marketplace tracking takes over after the package has been scanned.",
    phone: "Carrier tracking is now available for this order."
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
