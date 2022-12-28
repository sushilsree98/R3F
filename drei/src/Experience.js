import { OrbitControls, TransformControls, PivotControls, Html, Text, Float, MeshReflectorMaterial } from '@react-three/drei'
import { useRef } from 'react'
export default function Experience()
{
    const box = useRef()
    const sphere = useRef()
    return <>

        <OrbitControls makeDefault/>
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <PivotControls
            anchor={[0, 0, 0]}
            activeAxes={[1, 0, 1]}
            depthTest={false}
            scale={100}
            fixed={true}
            >
            <mesh position-x={ - 2 } ref={sphere}>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>
        </PivotControls>

        <mesh ref={box} position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
            <Html
                position={[1,1,0]}
                wrapperClass="label"
                center
                distanceFactor={8}
                occlude={[sphere, box]}
            >Cube</Html>
        </mesh>

        <TransformControls object={box} showY={false}/>

        <mesh  position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            {/* <meshStandardMaterial color="greenyellow" /> */}
            <MeshReflectorMaterial
                color={'greenyellow'}
            />
        </mesh>

        <Float>
            <Text
                font='./bangers-v20-latin-regular.woff'
                fontSize={1}
                color={'salmon'}
                position-y={2}
            >I Love R3F
            </Text>

        </Float>

    </>
}