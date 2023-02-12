import styles from "./App.module.css";
import Header from "./components/Header";
import hero from "./assets/image-web-3-desktop.jpg";
import retroPcImg from "./assets/image-retro-pcs.jpg";
import laptopsImg from "./assets/image-top-laptops.jpg";
import gamingImg from "./assets/image-gaming-growth.jpg";
import Item from "./components/Item";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.Content}>
        <div className={styles.Main}>
          <div className={styles.MainContent}>
            <img src={hero} alt="" />
            <div className={styles.MainContentText}>
              <div className={styles.HeaderText}>
                <h1>The Bright Future of Web 3.0?</h1>
              </div>
              <div className={styles.MainText}>
                <p>
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button>{"Read more".toUpperCase()}</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Sidebar}>
          <h2>New</h2>
          <div>
            <b>Hydrogen VS Electric Cars</b>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div>
            <b>The Downsides of AI Artistrys</b>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div>
            <b>Is VC Funding Drying Up?</b>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
        <div className={styles.Links}>
          <Item
            number={"01"}
            img={retroPcImg}
            title="Reviving Retro PCs"
            text={"What happens when old PCs are given modern upgrades?"}
          />
          <Item
            number={"02"}
            img={laptopsImg}
            title={"Top 10 Laptops of 2022"}
            text={"Our best picks for various needs and budgets."}
          />
          <Item
            number={"03"}
            img={gamingImg}
            title={"The Growth of Gaming"}
            text={"How the pandemic has sparked fresh opportunities."}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
