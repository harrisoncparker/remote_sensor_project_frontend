// Import Styles
import '../styles/index.scss';

// Load three js and 
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// files
import gltFileURL from '../assets/3d/abstract-object.glb';

// Create a scene
const scene = new THREE.Scene();

// Create Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Load a Renderer
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the Orbitcontroller
var controls = new OrbitControls( camera, renderer.domElement ); 

// Load Light
var ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

// Load object
const loader = new GLTFLoader();
loader.load(gltFileURL, function (gltf) {

    const object = gltf.scene;
    object.scale.set(.5, .5, .5);
    scene.add(object);

}, undefined, function (error) {
    console.error(error);
});

// Animate
const animate = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
animate();


