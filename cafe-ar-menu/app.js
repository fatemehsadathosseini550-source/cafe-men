const menuContainer = document.getElementById('menu-container');

menuContainer.innerHTML = `
    <div style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
        <h2>کافه لاته</h2>
        <p style="color: #d97706; font-weight: bold;">۸۵,۰۰۰ تومان</p>
        <p>اسپرسو و شیر با فوم ابریشمی</p>
        <model-viewer 
            src="https://modelviewer.dev/shared-assets/models/Astronaut.glb" 
            alt="کافه لاته" 
            ar 
            ar-modes="webxr scene-viewer quick-look" 
            camera-controls 
            auto-rotate 
            style="width: 100%; height: 250px; background-color: #f5f5f5; border-radius: 8px; margin-top: 10px;">
        </model-viewer>
    </div>
`;
