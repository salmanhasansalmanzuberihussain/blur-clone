import styles from '@/styles/Home.module.css';

export default function AirdropPopUp() {
  return (
    <section className={styles.airdropPopUp}>
      <p>
        $BLUR airdrop now LIVE for everyone who's traded NFT's in the last 3
        months. All Care Package holders and Creators.
      </p>
      <button className={styles.airdropPopUp_btn}>Claim $BLUR</button>
    </section>
  );
}
