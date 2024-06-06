import { useEffect, useRef } from "react";
import "./Player.css";
import { playerConfig } from "./data";
import $ from "jquery";
import "@project-sunbird/sunbird-quml-player-web-component/styles.css";
import "@project-sunbird/sunbird-quml-player-web-component/sunbird-quml-player"


function Player() {
  const sunbirdQumlPlayerRef = useRef(null);
  window.jQuery = $;
  window.questionListUrl = "https://sunbirdsaas.com/api/question/v1/list";

  useEffect(() => {
    const playerElement = sunbirdQumlPlayerRef.current;
    const handlePlayerEvent = (event) => {
      console.log("Player Event", event.detail);
    };
    const handleTelemetryEvent = (event) => {
      console.log("Telemetry Event", event.detail);
    };

    playerElement.addEventListener("playerEvent", handlePlayerEvent);
    playerElement.addEventListener("telemetryEvent", handleTelemetryEvent);

    return () => {
      playerElement.removeEventListener("playerEvent", handlePlayerEvent);
      playerElement.removeEventListener("telemetry  Event", handleTelemetryEvent);
    };
  }, []);

  return (
    <div className="App">
      <sunbird-quml-player
        player-config={JSON.stringify(playerConfig)}
        ref={sunbirdQumlPlayerRef}
      ></sunbird-quml-player>
    </div>
  );
}

export default Player;
