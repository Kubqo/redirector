import "./App.css";

function App() {
  const pathname = window.location.pathname;
  let hrefUrlAndroid;
  let hrefUrlIos;
  let hrefUrlUniversal;

  if (pathname !== "/") {
    const arr = pathname.split("/");
    if (arr.length === 4) {
      const screen = arr[1];
      const source = arr[2];
      const id = arr[3];

      hrefUrlAndroid = `com.inqool.mojeolomouc://${screen}/${source}/${id}`;
      hrefUrlIos = `cityapp.com.statutarnimestoolomouc://${screen}/${source}/${id}`;
      hrefUrlUniversal = `moje-olomouc://${screen}/${source}/${id}`;
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <a
        href={hrefUrlAndroid}
        style={{
          border: "1px solid #ee2e24",
          padding: "5px",
          borderRadius: "10px",
          textDecoration: "none",
          color: "#ee2e24",
          margin: 10,
        }}
      >
        Zobrazit detail aktuality v aplikaci (Android)
      </a>
      <a
        href={hrefUrlIos}
        style={{
          border: "1px solid #ee2e24",
          padding: "5px",
          borderRadius: "10px",
          textDecoration: "none",
          color: "#ee2e24",
          margin: 10,
        }}
      >
        Zobrazit detail aktuality v aplikaci (IOS)
      </a>
      <a
        href={hrefUrlUniversal}
        style={{
          border: "1px solid #ee2e24",
          padding: "5px",
          borderRadius: "10px",
          textDecoration: "none",
          color: "#ee2e24",
          margin: 10,
        }}
      >
        Zobrazit detail aktuality v aplikaci (Nezalezi na platforme)
      </a>
    </div>
  );
}

export default App;
