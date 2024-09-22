import { Col, Row, Image, Container } from "react-bootstrap";

function SoftwareAndroidPage() {
    return (
        <Container>
            <h2>Android Studio with FTC SDK</h2>
            According to FTC rules, REV ContrlHub is the only choice for the robot controller. The primary coding IDE (Integrated
            Developement Environment) of the Rev Control Hub is Android Studio. Special FTC SDK is provided for FTC qualified
            hardware. Learning Android Studio involves understanding both the IDE itself and the process of developing Android
            apps. Here’s a structured approach to help you get started: <p />

            <h4>Step 1. Install and Set Up Android Studio</h4>
            <ul>
                <li>Download and Install Android Studio:</li>
                Once you have verified that your laptop satisfies the minimum system requirements (8GB RAM, X86_64 CPU, and 64-bit
                Windows 10/11), you can go to the Android developer’s website to download and install Android Studio:<p />

                <a href="https://developer.android.com/studio">https://developer.android.com/studio</a><p />

                Click on the green “DOWNLOAD ANDROID STUDIO” button to start the download process.<br />
                <Image src={require("./img/DownloadAndroidStudio.jpg")} fluid width="40%" /><p />

                Once the setup package has downloaded, launch the application and follow the on-screen instructions to install
                Android Studio.<br />

                <Image src={require("./img/AndroidStudioWelcomeSetup.jpg")} fluid width="40%" /><p />

                <li>Set Up Your Development Environment:</li>
                Launch Android Studio and follow the setup wizard to install additional tools and SDK components. You can also
                configure the IDE according to your preferences, such as color themes.<p />
            </ul><p />

            <h4>Step 2. Downloading FTC SDK</h4>
            <p>The FTC SDK is stored in a repository called “FtcRobotController” under the <em>FIRST-Tech-Challenge</em> GitHub
                organization:</p>
            <ul class="simple">
                <li><p><a class="reference external" href="https://github.com/FIRST-Tech-Challenge/FtcRobotController">https://github.com/FIRST-Tech-Challenge/FtcRobotController</a></p></li>
            </ul>

            <p>For simplicity, instead of cloning or forking the repository. we will provides instructions on downloading the repository
                as a .ZIP file.</p>

            <Image src={require("./img/ClickOnReleases.jpg")} fluid width="40%" /><p />

            <p>From the main repository web page, click on the “releases” link to jump
                to the Releases page for the repository. The Releases page should list
                the available software releases for the repository. The latest release
                should be displayed near the top of the page.</p>
            <Image src={require("./img/Releases.jpg")} fluid width="40%" /><p />
            <p>Click on the Source code (zip) link to download the compressed Android
                Studio project folder.</p>

            <h4>Step 3. Extracting the Contents of the Archived FTC SDK Project File</h4>
            <p>Once you have downloaded the archived (.ZIP) project file, you must
                first extract the contents of the archived project file to a folder where
                your future robot controller code will be saved. For Windows
                users, right mouse click on the file and select “Extract All” from the
                pop up menu. Windows should prompt you to select a destination for the
                extracted project folder.</p>

            <h4>Step 4. Importing the FTC SDK into Android Studio</h4>
            <p>In order to import the Project, you will need to launch the Android
                Studio software on your computer. On the main Android Studio Welcome
                screen, select the option to “Import project (Gradle, Eclipse, ADT,
                etc.)” to begin the import process.</p>

            <Image src={require("./img/SelectImport.jpg")} fluid width="40%" /><p />

            <p>Android Studio should prompt you to select the project folder that you
                would like to import. Use the file browser in the pop up dialog box to
                locate and then select the folder that you extracted in an earlier
                section of this document. Make sure you select the extracted project
                folder (and not the .ZIP file which might have a similar name to the
                extracted folder). Hit the “OK” button to import the selected project
                into Android Studio.</p>

            <Image src={require("./img/SelectProjectFolder.jpg")} fluid width="40%" /><p />

            <p>In the figure above the project folder called “FtcRobotController-6.0”
                is selected to be imported into Android Studio. It might take Android
                Studio several minutes to import the project. Once the project has been
                successfully imported, the screen should look similar to the one
                depicted in the image below.</p>

            <Image src={require("./img/SuccessfullyImported.jpg")} fluid width="40%" /><p />

            <h4>Step 5. Online Tutorial</h4>
            <iframe width="853" height="480" src="https://www.youtube.com/embed/tqHGIsvgJ78" title="Android Studios Installation and Setup for FTC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p />
        </Container >)
}

export default SoftwareAndroidPage;