import { useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { useRef, useState } from 'react'

export default function Experience()
{
    const cube = useRef();
    const [color, setColor] = useState('orange')

    const burger = useGLTF('./hamburger.glb')
    
    useFrame((state, delta) =>
    {
        cube.current.rotation.y += delta * 0.2
    })

    const changeEventHandler = () => {
        if(color == 'red'){
            setColor('orange')
        }else{
            setColor('red')
        }
    }

    return <>

        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <primitive 
        object={burger.scene}
        scale={0.25}
        position-y={0.5}
        />

        <mesh position-x={ - 2 } 
            onClick={ changeEventHandler }
            onPointerEnter = {() => {document.body.style.cursor = 'pointer'}}
            onPointerLeave = {() => {document.body.style.cursor = 'default'}}
            >
            <sphereGeometry />
            <meshStandardMaterial color={color} />
        </mesh>

        <mesh ref={ cube } position-x={ 2 } scale={ 1.5 }
            onClick={(event)=>{ event.stopPropagation() }}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}