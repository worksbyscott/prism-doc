import Section from '../components/sectionComponent'
import CodeComponent from '../components/codeComponent'

const codeExample =
    `
    prism(“.prism-test”, {
        translateX: 1000
        duration: 4000,        // Duration is ms
        easing: “outCubic”,    // Easing String
    })
`

const codeExample2 =
    `
    linear
    inQuad
    outQuad
    inOutQuad
    inCubic
    outCubic
    inOutCubic
    inQuart
    outQuart
    inOutQuart
    inQuint
    outQuint
    inOutQuint
`


const durationEasing = () => {
    return (
        <Section title="Duration and Easing">
            <p>Prism supports bezier and penner easing animations. It includes a range of
Preset easing. Prism defaults animations to inOutCubic if not set.</p>

            <CodeComponent code={codeExample} />
            <p>Here is an list of supported easing functions.
            Credit to gre on GitHub for providing the easing functions.

<code>
                    https://gist.github.com/gre/1650294

</code>
            </p>
            <CodeComponent code={codeExample2} />
        </Section>
    )
}

export default durationEasing
