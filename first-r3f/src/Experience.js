import { useFrame, useThree, extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { useRef } from 'react';
import CustomObject from './CustomObject';


extend({ 'OrbitControls': OrbitControls});

export default function Experience() { 
    
    const three = useThree();
    const meshRef = useRef();
    const groupRef = useRef();

    useFrame((state, delta)=>{
        meshRef.current.rotation.y += delta
        // const angle = state.clock.elapsedTime
        // state.camera.position.x = Math.sin(angle) * 8;
        // state.camera.position.z = Math.cos(angle) * 8;
        // state.camera.lookAt(0,0,0)
        // groupRef.current.rotation.y += delta
    })

    return(
        <>
            <orbitControls args={[three.camera, three.gl.domElement]} />

            <directionalLight position={[1,2,3]} intensity={1.5}/>
            <ambientLight intensity={0.5}/>

            <group ref={groupRef}>
                <mesh ref={meshRef} position-x={2} rotation-y={Math.PI * 0.25}>
                    <boxGeometry scale={1.5}/>
                    <meshStandardMaterial color='mediumpurple' wireframe={false} />
                </mesh>
                <mesh position-x={-2}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color='orange' />
                </mesh>
            </group>
                <mesh position-y={-1} scale={10} rotation-x={-Math.PI * 0.5}>
                    <planeGeometry/>
                    <meshStandardMaterial color='greenyellow'/>
                </mesh>
                <CustomObject/>
        </>
    )
}