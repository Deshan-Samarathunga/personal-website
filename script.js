const downloadButton = document.getElementById("download-pdf");
const exportStatus = document.getElementById("export-status");
const portfolio = document.getElementById("portfolio");

const showStatus = (message, autoHide = true) => {
    if (!exportStatus) return;
    exportStatus.textContent = message;
    exportStatus.classList.add("visible");

    if (autoHide) {
        window.setTimeout(() => exportStatus.classList.remove("visible"), 3600);
    }
};

const waitForPaint = () => new Promise((resolve) => {
    window.requestAnimationFrame(() => window.requestAnimationFrame(resolve));
});

const downloadPortfolioPdf = async () => {
    if (!portfolio) return;

    if (!window.html2pdf) {
        showStatus("PDF exporter is still loading. Please try again in a moment.");
        return;
    }

    try {
        showStatus("Preparing your PDF...", false);
        downloadButton?.setAttribute("disabled", "true");
        document.body.classList.add("is-exporting");
        await waitForPaint();

        const options = {
            margin: 0,
            filename: "Deshan-Samarathunga-Portfolio.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: {
                scale: 2,
                backgroundColor: "#ffffff",
                useCORS: true,
                scrollX: 0,
                scrollY: 0
            },
            jsPDF: {
                unit: "mm",
                format: "a4",
                orientation: "portrait"
            },
            pagebreak: {
                mode: ["css", "legacy"]
            }
        };

        await window.html2pdf().set(options).from(portfolio).save();
        showStatus("PDF downloaded: Deshan-Samarathunga-Portfolio.pdf");
    } catch (error) {
        console.error(error);
        showStatus("PDF export failed. Try refreshing the page and exporting again.");
    } finally {
        document.body.classList.remove("is-exporting");
        downloadButton?.removeAttribute("disabled");
    }
};

downloadButton?.addEventListener("click", downloadPortfolioPdf);
