export default function Navbar() {
    return (
        <div className="navbar-section text-xl font-mono flex px-32 py-12 place-content-between">
            <div>
                <a className="brand-logo" href="#">
                    <span className="text-orange-600 text-2xl font-bold">
                        Fibbonachos.
                    </span>
                </a>
            </div>
            <div className="space-x-8">
                <a className="about-link" href="#about">
                    About
                </a>
                <a className="projects-link" href="#projects">
                    Projects
                </a>
            </div>
        </div>
    );
}
