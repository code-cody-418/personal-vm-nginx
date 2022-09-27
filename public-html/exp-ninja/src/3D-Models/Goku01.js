/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, {useEffect, useRef, useState} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import gokuGLB from "./goku01.glb"

export default function Goku01(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(gokuGLB)
  const { actions } = useAnimations(animations, group)

    // console.log("goku actions:", actions)

    useEffect(() => {
          actions[props.gokuAction].reset().fadeIn(0.5).play()
          return () => {
              actions[props.gokuAction].fadeOut(0.5)
            }
        }, [actions, props.gokuAction, props.name]);


    //This enables the 3d-model to appear and disappear from canvas
    const [visible, setVisible] = useState(false)

    useEffect( () => {
        if (props.name === 'goku')
            return setVisible(true)
        else
            return setVisible(false)
    }, [props.name])


  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.1} visible={visible}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
            castShadow
          geometry={nodes.Body_submesh_3_3_Body_0.geometry}
          material={materials['Body.001']}
          skeleton={nodes.Body_submesh_3_3_Body_0.skeleton}
        />
        <skinnedMesh
            castShadow
          geometry={nodes.Head_submesh_2_3_Head_0.geometry}
          material={materials['Head.001']}
          skeleton={nodes.Head_submesh_2_3_Head_0.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload(gokuGLB)
