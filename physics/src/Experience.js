import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf';
import { Debug, Physics, RigidBody } from '@react-three/rapier'
import { useRef } from 'react';
// import { TorusGeometry } from 'three';

export default function Experience()
{
    const cube = useRef()

    const cubeClicked = () => {
        console.log('Cube Clicked');
        cube.current.applyImpulse({x: 0, y: 15, z: 0})
        cube.current.applyTorqueImpulse({x:-30, y:0 ,z:0})
    }
    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />
        <Physics>
            <Debug/>
            <RigidBody colliders='ball'>
                <mesh castShadow position={ [ 0, 5, 0 ] }>
                    <sphereGeometry />
                    <meshStandardMaterial color="orange" />
                </mesh>
            </RigidBody>

            {/* <RigidBody colliders='trimesh'> //hull, trimesh
                <mesh castShadow position={[0, 0, 0]}>
                    <torusGeometry args={[1, 0.5, 16, 32]}/>
                    <meshStandardMaterial color="mediumpurple"/>
                </mesh>
            </RigidBody> */}

            <RigidBody 
                restitution={0.4}
                ref={cube} gravityScale={1} >
                <mesh castShadow position={ [ 2, 2, 3 ] } onClick={cubeClicked}>
                    <boxGeometry />
                    <meshStandardMaterial color="mediumpurple" />
                </mesh>
                <mesh castShadow position={ [ 2, 2, -2 ] }>
                    <boxGeometry args={[2,2,1]} />
                    <meshStandardMaterial color="mediumpurple" />
                </mesh>
            </RigidBody>
            
            <RigidBody type='fixed' friction={0.7}>
                <mesh receiveShadow position-y={ - 1.25 }>
                    <boxGeometry args={ [ 10, 0.5, 10 ] } />
                    <meshStandardMaterial color="greenyellow" />
                </mesh>
            </RigidBody>
        </Physics>

    </>
}