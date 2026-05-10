const downloadButton = document.getElementById("download-pdf");
const exportStatus = document.getElementById("export-status");

const showStatus = (message, autoHide = true) => {
    if (!exportStatus) return;
    exportStatus.textContent = message;
    exportStatus.classList.add("visible");

    if (autoHide) {
        window.setTimeout(() => exportStatus.classList.remove("visible"), 5200);
    }
};

const waitForPaint = () => new Promise((resolve) => {
    window.requestAnimationFrame(() => window.requestAnimationFrame(resolve));
});

const openSearchablePdfExport = async () => {
    const originalTitle = document.title;

    try {
        downloadButton?.setAttribute("disabled", "true");
        document.title = "Deshan-Samarathunga-Portfolio";
        document.body.classList.add("is-printing");
        showStatus("Opening print dialog. Choose Save as PDF to keep the text selectable.", false);
        await waitForPaint();
        window.print();
    } finally {
        window.setTimeout(() => {
            document.body.classList.remove("is-printing");
            document.title = originalTitle;
            downloadButton?.removeAttribute("disabled");
            showStatus("Print dialog opened. Choose Save as PDF in the print dialog.");
        }, 600);
    }
};

window.addEventListener("beforeprint", () => {
    document.body.classList.add("is-printing");
});

window.addEventListener("afterprint", () => {
    document.body.classList.remove("is-printing");
    downloadButton?.removeAttribute("disabled");
});

downloadButton?.addEventListener("click", openSearchablePdfExport);
