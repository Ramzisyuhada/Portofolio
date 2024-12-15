import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "VR Interior Designer", "Image/Interior_Wallpaper.png", 
    `
    <div class="paragraph">
     <strong>This VR-based learning app</strong> allows users to interactively explore office space planning principles from the Open University course (ADPU4331). Users can design rooms, arrange furniture, and apply materials, learning both aesthetic and technical aspects of office space planning in a realistic virtual environment.
    <!-- <br/>Image by <a href="https://www.pexels.com/fr-fr/@knownasovan" target="_blank">OVAN</a>. -->
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/oGk_8BZtscM?si=9SIIuiXMZ2CnHENh" frameborder="0" allowfullscreen></iframe>
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Snap Furniture helps users place objects accurately and consistently, aiding in the room layout process. This feature ensures that elements do not overlap and maintain uniform spacing.</li>
        <li>Users can change the wall color by pointing the laser at the desired wall and pressing the Trigger button on the VR controller. After that, a color menu appears, allowing users to select a color from the palette by pressing the Trigger button. This feature makes it easy for users to modify the wall’s appearance and create the desired atmosphere in the office space.</li>
        <li>To rotate, resize, or delete furniture, users simply point the laser at the desired furniture and press the Trigger button on the VR controller. A menu with options for Rotate, Size, and Delete will appear. Option explanations:

- Rotate: Users can select the Rotate option and use the VR controller’s joystick to rotate the furniture.
- Size: Users select the Size option and use the joystick to resize the furniture, making it larger or smaller.
- Delete: Users select the Delete option to remove the furniture from the room.</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="Image/Interior.png" alt="Optimistic Chubby Screenshot" />
        <img class="phone-screenshot" src="Image/Interior1.png" alt="Optimistic Chubby Screenshot" />
    </div>
    `, "#23bd69", true)
];