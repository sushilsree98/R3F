import { useFrame } from '@react-three/fiber'
import {Sky, OrbitControls, useHelper, BakeShadows, Environment, softShadows, AccumulativeShadows, RandomizedLight, ContactShadows } from '@react-three/drei'
import { useRef } from 'react'
import { Perf } from 'r3f-perf';
import * as THREE from 'three';
import { useControls } from 'leva'

// softShadows({
//     frustum: 3.75,
//     size: 0.005,
//     near: 9.5,
//     samples: 15,
//     rings: 11
// })

export default function Experience()
{
    const cube = useRef()
    const light = useRef()
    const lightHelper = useHelper(light, THREE.DirectionalLightHelper, 1)
    
    useFrame((state, delta) =>
    {
        // const time = state.clock.elapsedTime;
        // cube.current.position.x = 2 + Math.sin(time)
        cube.current.rotation.y += delta * 0.2
    })

    const {color, opacity, blur } = useControls("Contact shadows",{
        'color': '#000000',
        'opacity': {'value': 0.5, 'min':0, 'max': 1},
        'blur': { 'value': 1, 'min':0, 'max': 10 }
    })

    const {sunPosition } = useControls('sunPosition',{
        'sunPosition':{value:[1, 2, 3]},
    })

    const { envMapIntensity} = useControls('EnvMapIntensity', {
        'envMapIntensity': {
            value: 3.5,
            min: 0,
            max: 5
        }
    })

    return <>
        <BakeShadows/>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <ContactShadows
            position={[0, -0.99, 0]}
            scale={10}
            resolution={512}
            far={5}
            color={color}
            opacity={opacity}
            blur={blur}
        />
        <Environment
            background
            preset='sunset'
            // files={[
            //     './environmentMaps/1/px.jpg',
            //     './environmentMaps/1/nx.jpg',
            //     './environmentMaps/1/py.jpg',
            //     './environmentMaps/1/ny.jpg',
            //     './environmentMaps/1/pz.jpg',
            //     './environmentMaps/1/nz.jpg',
            // ]}
        />

        {/* <directionalLight 
            position={ sunPosition }
            intensity={ 1.5 }
            ref={light}
            shadow-mapSize={[1024, 1024]} 
            shadow-camera-near={1}
            shadow-camera-far={10}
            shadow-camera-top={5}
            shadow-camera-right={5}
            shadow-camera-bottom={-5}
            shadow-camera-left={-5}
        /> */}
        {/* <AccumulativeShadows
            
            position={[0, -0.99, 0]}
            scale={10}
            color="#316d39"
            opacity={0.8}
        >
            <RandomizedLight
                amount={8}
                radius={1}
                ambient={0.5}
                intensity={1}
                bias={0.001}
                position={[1,2,3]}
                

            />
        </AccumulativeShadows> */}

        {/* <ambientLight intensity={ 0.5 } />
        <Sky
            sunPosition={sunPosition}
        /> */}

        <mesh castShadow position-x={ - 2 } >
            <sphereGeometry />
            <meshStandardMaterial color="orange" envMapIntensity={envMapIntensity} />
        </mesh>

        <mesh castShadow ref={ cube } position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple"  envMapIntensity={envMapIntensity}/>
        </mesh>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 } >
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" envMapIntensity={envMapIntensity} />
        </mesh>

    </>
}