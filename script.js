document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-image');
    const contentContainer = document.getElementById('content-container');
    const leftButton = document.querySelector('.arrow-button.left');
    const rightButton = document.querySelector('.arrow-button.right');
    const imageContainer = document.querySelector('.image-container');

    // Initially, display the content related to the first image
    showContent(images[0].id);
    // Set initial opacity for side images
    adjustSideImagesOpacity();

    // Event listener for left arrow button
    leftArrow.addEventListener('click', function() {
        // Move the last image to the beginning of the list
        const lastImage = document.querySelector('.image-container img:last-child');
        imageContainer.insertBefore(lastImage, imageContainer.firstElementChild);
        // Show content related to the new first image
        showContent(document.querySelector('.image-container img:first-child').id);
        // Adjust opacity for side images
        adjustSideImagesOpacity();
    });

    // Event listener for right arrow button
    rightArrow.addEventListener('click', function() {
        // Move the first image to the end of the list
        const firstImage = document.querySelector('.image-container img:first-child');
        imageContainer.appendChild(firstImage);
        // Show content related to the new first image
        showContent(document.querySelector('.image-container img:first-child').id);
        // Adjust opacity for side images
        adjustSideImagesOpacity();
    });

    // Function to show content based on image ID
    function showContent(imageId) {
        // Clear existing content
        contentContainer.innerHTML = '';
        // Create new content based on the image ID
        const newContent = document.createElement('div');
        newContent.classList.add('image-content');
        switch (imageId) {
            case 'image1':
                newContent.innerHTML = `
                    <h2>Jungle Content</h2>
                    <label for="model1">Choose a Champion:</label>
                    <select id="modelSelector1">
                        <option value="">Select</option>
                        <option value="project-warwick.glb">Warwick</option>
                        <option value="sejuani.glb">Sejuani</option>
                    </select>
                    <div id="modelViewerContainer1"></div>
                    <div id="paragraphContainer1" class="paragraph-container1"></div>`;
            break;
            case 'image2':
                newContent.innerHTML = `
                <h2>Top Content</h2>
                <model-viewer src="3dAnimated/dragon-knight-mordekaiser.glb" alt="Model 5" ar ar-modes="webxr scene-viewer quick-look" animation-name="Walk" camera-controls autoplay camera-orbit="0deg 90deg m"></model-viewer>
                <p>This is the content related to Image 5.</p>`;
                break;
            case 'image3':
                newContent.innerHTML = `
                <h2>Mid Content (Still in testing State)</h2>
                <label for="model3">Choose a Champion:</label>
                <select id="modelSelector3">
                    <option value="">Select</option>
                    <option value="hextech-malzahar.glb">Malzahar</option>
                    <option value="veigar.glb">Veigar</option>
                </select>
                <div id="modelViewerContainer3"></div>
                <div id="paragraphContainer3" class="paragraph-container3"></div>`;
                break;
            case 'image4':
                newContent.innerHTML = "<h2>Bot Content</h2><p>You don't want to see me play this role.</p>";
                    //<model-viewer src="3dAnimated/sejuani.glb" alt="Model 4" ar ar-modes="webxr scene-viewer quick-look" camera-controls autoplay camera-orbit="0deg 90deg m"></model-viewer>
                    //<p>This is the content related to Image 5.</p>`
                break;
            case 'image5':
                newContent.innerHTML = "<h2>Support Content</h2><p>You don't want to see me play this role.</p>";
                break;
            // Add cases for more images here
            default:
                console.log('Image not found');
        }
        // Append new content to the container
        contentContainer.appendChild(newContent);

    }

    // Function to adjust opacity for side images
    function adjustSideImagesOpacity() {
        images.forEach(image => {
            if (image === document.querySelector('.image-container img:nth-child(3)') || image.classList.contains('middle-image')) {
                image.style.opacity = 1; // Full opacity for the middle image
            } else {
                image.style.opacity = 0.1; // Faded opacity for other images
            }
        });
    }

    // Add event listener for model selector
    document.addEventListener('change', function(event) {
        const modelSelector1 = event.target;
        if (modelSelector1.id === 'modelSelector1') {
            const selectedModel = modelSelector1.value;
            const modelViewerContainer1 = document.getElementById('modelViewerContainer1');
            const paragraphContainer1 = document.getElementById('paragraphContainer1');
            
            // Clear model viewer container content
            modelViewerContainer1.innerHTML = '';
            // Update model viewer container based on the selected model
            switch (selectedModel) {
                case 'sejuani.glb':
                    // Set model viewer container content for Malzahar
                    modelViewerContainer1.innerHTML = `
                        <model-viewer src="3dAnimated/${selectedModel}" 
                        alt="Model" ar ar-modes="webxr scene-viewer quick-look" 
                        camera-controls 
                        animation-name="Idle 1" autoplay>
                        </model-viewer>`;
                    paragraphContainer1.innerHTML = `
                        <p>My Sejuani Playstyle.</p>
                        <p>Starts with W</p>
                        <p>I can finish the camps within 3:30 mins so just survive :P</p>`;
                    break;
                case 'project-warwick.glb':
                    // Set model viewer container content for Veigar
                    modelViewerContainer1.innerHTML = `
                        <model-viewer src="3dAnimated/${selectedModel}" 
                        alt="Model" ar ar-modes="webxr scene-viewer quick-look" 
                        camera-controls 
                        animation-name="Taunt" autoplay>
                        </model-viewer>`;
                    paragraphContainer1.innerHTML = `
                        <p>My Warwick Playstyle.</p>
                        <p>Woof woof</p>
                        <p>I bite and heal</p>`;
                    break;
                // Add cases for other models here
                default:
                    // Clear model viewer container content if no model matches
                    modelViewerContainer1.innerHTML = '';
                    // Clear paragraphs if no model matches
                    paragraphContainer1.innerHTML = '';
                    break;
            }
        }
    });

    // Add event listener for model selector
    document.addEventListener('change', function(event) {
        const modelSelector3 = event.target;
        if (modelSelector3.id === 'modelSelector3') {
            const selectedModel = modelSelector3.value;
            const modelViewerContainer3 = document.getElementById('modelViewerContainer3');
            const paragraphContainer3 = document.getElementById('paragraphContainer3');
            // Clear model viewer container content
            modelViewerContainer3.innerHTML = '';
            // Update model viewer container based on the selected model
            switch (selectedModel) {
                case 'hextech-malzahar.glb':
                    // Set model viewer container content for Malzahar
                    modelViewerContainer3.innerHTML = `
                        <model-viewer src="3dAnimated/${selectedModel}" 
                        alt="Model" ar ar-modes="webxr scene-viewer quick-look" 
                        camera-controls 
                        animation-name="Idle 1" autoplay>
                        </model-viewer>`;
                    paragraphContainer3.innerHTML = `
                        <p>My Malzahar Playstyle.</p>
                        <p>I turn off my brain</p>
                        <p>E W Q the wave, if Jungle come Flash (if necessary), E R the enemy champ</p>`;
                    break;
                case 'veigar.glb':
                    // Set model viewer container content for Veigar
                    modelViewerContainer3.innerHTML = `
                        <model-viewer src="3dAnimated/${selectedModel}" 
                        alt="Model" ar ar-modes="webxr scene-viewer quick-look" 
                        camera-controls 
                        animation-name="Idle 1" autoplay>
                        </model-viewer>`;
                    paragraphContainer3.innerHTML = `
                        <p>My Veigar Playstyle.</p>
                        <p>I play the long game.</p>
                        <p>Stacking AP until I can one-shot anyone.</p>`;
                    break;
                // Add cases for other models here
                default:
                    // Clear model viewer container content if no model matches
                    modelViewerContainer3.innerHTML = '';
                    // Clear paragraphs if no model matches
                    paragraphContainer3.innerHTML = '';
                    break;
            }
        }
    });

});
