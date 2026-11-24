// CONFIGURE ESTES LINKS ANTES DE PUBLICAR:
const CHECKOUT_URL = ""; // Ex.: https://seu-checkout.com/...
const VIDEO_URL = "";    // Ex.: https://www.youtube.com/watch?v=...

document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("show");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
  menuBtn.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("show");
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.setAttribute("aria-label", "Abrir menu");
}));

document.querySelectorAll(".faq-q").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const isOpen = item.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
    button.querySelector("span").textContent = isOpen ? "−" : "+";
  });
});

const modal = document.getElementById("modal");
document.getElementById("videoBtn").addEventListener("click", () => {
  if (VIDEO_URL) window.open(VIDEO_URL, "_blank", "noopener,noreferrer");
  else modal.classList.add("show");
});
document.getElementById("closeModal").addEventListener("click", () => modal.classList.remove("show"));
modal.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("show"); });
document.addEventListener("keydown", e => { if (e.key === "Escape") modal.classList.remove("show"); });

const checkout = document.getElementById("checkoutBtn");
document.querySelectorAll('a[href="#acessar"]').forEach(link => {
  link.addEventListener("click", () => {
    // Mantém o visitante na seção de compra.
  });
});
checkout.addEventListener("click", e => {
  if (!CHECKOUT_URL) {
    e.preventDefault();
    alert("Configure o link do seu checkout no arquivo script.js (variável CHECKOUT_URL) antes de publicar.");
    return;
  }
  checkout.href = CHECKOUT_URL;
  checkout.target = "_blank";
  checkout.rel = "noopener noreferrer";
});
