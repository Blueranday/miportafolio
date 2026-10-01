const copyButton = document.getElementById("copy-email");
const copyStatus = document.getElementById("copy-status");

if (copyButton && copyStatus) {
  copyButton.addEventListener("click", async () => {
    const email = "esbricar.dev@gmail.com";

    try {
      if (!navigator.clipboard || !window.isSecureContext) {
        throw new Error("Portapapeles no disponible");
      }

      await navigator.clipboard.writeText(email);

      copyStatus.textContent = "Correo copiado ✓";
    } catch {
      copyStatus.textContent =
        "Copia el correo manualmente: " + email;
    }
  });
}