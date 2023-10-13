'use client'
import * as THREE from 'three';
import React,{useEffect} from 'react'
/*
https://github.com/vasturiano/react-globe.gl/tree/master/src
 */
const SphereComponent = () => {
    const createMaterial =(url:string)=>{
        const texture = new THREE.TextureLoader().load(`${url}`);
        texture.center.set(.3,.3)
        //texture.wrapS = THREE.RepeatWrapping;
        //texture.wrapT = THREE.RepeatWrapping;
        //texture.repeat.set(1,1 );
        return texture
    }
    useEffect(()=>{
        //scene + geo + material
        const scene = new THREE.Scene()
        scene.background= new THREE.Color('#000000')
        const smallg=new THREE.SphereGeometry(2.75,64,64)
        const smallmat = new THREE.MeshPhongMaterial(
            {
                map:createMaterial('/texture7.jpg'),
                color:0xff0000
            })
        const geometry = new THREE.SphereGeometry(2.75,64,64)
        const material = new THREE.MeshStandardMaterial({
            map:createMaterial('/map8.jpg'),
            color:'white'
        })
        
        //mesh
        const mesh = new THREE.Mesh(geometry,material)
        const smallmesh = new THREE.Mesh(smallg,smallmat)
        smallmesh.position.x = -17  
        smallmesh.position.z=-20
        smallmesh.position.y = 6  
        scene.add(mesh)
        scene.add(smallmesh)
        //sizes
        const sizes = {
            width: window.innerWidth,
            height:window.innerHeight
        }
        //light
        /*const light  = new THREE.PointLight(0xffffff,70,100)
        light.position.set(1,1,8)
        scene.add(light)*/
        // a light is required for MeshPhongMaterial to be seen
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
        directionalLight.position.z = 3
        scene.add(directionalLight)
        //camera
        const camera = new THREE.PerspectiveCamera(45,sizes.width/ sizes.height,0.1,100)
        camera.position.z= 7
        camera.position.x = -2
        
        scene.add(camera)
        //renderer
        const canvas = document.querySelector('.webgl') as HTMLCanvasElement
        const renderer = new THREE.WebGL1Renderer({canvas})
        renderer.setSize(sizes.width,sizes.height)
        renderer.render(scene,camera)
        //controls
        
        //resize
        window.addEventListener('resize',()=>{
            //update sizes
            sizes.width=window.innerWidth
            sizes.height=window.innerHeight
            //camera
            camera.aspect = sizes.width/sizes.height
            camera.updateProjectionMatrix()
            renderer.setSize(sizes.width,sizes.height)
        })
        const animate=()=> {
            requestAnimationFrame(animate)
            smallmesh.rotateY(0.0009)
            smallmesh.rotateX(0.00005)
            mesh.rotateX(0.00005)
            mesh.rotateZ(0.000005)
            mesh.rotateY(0.0005)
            
            renderer.render(scene, camera)
        }
        
        animate()
    },[])
return (
      <>
        <canvas className='webgl sphere-component' >
        </canvas>
            
      
      </>
    )
}
  
  export default SphereComponent