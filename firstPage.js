const walmart = document.getElementById("walmartChange");

walmart.addEventListener("mouseenter", () => {
	walmart.textContent = "01 - Walmart";
});
walmart.addEventListener("mouseleave", () => {
	walmart.textContent = "Walmart";
});

const capsule = document.getElementById("capsuleChange");

capsule.addEventListener("mouseenter", () => {
	capsule.textContent = "02 - Capsule";
});
capsule.addEventListener("mouseleave", () => {
	capsule.textContent = "Capsule";
});
