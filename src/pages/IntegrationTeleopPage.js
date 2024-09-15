import { Col, Row, Image, Container } from "react-bootstrap";

function IntegrationTeleopPage() {
    const codeString = `
package org.firstinspires.ftc.teamcode.teleop;

import com.qualcomm.hardware.rev.RevHubOrientationOnRobot;
import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.IMU;

import org.firstinspires.ftc.robotcore.external.navigation.AngleUnit;
import org.firstinspires.ftc.robotcore.external.navigation.YawPitchRollAngles;


@TeleOp(name="Meacnum Control Drive V2", group="TeleOp")
public class MecanumDrive2 extends LinearOpMode {
    private DcMotor frontLeft = null;
    private DcMotor frontRight = null;
    private DcMotor backLeft = null;
    private DcMotor backRight = null;
    private final double driveAdjuster = 1;


    IMU imu;

    @Override
    public void runOpMode()  throws InterruptedException {

        frontLeft = hardwareMap.dcMotor.get("front_left");
        backLeft = hardwareMap.dcMotor.get("back_left");
        frontRight = hardwareMap.dcMotor.get("back_right");
        backRight = hardwareMap.dcMotor.get("back_right");

        frontLeft.setDirection(DcMotor.Direction.REVERSE);
        frontRight.setDirection(DcMotor.Direction.REVERSE);
        backLeft.setDirection(DcMotor.Direction.REVERSE);

        imu = hardwareMap.get(IMU.class, "imu");
        RevHubOrientationOnRobot.LogoFacingDirection logoDirection = RevHubOrientationOnRobot.LogoFacingDirection.FORWARD;
        RevHubOrientationOnRobot.UsbFacingDirection  usbDirection  = RevHubOrientationOnRobot.UsbFacingDirection.UP;
        RevHubOrientationOnRobot orientationOnRobot = new RevHubOrientationOnRobot(logoDirection, usbDirection);
        imu.initialize(new IMU.Parameters(orientationOnRobot));

        telemetry.update();

        waitForStart();

        while (opModeIsActive()) {

            YawPitchRollAngles orientation = imu.getRobotYawPitchRollAngles();
            final double actualYaw = orientation.getYaw(AngleUnit.RADIANS);

            //Finds the hypotenous of the triangle created by the two joystick values. Used to find the absoulte direction to go in.
            final double r = Math.hypot(gamepad1.left_stick_x, gamepad1.left_stick_y);
            //Finds the robot's angle from the raw values of the joystick
            final double desiredYaw = Math.atan2(gamepad1.left_stick_y, gamepad1.left_stick_x);
            final double desiredTwist = gamepad1.right_stick_x;

            double v1 = r * Math.sin(desiredYaw - actualYaw) - desiredTwist;
            double v2 = r * Math.cos(desiredYaw - actualYaw) + desiredTwist;
            double v3 = r * Math.cos(desiredYaw - actualYaw) - desiredTwist;
            double v4 = r * Math.sin(desiredYaw - actualYaw) + desiredTwist;

            double max = Math.abs(v1);
            if (Math.abs(v2) > max)
                max = Math.abs(v2);
            if (Math.abs(v3) > max)
                max = Math.abs(v3);
            if (Math.abs(v4) > max)
                max = Math.abs(v4);

            v1 /= max;
            v2 /= max;
            v3 /= max;
            v4 /= max;

            frontRight.setPower(v1);
            frontLeft.setPower(v2);
            backRight.setPower(v3);
            backLeft.setPower(v4);

            telemetry.addData("Heading ", Math.toDegrees(actualYaw));
            telemetry.addData("Stick ", Math.toDegrees(desiredYaw));
            telemetry.update();
        }
    }
}
  `;
    return (
        <Container>
            <h4>TeamCode Module</h4>
            In the Software Primere chapter, we have successfully imported the Android Studio project folder, you will see on the 
            project browser an Android module named TeamCode. The Android Studio project folder will be used to build a version of 
            the Robot Controller app that includes the custom op modes that you will write to control your competition robot.<p/>

            <Image src={require("./img/AS_teamcodeFolder.jpg")} fluid width="40%"/> <p/>
            
            <h4>Creating Your First TeleOp Program</h4>
            Right mouse click on the org.firstinspires.ftc.teamcode package and select New-{'>'}Java Class from the pop-up menu. The 
            Create New Class dialog box appear. Specify the name of the new class as MyFIRSTJavaOpMode and specify as its superclass 
            the class LinearOpMode which is in the package com.qualcomm.robotcore.eventloop.opmode.<p/>
           
            <Image src={require("./img/AS_CreateLinearOpMode.jpg")} fluid width="40%"/> <p/>

            Press the OK button to create the new class. The source code for the new class should appear in the editing pane of 
            the Android Studio user interface.<p/>            
           
            <Image src={require("./img/AS_NewOpMode.jpg")} fluid width="40%"/> <p/>

            For this hands-on excise, copy-and-paste the following code for the TeleOp program.<br/>
                <pre><code>
                    {codeString}
                </code></pre><p/>

            <h4>Building and Installing Your TeleOp</h4> 
            verify that the Control Hub is powered by a freshly charged 12V battery, and that it is connected to your laptop through 
            its USB Type C port. Note that the Control Hub should automatically have USB debugging permission enabled.<p/> 

            Look towards the top of the Android Studio user interface and find the little green Play or Run button. Press this green 
            button to build the Robot Controller app and to install it onto your Control Hub.<p/>

            <Image src={require("./img/AS_controlHubUSBConnected.jpg")} fluid width="40%"/> <p/>

            Although the Control Hub lacks a built in screen, if you are Control Hub user, you can verify that the app was installed 
            onto your Control Hub properly by looking at your Driver Station. If the Driver Station indicates that it is successfully 
            connected to the Control Hub (after momentarily disconnecting while the update was occurring) then the app was 
            successfully updated.<p/> 

        </Container >)
}

export default IntegrationTeleopPage;