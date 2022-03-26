import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Viaventuro</title>
        <meta
          name="description"
          content="Op reis met de legendarische Volkswagen California."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Coming soon...</h1>

        <p className={styles.description}>
          Op reis met de meest legendarische camper ter wereld? <br /> Maak
          kennis met onze Volkswagen California T6.1!
        </p>

        <div className={styles.grid}>
          <a
            href="https://www.goboony.com/campers/belgium/limburg/lommel/17034"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h2>Sneak preview &rarr;</h2>
            <p>Neem al eens een kijkje op onze GoBoony pagina.</p>
          </a>

          <a
            href="https://www.volkswagen-commercial-vehicles.be/nl/modellen/california-6-1.html"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h2>De California T6.1 &rarr;</h2>
            <p>Meer over de California T6.1 op de website van VW.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        &copy; Viaventuro {new Date().getFullYear()}
      </footer>
    </div>
  );
}
