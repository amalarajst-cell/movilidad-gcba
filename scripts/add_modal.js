const fs = require('fs');
const file = 'c:/Users/HP07/Pictures/Downloads/Proyecto terminalidad sencundaria/index.html';
let content = fs.readFileSync(file, 'utf8');

// Replace the dropdown links with modal triggers
const regex = /<div class="nav-dropdown" id="modulosDropdown">[\s\S]*?<\/div>/;
const newDropdown = `<div class="nav-dropdown" id="modulosDropdown">
                <ul>
                    <li><a href="javascript:void(0)" onclick="openActivityModal('actividades-extra/index.html?embedded=true#/introduccion')" class="dropdown-link">INTRODUCCIÓN</a></li>
                    <li><a href="javascript:void(0)" onclick="openActivityModal('actividades-extra/index.html?embedded=true#/senales')" class="dropdown-link">SEÑALES DE TRÁNSITO</a></li>
                    <li><a href="javascript:void(0)" onclick="openActivityModal('actividades-extra/index.html?embedded=true#/prioridades')" class="dropdown-link">PRIORIDADES DE PASO</a></li>
                </ul>
            </div>`;
content = content.replace(regex, newDropdown);

// Add Modal HTML before </body>
if (!content.includes('id="activityModal"')) {
    const modalHTML = `
    <!-- Modal for External Activities -->
    <div class="activity-modal-overlay" id="activityModal">
        <div class="activity-modal-content">
            <button class="activity-modal-close" onclick="closeActivityModal()">&times;</button>
            <iframe class="activity-iframe" id="activityIframe" src=""></iframe>
        </div>
    </div>
    <style>
    .activity-modal-overlay {
        position: fixed;
        top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(0, 8, 20, 0.95);
        z-index: 9999;
        display: none;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(10px);
    }
    .activity-modal-overlay.active {
        display: flex;
    }
    .activity-modal-content {
        width: 95%;
        height: 95%;
        background: #001d3d;
        border: 2px solid var(--gcba-yellow);
        border-radius: 12px;
        position: relative;
        overflow: hidden;
        box-shadow: 0 10px 40px rgba(0,0,0,0.8);
    }
    .activity-modal-close {
        position: absolute;
        top: 15px;
        right: 25px;
        background: var(--gcba-orange);
        color: white;
        border: none;
        font-size: 28px;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        cursor: pointer;
        z-index: 10000;
        box-shadow: 0 4px 10px rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        transition: transform 0.2s;
        line-height: 1;
    }
    .activity-modal-close:hover {
        transform: scale(1.1);
        background: #ff2a22;
    }
    .activity-iframe {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 10px;
    }
    </style>
    <script>
    function openActivityModal(url) {
        document.getElementById('activityIframe').src = url;
        document.getElementById('activityModal').classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling background
    }
    function closeActivityModal() {
        document.getElementById('activityModal').classList.remove('active');
        document.getElementById('activityIframe').src = '';
        document.body.style.overflow = '';
    }
    </script>
</body>`;
    content = content.replace('</body>', modalHTML);
}

fs.writeFileSync(file, content);
console.log('Modal code injected and dropdown updated successfully!');
