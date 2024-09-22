import { Container } from "react-bootstrap";



function SoftwareGithubPage() {
    return (
        <Container>
            <h2> Git and GitHub </h2>
            Git and GitHub are both essential tools in modern software development, but they serve different purposes. <p />

            <h4>Step 1. Git</h4>
            <strong>Git</strong> is a distributed version control system. It helps track changes to files, manage different versions of a project,
            and coordinate work among multiple people. Git records changes to a project in a repository. Each change is committed to this
            repository, which allows you to go back to previous versions, branch out to develop new features, and merge changes
            from different team members.<p />

            Key Features:
            <ul>
                <li>Branching and Merging: Easily create branches to work on new features or fixes and then merge them back
                    into the main project.</li>
                <li>Commit History: Keep a detailed history of all changes made to the codebase.</li>
                <li>Local and Remote Repositories: Work locally on your machine and synchronize with a remote repository
                    if needed.</li>
            </ul> <p/>

            <h4>Step 2. GitHub</h4>
            <strong>GitHub</strong> is a web-based platform that provides hosting for Git repositories. It adds collaboration
            features like issue tracking, pull requests, and code reviews on top of Git. GitHub integrates with Git to provide a centralized place where you can store your
            code, collaborate with others, and manage your development projects. You push your local Git repository to GitHub,
            where others can access it, contribute, and collaborate.<p />

            Key Features:
            <ul>
                <li>Repositories: Host your Git repositories online and make them accessible to others.</li>
                <li>Issues and Projects: Track bugs, tasks, and project management activities.</li>
                <li>Pull Requests: Propose changes to a project and facilitate discussions and code reviews before integrating them.</li>
                <li>Actions: Automate workflows like testing and deployment with GitHub Actions.</li>
            </ul><p/>

            In short, Git is the tool for managing your code versions, and GitHub is a service that provides a collaborative
            platform to share and manage those versions. I learned Git and GitHub by watch YouTube video and Google search. <p />

            <h4>Step 3. Online Turorial </h4>
            <iframe width="853" height="480" src="https://www.youtube.com/embed/tRZGeaHPoaw" title="Git and GitHub Tutorial for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <p />
        </Container >)
}

export default SoftwareGithubPage;