/* styles imports */
import "@fontsource/dm-sans";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import "buefy/dist/buefy.css";
import "./styles/buetify.css";
import "./styles/scroll.css";

// Import ICON Librarys
import "@fortawesome/fontawesome-free/css/all.css";
import "@mdi/font/css/materialdesignicons.min.css";

/* App vue */
import { createApp } from "vue";
import App from "./App.vue";

/* Depen */
import Buefy from "buefy";

const app = createApp(App);

app.use(Buefy);

app.mount("#app");
