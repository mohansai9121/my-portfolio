/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 reactlogo.gltf --transform 
Files: reactlogo.gltf [124.21KB] > C:\Users\mohan\Downloads\react_logo\reactlogo-transformed.glb [43.48KB] (65%)
Author: xenadus (https://sketchfab.com/xenadus)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/react-logo-76174ceeba96487f9863f974636f641e
Title: React logo
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/reactlogo-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes["React-Logo_Material002_0"].geometry}
        material={materials["Material.002"]}
        position={[0, 0.079, 0.181]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.392, 0.392, 0.527]}
      />
    </group>
  );
}

useGLTF.preload("/reactlogo-transformed.glb");
