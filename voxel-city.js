// Voxel Cityscape - Main Application
// Three.js-based 3D city explorer with unique buildings

class VoxelCity {
    constructor() {
        this.canvas = document.getElementById('voxelCanvas');
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.buildings = [];
        this.cityGrid = [];
        this.gridSize = 10;
        this.voxelSize = 5;
        this.buildingSpacing = 120; // Increased from 60 for wider spacing

        // Camera modes
        this.cameraMode = 'firstPerson'; // 'firstPerson' or 'aerial'
        this.playerPosition = { x: 0, z: 0 };
        this.playerRotation = 0;
        this.moveSpeed = 2;

        // Input
        this.keys = {};

        // Mini-map
        this.minimap = document.getElementById('minimap');
        this.minimapCtx = this.minimap.getContext('2d');
        this.minimapTooltip = document.getElementById('minimap-tooltip');

        // Vibrant color palette (Minecraft-style)
        this.colorPalette = [
            0xFF6B6B, // Red
            0x4ECDC4, // Turquoise
            0xFFE66D, // Yellow
            0x95E1D3, // Mint
            0xF38181, // Pink
            0xAA96DA, // Purple
            0xFCACA3, // Peach
            0x48C9B0, // Teal
            0xF7DC6F, // Gold
            0x85C1E2, // Sky Blue
            0xF8B500, // Orange
            0x6C5CE7, // Indigo
        ];

        this.init();
    }

    init() {
        this.setupScene();
        this.setupLights();
        this.generateCity();
        this.setupControls();
        this.setupUI();
        this.animate();
    }

    setupScene() {
        // Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x87CEEB); // Sky blue
        this.scene.fog = new THREE.Fog(0x87CEEB, 100, 500);

        // Camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.setCameraMode('firstPerson');

        // Renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        // Ground
        const groundGeometry = new THREE.PlaneGeometry(1000, 1000);
        const groundMaterial = new THREE.MeshLambertMaterial({
            color: 0x7CFC00 // Lawn green
        });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        this.scene.add(ground);

        // Grid helper
        const gridHelper = new THREE.GridHelper(1000, 100, 0x444444, 0x222222);
        this.scene.add(gridHelper);

        // Window resize
        window.addEventListener('resize', () => this.onWindowResize());
    }

    setupLights() {
        // Ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);

        // Directional light (sun)
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(50, 100, 50);
        directionalLight.castShadow = true;
        directionalLight.shadow.camera.left = -200;
        directionalLight.shadow.camera.right = 200;
        directionalLight.shadow.camera.top = 200;
        directionalLight.shadow.camera.bottom = -200;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        this.scene.add(directionalLight);
    }

    generateCity() {
        // Get all building names from BUILDING_ASSOCIATIONS
        const buildingNames = Object.keys(BUILDING_ASSOCIATIONS);

        // Shuffle building names to randomize placement
        const shuffledNames = this.shuffleArray([...buildingNames]);

        // Calculate grid center offset
        const gridOffset = (this.gridSize * this.buildingSpacing) / 2;

        let buildingIndex = 0;

        // Generate 10x10 grid
        for (let row = 0; row < this.gridSize; row++) {
            this.cityGrid[row] = [];
            for (let col = 0; col < this.gridSize; col++) {
                // Only place building if we have names left (unique buildings only)
                if (buildingIndex < shuffledNames.length) {
                    const buildingName = shuffledNames[buildingIndex];
                    const x = col * this.buildingSpacing - gridOffset;
                    const z = row * this.buildingSpacing - gridOffset;

                    const building = this.createBuilding(buildingName, x, z);
                    this.buildings.push(building);
                    this.cityGrid[row][col] = building;

                    buildingIndex++;
                } else {
                    this.cityGrid[row][col] = null; // Empty space
                }
            }
        }

        console.log(`Generated city with ${this.buildings.length} unique buildings`);
    }

    createBuilding(name, x, z) {
        const building = {
            name: name,
            x: x,
            z: z,
            height: Math.floor(Math.random() * 13) + 3, // 3-15 voxels tall
            color: this.colorPalette[Math.floor(Math.random() * this.colorPalette.length)],
            mesh: null,
            label: null
        };

        // Create voxel building
        const geometry = new THREE.BoxGeometry(
            this.buildingSpacing * 0.8,
            building.height * this.voxelSize,
            this.buildingSpacing * 0.8
        );

        const material = new THREE.MeshLambertMaterial({
            color: building.color,
            flatShading: true
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, (building.height * this.voxelSize) / 2, z);
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        // Add edge lines for voxel effect
        const edges = new THREE.EdgesGeometry(geometry);
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 });
        const wireframe = new THREE.LineSegments(edges, lineMaterial);
        mesh.add(wireframe);

