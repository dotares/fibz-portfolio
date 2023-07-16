export default function About() {
    return (
        <div
            id="about"
            className="about-section py-4 pb-24 px-8 sm:px-32 bg-gradient-to-b from-zinc-800 from-0% via-zinc-800 via-70% to-zinc-900 to-100%"
        >
            <h2 className="secondary-header font-mono text-center text-xl sm:text-2xl">
                A little about <span className="text-orange-600">me</span> 👨‍💻
            </h2>
            <p className="paragraph-content font-sans mt-8 text-justify text-md sm:text-xl ">
                A full-stack developer with a passion for building beautiful and
                functional web applications. Proficient in the{" "}
                <span className="underline">MERN stack</span>, handling both the
                front- and back-end of a project. I'm a highly motivated and
                results-oriented individual with a proven track record of
                success who's always willing to go the extra mile. Excited to
                use my skills and experience to help you build the next great
                web application.
            </p>
        </div>
    );
}
