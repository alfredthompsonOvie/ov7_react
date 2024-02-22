import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
const hex = {
  particles: {
    color: {
      value: "#FF0000",
      animation: {
        enable: true,
        speed: 10,
      },
    },
    effect: {
      type: "trail",
      options: {
        trail: {
          length: 50,
          minWidth: 4,
        },
      },
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "destroy",
      },
      path: {
        clamp: false,
        enable: true,
        delay: {
          value: 0,
        },
        generator: "polygonPathGenerator",
        options: {
          sides: 6,
          turnSteps: 30,
          angle: 30,
        },
      },
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      value: 0,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 2,
    },
  },
  background: {
    color: "#000",
  },
  fullScreen: {
    // zIndex: -1,
    zIndex: 1,
  },
  emitters: {
    direction: "none",
    rate: {
      quantity: 1,
      delay: 0.25,
    },
    size: {
      width: 0,
      height: 0,
    },
    position: {
      x: 50,
      y: 50,
    },
  },
}

function ParticlesWrapper() {
	const [init, setInit] = useState(false);

	// this should be run only once per application lifetime
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
			// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
			// starting from v2 you can add only the features you need reducing the bundle size
			//await loadAll(engine);
			//await loadFull(engine);
			await loadSlim(engine);
			//await loadBasic(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = (container) => {
		console.log(container);
	};

	if (init)
		return (
			<Particles
				id="tsparticles"
				particlesLoaded={particlesLoaded}
				options={{
					particles: {
						color: {
							value: "#FF0000",
							animation: {
								enable: true,
								speed: 10,
							},
						},
						effect: {
							type: "trail",
							options: {
								trail: {
									length: 50,
									minWidth: 4,
								},
							},
						},
						move: {
							direction: "none",
							enable: true,
							outModes: {
								default: "destroy",
							},
							path: {
								clamp: false,
								enable: true,
								delay: {
									value: 0,
								},
								generator: "polygonPathGenerator",
								options: {
									sides: 6,
									turnSteps: 30,
									angle: 30,
								},
							},
							random: false,
							speed: 3,
							straight: false,
						},
						number: {
							value: 0,
						},
						opacity: {
							value: 1,
						},
						shape: {
							type: "circle",
						},
						size: {
							value: 2,
						},
					},
					background: {
						color: "#000",
					},
					fullScreen: {
						// zIndex: -1,
						zIndex: 1,
					},
					emitters: {
						direction: "none",
						rate: {
							quantity: 1,
							delay: 0.25,
						},
						size: {
							width: 0,
							height: 0,
						},
						position: {
							x: 50,
							y: 50,
						},
          },
          detectRetina: true,
				}}
			/>
		);

	return null;
}

export default ParticlesWrapper;
