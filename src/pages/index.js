import Head from "next/head";
import App from "../components/App.js";
import ResetCss from "../components/style/ResetCss.js";
import { UserProvider } from "../scripts/context";

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather</title>
        <meta name="description" content="Weather app, search for your location" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/weather.svg" />
      </Head>
      <main>
        <ResetCss />
        <UserProvider>
          <App />
        </UserProvider>
      </main>
    </>
  );
}
