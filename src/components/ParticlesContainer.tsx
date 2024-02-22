import { useCallback } from "react";
import Particles from "react-particles";
import type, { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

function ParticlesContainer(props: unknown) {

   // this customizes the component tsParticles installation
   const customInit = useCallback(async (engine: Engine) => {
    // this adds the bundle to tsParticles
    await loadFull(engine);
  });

  const options = {
    /* custom options */
  };

  return <Particles options={options} init={this.customInit} />;
}

export default ParticlesContainer
