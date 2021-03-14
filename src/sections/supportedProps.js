import Section from '../components/sectionComponent'
import CodeComponent from '../components/codeComponent'

const codeExample =
    `
    prism(“.prism-test”, {
        translateX: 1000
        backgroundColor: “#D62525”
    })
`

const codeExample2 =
    `
    ‘translateX’
    ‘translateY’
    ‘translateZ’
    ‘scale’
    ‘scaleX’
    ‘scaleY’
    ‘scaleX’
    ‘rotate’
    ‘rotateX’
    ‘rotateZ’
    ‘rotateY’
    ‘skew’
    ‘skewX’
    ‘skewY’
`

const supportedProps = () => {
    return (
        <Section title={"Supported Props"}>
            <p>Prism supports animation of all CSS attributes this does include colours.</p>
            <CodeComponent code={codeExample} />
            <p>Prism also supports the majority of transform values. Here is a list of
the ones supported.  If no unit is passed prism defaults to px or deg.</p>
            <CodeComponent code={codeExample2} />
        </Section>
    )
}

export default supportedProps
