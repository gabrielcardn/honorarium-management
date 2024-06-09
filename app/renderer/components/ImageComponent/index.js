import { useState, useEffect } from "react";

const ImageComponent = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  // Função de depuração para verificar o caminho da imagem
  useEffect(() => {
    console.log("Image source:", src);
  }, [src]);

  return (
    <div style={{ position: "relative", width: "100%", height: "auto" }}>
      {/* {!loaded && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#f0f0f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Loading...
        </div>
      )} */}
      <img
        src={src}
        alt={alt}
        onLoad={() => {
          console.log("Image loaded"); // Adicionando um log para depuração
          setLoaded(true);
        }}
        onError={(e) => {
          console.error("Image failed to load:", e); // Adicionando um log para erros
        }}
        style={{
          display: loaded ? "block" : "none",
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default ImageComponent;
