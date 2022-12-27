import { OrbitControls, TransformControls, PivotControls } from '@react-three/drei'
import { useRef } from 'react'
export default function Experience()
{
    const box = useRef()
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
            autoTransform={false}
            >
            <mesh position-x={ - 2 }>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>
        </PivotControls>

        <mesh ref={box} position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <TransformControls object={box} showY={false}/>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}