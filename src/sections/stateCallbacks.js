import Section from '../components/sectionComponent'
import CodeComponent from '../components/codeComponent'
const codeExample =
    `
    const animator = prism(“.prism-test”, {
        onUpdate: () => {},      //Every frame of the animation 60fps
        onPlay: () => {},       //On animation start
        onStop: () => {},       //When .stop is called
        onComplete: () => {},   //When the animation completes
    })

`

const stateCallbacks = () => {
    return (
        <Section title={"State Callbacks"}>
            <p>Prism provides a set of hooks and callbacks to call during
            the life of the animation. These call backs are <code className="inline">onUpdate,
onPlay, onComplete and onStop</code></p>
            <CodeComponent code={codeExample} />
        </Section>
    )
}

export default stateCallbacks
