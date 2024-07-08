import styles from './About.module.css'
import profilePic from '../../assets/img/about/profile.jpg'
import linkedinLogo from '../../assets/img/about/linkedin.png'
import emailLogo from '../../assets/img/about/email.png'
import githubLogo from '../../assets/img/about/github.png'

function About() {

    const openGithub = () => {
        window.open("https://github.com/k8eseo");
    };

    const openLinkedin = () => {
        window.open("https://www.linkedin.com/in/katieseo/");
    };

    const openEmail = () => {
        window.open("mailto:katieeseo@gmail.com");
    };

    return(
        <section className={styles.container} id="about">
            <img className={styles.picture} src={profilePic} width="500" alt="Profile picture"></img>
            <div className={styles.content}>
                <h1 className={styles.title}>hi, i'm katie.</h1>
                <p className={styles.about}>
                    I'm from Aldie, VA, and I'm a third-year computer science student at the University of Rochester. I love watching
                        code develop and come to life! Always interested in learning more.
                </p>
                <div className={styles.logos}>
                    <img src={githubLogo} width="50" onClick={openGithub}></img>
                    <img src={linkedinLogo} width="50" onClick={openLinkedin}></img>
                    <img src={emailLogo} width="50" onClick={openEmail}></img>
                </div>
            </div>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
}

export default About