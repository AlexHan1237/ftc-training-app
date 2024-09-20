import { Col, Row, Image, Container } from "react-bootstrap";

function SoftwareCADPage() {
    return (
        <Container>
            <h2>CAD System</h2>
            Onshape is a modern cloud-based 3D CAD tool that's gained popularity in FTC robot design. Its appeal comes
            from the availability of pre-built models for FTC standard components and its user-friendly access.<p />

            In this tutorial, we’ll cover everything from setting up an account to exporting a simple model for 3D
            printing. Although the shape we create may seem basic and just a glimpse of the program’s full potential,
            it will introduce you to the essential tools you need to get started.<p />

            <h4>1. Create an Account</h4>
            Simply go to the <a href="https://onshape.com">Onshape website (https://onshape.com)</a> and select your
            subscription level to sign up. <p />

            <Image src={require("./img/onshape_signup.PNG")} fluid width="40%" /><p />

            Students should click the "Create a Student Account" link and complete the required forms. Afterward,
            an account activation link will be sent to you via email.<p />

            Once you create an account and log in, you’ll be greeted by the Document Page and the default settings dialogue.
            Each document can hold an infinite number of Onshape’s subdocument types, and the main ones that we’re interested
            in will be:<p />
            <ul>
                <li>Part Studios, which is where the bulk of creating the parts takes place.</li>
                <li>Assemblies, which is where you can “virtually test fit” your parts together and see how they’ll
                    move or work alongside each other. </li>
            </ul>
            <Image src={require("./img/onshape_doc1.PNG")} fluid width="40%" /><p />

            <h4>2. Create a Document</h4>
            OnShape CAD modeling starts with creating a new document. A "document" in OnShape is a database in the cloud where
            all relevent modeling data are stored. The modeling data is created by using the factories, such as Part Studio,
            Assembly etc. <p />

            <Image src={require("./img/onshape_doc2.PNG")} fluid width="40%" /><p />

            To make a document, click on “Create” and select “Document”. Remember, if you have the free version, all the
            design features are available to you, but your work is public and accessible to other Onshape users. Selecting
            “Document” brings up a form that allows you to name your new work which should be meaningful to your design.<p />

            <Image src={require("./img/onshape_doc_create.PNG")} fluid width="40%" /><p />

            When your new document opens, it will have two tabs at the bottom, “Part Studio 1” and “Assembly 1”, with the
            former selected. This is good as it’s where you’ll want to start. <p />

            <Image src={require("./img/onshape_doc_empty.PNG")} fluid width="40%" /><p />

            Let’s get acquainted with the Onshape user interface. In the top right corner, you'll find the View Cube (1),
            which lets you quickly switch between pre-defined views—useful for aligning your model as needed.<p />

            The “Features” list (2) displays all the actions you’ve taken on your 3D model. You can organize these actions
            into folders to make them easier to find. In CAD terminology, a “feature” refers to a geometric action; for
            instance, an extrusion feature creates a 3D shape by extending a 2D profile.<p />

            Below the Features list, the “Parts” section (3) shows all the parts created within the part studio.<p />

            At the top of the screen, you’ll find various 3D tools on the toolbar. Click on the Sketch tool (4) to begin
            creating a 2D profile.<p />

            <h4>3. Create a Sketch and an Extrusion</h4>

            <Image src={require("./img/onshape_sketch.jpg")} fluid width="40%" /><p />

            Refer to the above screenshot, try to create a sketch exactly match it by yourself. After finishing the sketch,
            click the extrusion tool and create an extrusion. If you are stuck, please watch a video which shows you all
            the steps for this excise.<p />
            <iframe width="866" height="487" src="https://www.youtube.com/embed/Oo5Zpkyqn3o" title="OnShape Part" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p />

            <h4>4. Create an Assembly</h4>
            You might notice that your document automatically created the “Assembly 1” tab. Click on it and you’ll
            switch to the assembly mode. The toolbar has changed significantly.<p />

            <Image src={require("./img/onshape_assembly1.PNG")} fluid width="40%" /><p />

            In “Assembly 1”, click the “Insert” tool to insert assembly components. A dialogue will appear with your part
            visible. Select your part and place it in the space. The dialogue will remain visible, and we can select the part
            again to insert another instance of it. Once placed, click the green tick to finish inserting the assembly components.<p />

            <Image src={require("./img/onshape_insert_comps.PNG")} fluid width="40%" /><p />

            Now, find the “Planar Mate” tool. Select the top faces on the two instances of part. The parts are now snapped to
            each other, which isn’t right. Click on the green tick to fish the mate addition. Repeat adding planar mates for the side
            faces and the back face to the front face.  You should now have an assembly of what looks like two boxes stacked. <p />

            <Image src={require("./img/onshape_mate.PNG")} fluid width="40%" /><p />

            In case that you are stuck somewhere, please refer to the following video for help.<p />

            <iframe width="866" height="487" src="https://www.youtube.com/embed/ZSkbuGJSNmo" title="OnShape Assembly Creation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p />

            
            <h4>5. Export to 3D Printing</h4>

            Once your design is ready to print you would need to export it as an STL file from Onshape and then import 
            the STL file into your slicer (Cura, Simplify3D, Prusa Slicer etc). Most 3D printers come with their own slicer 
            software. Your slicer software will most likely have tutorials that come with it or otherwise if you search 
            youtube you will find plenty of help with your particular machine.<p/>
            <Image src={require("./img/onshape_export.PNG")} fluid width="40%" /><p />
            <Image src={require("./img/onshape_export_STL.PNG")} fluid width="40%" /><p />

            By following these steps and dedicating time to practice and exploration, you’ll build a strong foundation in CAD 
            and develop the skills needed to create complex and precise designs. Thank you for reading this far with me.<p/>
        </Container >)
}

export default SoftwareCADPage;