        this.scene.add(mesh);
        building.mesh = mesh;

        // Add building label (3D text sprite)
        this.createBuildingLabel(building);

        return building;
    }

    createBuildingLabel(building) {
        // Create canvas for text
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 1024;
        canvas.height = 256;

        // Draw text with background
        context.fillStyle = '#000000';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.font = 'bold 80px Arial';
        context.fillStyle = '#FFFFFF';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(building.name, canvas.width / 2, canvas.height / 2);

        // Create texture
        const texture = new THREE.CanvasTexture(canvas);
        texture.needsUpdate = true;

        const buildingWidth = this.buildingSpacing * 0.8;
        const buildingHeight = building.height * this.voxelSize;
        const buildingDepth = this.buildingSpacing * 0.8;

        building.label = []; // Store multiple labels

        // Top face label
        const topGeometry = new THREE.PlaneGeometry(buildingWidth * 0.9, buildingDepth * 0.9);
        const topMaterial = new THREE.MeshBasicMaterial({
            map: texture.clone(),
            transparent: true,
            opacity: 0.9
        });
        const topLabel = new THREE.Mesh(topGeometry, topMaterial);
        topLabel.rotation.x = -Math.PI / 2;
        topLabel.position.set(building.x, buildingHeight / 2 + 0.5, building.z);
        this.scene.add(topLabel);
        building.label.push(topLabel);

        // Front face label (facing negative Z)
        const frontGeometry = new THREE.PlaneGeometry(buildingWidth * 0.9, buildingHeight * 0.3);
        const frontMaterial = new THREE.MeshBasicMaterial({
            map: texture.clone(),
            transparent: true,
            opacity: 0.9
        });
        const frontLabel = new THREE.Mesh(frontGeometry, frontMaterial);
        frontLabel.position.set(building.x, buildingHeight / 2, building.z - buildingDepth / 2 - 2);
        this.scene.add(frontLabel);
        building.label.push(frontLabel);

        // Back face label (facing positive Z)
        const backGeometry = new THREE.PlaneGeometry(buildingWidth * 0.9, buildingHeight * 0.3);
        const backMaterial = new THREE.MeshBasicMaterial({
            map: texture.clone(),
            transparent: true,
            opacity: 0.9
        });
        const backLabel = new THREE.Mesh(backGeometry, backMaterial);
        backLabel.rotation.y = Math.PI;
        backLabel.position.set(building.x, buildingHeight / 2, building.z + buildingDepth / 2 + 2);
        this.scene.add(backLabel);
        building.label.push(backLabel);

        // Left face label (facing negative X)
        const leftGeometry = new THREE.PlaneGeometry(buildingDepth * 0.9, buildingHeight * 0.3);
        const leftMaterial = new THREE.MeshBasicMaterial({
            map: texture.clone(),
            transparent: true,
            opacity: 0.9
        });
        const leftLabel = new THREE.Mesh(leftGeometry, leftMaterial);
        leftLabel.rotation.y = Math.PI / 2;
        leftLabel.position.set(building.x - buildingWidth / 2 - 2, buildingHeight / 2, building.z);
        this.scene.add(leftLabel);
        building.label.push(leftLabel);

        // Right face label (facing positive X)
        const rightGeometry = new THREE.PlaneGeometry(buildingDepth * 0.9, buildingHeight * 0.3);
        const rightMaterial = new THREE.MeshBasicMaterial({
            map: texture.clone(),
            transparent: true,
            opacity: 0.9
        });
        const rightLabel = new THREE.Mesh(rightGeometry, rightMaterial);
        rightLabel.rotation.y = -Math.PI / 2;
        rightLabel.position.set(building.x + buildingWidth / 2 + 2, buildingHeight / 2, building.z);
        this.scene.add(rightLabel);
        building.label.push(rightLabel);
    }

    setCameraMode(mode) {
        this.cameraMode = mode;

        if (mode === 'firstPerson') {
            this.camera.position.set(0, 10, 0);
            this.camera.rotation.set(0, 0, 0);
            document.getElementById('mode-text').textContent = 'First-Person';
        } else if (mode === 'aerial') {
            this.camera.position.set(0, 300, 200);
            this.camera.lookAt(0, 0, 0);
            document.getElementById('mode-text').textContent = 'Aerial';
        }
    }

    setupControls() {
        // Keyboard input
        window.addEventListener('keydown', (e) => {
            this.keys[e.key] = true;

            // Toggle camera mode with 'V' key
            if (e.key === 'v' || e.key === 'V') {
                this.cameraMode = this.cameraMode === 'firstPerson' ? 'aerial' : 'firstPerson';
                this.setCameraMode(this.cameraMode);
            }

            // Reset view with ESC
            if (e.key === 'Escape') {
                this.playerPosition = { x: 0, z: 0 };
                this.playerRotation = 0;
                this.setCameraMode(this.cameraMode);
            }
        });

        window.addEventListener('keyup', (e) => {
            this.keys[e.key] = false;
        });

        // Mini-map interactions
        this.minimap.addEventListener('mousemove', (e) => this.onMinimapHover(e));
        this.minimap.addEventListener('mouseleave', () => {
            this.minimapTooltip.style.display = 'none';
        });
        this.minimap.addEventListener('click', (e) => this.onMinimapClick(e));
    }

    setupUI() {
        // Save button
        document.getElementById('save-btn').addEventListener('click', () => {
            this.saveCity();
        });

        // Load button
        document.getElementById('load-btn').addEventListener('click', () => {
            this.loadCity();
        });

        // Download button
        document.getElementById('download-btn').addEventListener('click', () => {
            this.downloadCity();
        });

        // Upload button
        document.getElementById('upload-btn').addEventListener('click', () => {
            document.getElementById('upload-input').click();
        });

        document.getElementById('upload-input').addEventListener('change', (e) => {
            this.uploadCity(e);
        });
    }

    updateMovement() {
        if (this.cameraMode === 'firstPerson') {
            // First-person movement
            const forward = new THREE.Vector3(0, 0, -1);
            const right = new THREE.Vector3(1, 0, 0);

            forward.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.playerRotation);
            right.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.playerRotation);

            if (this.keys['ArrowUp']) {
                this.playerPosition.x += forward.x * this.moveSpeed;
                this.playerPosition.z += forward.z * this.moveSpeed;
            }
            if (this.keys['ArrowDown']) {
                this.playerPosition.x -= forward.x * this.moveSpeed;
                this.playerPosition.z -= forward.z * this.moveSpeed;
            }
            if (this.keys['ArrowLeft']) {
                this.playerRotation += 0.05;
            }
            if (this.keys['ArrowRight']) {
                this.playerRotation -= 0.05;
            }

            this.camera.position.set(this.playerPosition.x, 10, this.playerPosition.z);
            this.camera.rotation.y = this.playerRotation;

        } else if (this.cameraMode === 'aerial') {
            // Aerial movement (pan camera)
            if (this.keys['ArrowUp']) {
                this.camera.position.z -= this.moveSpeed;
            }
            if (this.keys['ArrowDown']) {
                this.camera.position.z += this.moveSpeed;
            }
            if (this.keys['ArrowLeft']) {
                this.camera.position.x -= this.moveSpeed;
            }
            if (this.keys['ArrowRight']) {
                this.camera.position.x += this.moveSpeed;
            }
        }
    }

    drawMinimap() {
        const ctx = this.minimapCtx;
        const size = this.minimap.width;
        const cellSize = size / this.gridSize;

        // Clear
        ctx.fillStyle = '#1a1a1a';
        ctx.fillRect(0, 0, size, size);

        // Draw buildings
        for (let row = 0; row < this.gridSize; row++) {
            for (let col = 0; col < this.gridSize; col++) {
                const building = this.cityGrid[row][col];
                if (building) {
                    ctx.fillStyle = `#${building.color.toString(16).padStart(6, '0')}`;
                    ctx.fillRect(
                        col * cellSize + 2,
                        row * cellSize + 2,
                        cellSize - 4,
                        cellSize - 4
                    );
                }
            }
        }

        // Draw player position
        const gridOffset = (this.gridSize * this.buildingSpacing) / 2;
        const playerGridX = (this.playerPosition.x + gridOffset) / this.buildingSpacing;
        const playerGridZ = (this.playerPosition.z + gridOffset) / this.buildingSpacing;

        ctx.fillStyle = '#FF0000';
        ctx.beginPath();
        ctx.arc(
            playerGridX * cellSize,
            playerGridZ * cellSize,
            4,
            0,
            Math.PI * 2
        );
        ctx.fill();

        // Draw player direction
        ctx.strokeStyle = '#FF0000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(playerGridX * cellSize, playerGridZ * cellSize);
        ctx.lineTo(
            playerGridX * cellSize + Math.sin(-this.playerRotation) * 10,
            playerGridZ * cellSize + Math.cos(-this.playerRotation) * 10
        );
        ctx.stroke();
    }

    onMinimapHover(e) {
        const rect = this.minimap.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const cellSize = this.minimap.width / this.gridSize;
        const col = Math.floor(x / cellSize);
        const row = Math.floor(y / cellSize);

        if (row >= 0 && row < this.gridSize && col >= 0 && col < this.gridSize) {
            const building = this.cityGrid[row][col];
            if (building) {
                this.minimapTooltip.textContent = building.name;
                this.minimapTooltip.style.display = 'block';
                this.minimapTooltip.style.left = `${e.clientX + 10}px`;
                this.minimapTooltip.style.top = `${e.clientY + 10}px`;
            } else {
                this.minimapTooltip.style.display = 'none';
            }
        }
    }

    onMinimapClick(e) {
        const rect = this.minimap.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const cellSize = this.minimap.width / this.gridSize;
        const col = Math.floor(x / cellSize);
        const row = Math.floor(y / cellSize);

        if (row >= 0 && row < this.gridSize && col >= 0 && col < this.gridSize) {
            const building = this.cityGrid[row][col];
            if (building) {
                // Teleport to building
                this.playerPosition.x = building.x;
                this.playerPosition.z = building.z + 50; // Stand in front of building
                this.setCameraMode('firstPerson');
                console.log(`Teleported to ${building.name}`);
            }
        }
    }

    saveCity() {
        const cityData = {
            buildings: this.buildings.map(b => ({
                name: b.name,
                x: b.x,
                z: b.z,
                height: b.height,
                color: b.color
            })),
            gridSize: this.gridSize
        };

        localStorage.setItem('voxelCity', JSON.stringify(cityData));
        alert('City saved to browser storage!');
    }

    loadCity() {
        const saved = localStorage.getItem('voxelCity');
        if (saved) {
            const cityData = JSON.parse(saved);

            // Clear existing city
            this.buildings.forEach(b => {
                this.scene.remove(b.mesh);
                if (Array.isArray(b.label)) {
                    b.label.forEach(label => this.scene.remove(label));
                } else {
                    this.scene.remove(b.label);
                }
            });
            this.buildings = [];
            this.cityGrid = [];

            // Rebuild city from saved data
            this.gridSize = cityData.gridSize;
            for (let row = 0; row < this.gridSize; row++) {
                this.cityGrid[row] = [];
                for (let col = 0; col < this.gridSize; col++) {
                    this.cityGrid[row][col] = null;
                }
            }

            cityData.buildings.forEach(data => {
                const building = this.createBuilding(data.name, data.x, data.z);
                building.height = data.height;
                building.color = data.color;
                this.buildings.push(building);

                // Update grid
                const gridOffset = (this.gridSize * this.buildingSpacing) / 2;
                const col = Math.floor((data.x + gridOffset) / this.buildingSpacing);
                const row = Math.floor((data.z + gridOffset) / this.buildingSpacing);
                if (row >= 0 && row < this.gridSize && col >= 0 && col < this.gridSize) {
                    this.cityGrid[row][col] = building;
                }
            });

            alert('City loaded from browser storage!');
        } else {
            alert('No saved city found!');
        }
    }

    downloadCity() {
        const cityData = {
            buildings: this.buildings.map(b => ({
                name: b.name,
                x: b.x,
                z: b.z,
                height: b.height,
                color: b.color
            })),
            gridSize: this.gridSize
        };

        const dataStr = JSON.stringify(cityData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'voxel-city.json';
        link.click();

        URL.revokeObjectURL(url);
    }

    uploadCity(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const cityData = JSON.parse(event.target.result);

                    // Clear existing city
                    this.buildings.forEach(b => {
                        this.scene.remove(b.mesh);
                        if (Array.isArray(b.label)) {
                            b.label.forEach(label => this.scene.remove(label));
                        } else {
                            this.scene.remove(b.label);
                        }
                    });
                    this.buildings = [];
                    this.cityGrid = [];

                    // Rebuild city from uploaded data
                    this.gridSize = cityData.gridSize;
                    for (let row = 0; row < this.gridSize; row++) {
                        this.cityGrid[row] = [];
                        for (let col = 0; col < this.gridSize; col++) {
                            this.cityGrid[row][col] = null;
                        }
                    }

                    cityData.buildings.forEach(data => {
                        const building = this.createBuilding(data.name, data.x, data.z);
                        building.height = data.height;
                        building.color = data.color;
                        this.buildings.push(building);

                        // Update grid
                        const gridOffset = (this.gridSize * this.buildingSpacing) / 2;
                        const col = Math.floor((data.x + gridOffset) / this.buildingSpacing);
                        const row = Math.floor((data.z + gridOffset) / this.buildingSpacing);
                        if (row >= 0 && row < this.gridSize && col >= 0 && col < this.gridSize) {
                            this.cityGrid[row][col] = building;
                        }
                    });

                    alert('City loaded from file!');
                } catch (error) {
                    alert('Error loading city file: ' + error.message);
                }
            };
            reader.readAsText(file);
        }
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        this.updateMovement();
        this.drawMinimap();
        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize the application when the page loads
window.addEventListener('DOMContentLoaded', () => {
    const city = new VoxelCity();
});
