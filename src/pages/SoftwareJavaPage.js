import { Col, Row, Image, Container } from "react-bootstrap";
import '../styles.scss';

function SoftwareJavaPage() {
    const codeString = `
public class HelloWorld {
    public static void main(String[] args) {
    System.out.println("Hello, World!");
    }
}
  `;

    return (
        <Container>
            <h2>Java</h2>
            Learning Java can be a rewarding experience since it’s a versatile and widely-used programming language. Here’s a
            structured approach to help you get started: <p />

            <h4>1. What is Java?</h4>
            
                <strong>Java</strong>  is an object-oriented, high-level programming language known for its portability
                    across platforms due to its "write once, run anywhere" capability. It’s used in web applications, mobile applications
                    (especially Android), enterprise software, and more.<p/>

                Basic Concepts:<br/>
                <ul>
                    <li>Syntax: Java syntax is similar to other C-based languages, which makes it easier to learn if you have
                        experience with languages like C++ or C#.</li>
                    <li>Data Types and Variables: Learn about primitive types (int, char, float, etc.) and reference types
                        (objects, arrays).</li>
                    <li>Control Flow: Understand loops (for, while, do-while) and conditional statements (if-else, switch).</li>
                    <li>Methods: Learn how to define and call methods, pass parameters, and return values.</li>
                </ul>

            <h4>2. Set Up Your Development Environment</h4>
            <ul>
                <li>Install Java Development Kit (JDK): Download and install the latest version of the JDK from the
                    official Java website.</li>

                <li>Integrated Development Environment (IDE): Choose an IDE that suits your needs. Popular choices
                    include:</li>
                <ul>
                    <li>IntelliJ IDEA: Known for its advanced features and user-friendly interface.</li>
                    <li>Eclipse: Widely used with a robust set of tools.</li>
                </ul>
            </ul>

            <h4>3. Write and Run Your First Program</h4>
            <ul>
                <li>Hello World Program:</li>
                <pre><code>
                    {codeString}
                </code></pre>
                <li>Compile and Run:</li>
                <ul>
                    <li>Save the file as HelloWorld.java.</li>
                    <li>Open a terminal/command prompt and navigate to the directory containing the file.</li>
                    <li>Compile using: javac HelloWorld.java</li>
                    <li>Run using: java HelloWorld</li>
                </ul>
            </ul>

            <h4>4. Learn Object-Oriented Programming (OOP) Concepts</h4>
            <ul>
                <li>Classes and Objects: Understand how to define classes and create objects. Learn about
                    constructors, methods, and fields.</li>
                <li>Inheritance: Learn how classes can inherit properties and methods from other classes.</li>
                <li>Polymorphism: Understand method overriding and overloading.</li>
                <li>Encapsulation: Learn how to protect the state of an object by using private fields and public
                    getter/setter methods.</li>
                <li>Abstraction: Use abstract classes and interfaces to define abstract concepts and enforce certain methods.</li>
            </ul>

            <h4>5. Coding and Build Projects</h4>
            <ul>
                <li>Practice Coding: Solve problems on platforms like LeetCode, HackerRank, or CodeSignal to
                    strengthen your coding skills.</li>
                <li>Build Projects: Start with simple projects like a calculator or a to-do list application.
                    Gradually move to more complex projects, such as web applications or games.</li>
            </ul>

            <h4>6. Online Tutorial</h4>
            <iframe width="866" height="487" src="https://www.youtube.com/embed/eIrMbAQSU34" title="Java Tutorial for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <p />

            By following these steps and continuously practicing, you'll build a strong foundation in Java and be well-prepared to
            tackle a variety of programming challenges and projects.<p />


        </Container >)
}

export default SoftwareJavaPage;