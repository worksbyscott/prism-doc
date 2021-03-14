import Section from '../components/sectionComponent'
import CodeComponent from '../components/codeComponent'

const codeExample =
    `
    const animator = prism(“.prism-test”, {
        duration: 4000,
        translateX: “1000px”,
        autoPlay: false,
    })

    animator.play();     // Starts animation 

    animator.stop();     // Stops animation

    animator.reset();    // Resets to initial state

    animator.restart();  // Resets and plays
`

const animationControls = () => {



    return (
        <Section title={"Animation Controls"}>
            <p>Prism allows you to control the life of the animation via an selection of
Callback functions.</p>
            <CodeComponent code={codeExample} />
        </Section>
    )
}

export default animationControls
