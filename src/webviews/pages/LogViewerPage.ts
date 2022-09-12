import ApLogViewer from "../components/LogViewer.svelte"; // Intellisense may complain, but this still builds. Need to fix

const app = new ApLogViewer({ target: document.body });

export default app;