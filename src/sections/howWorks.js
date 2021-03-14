import Section from '../components/sectionComponent'
import CodeComponent from '../components/codeComponent'

const codeExample =
    `
    prism(“.prism-test”, {
        translateX: 1000
    })
`

const codeExample2 =
    `
    prism(elementArray, {           //Use array of elements  
        translateX: 1000
    })
`


const HowWorks = () => {
    document.querySelectorAll('.prism-')
    return (
        <Section title="How It Works">
            <p>One function thats it. Simple isn’t it</p>

            <CodeComponent code={codeExample} />
            <p>
                All animations must specify the element prop on call. Target is the selected
                element you wish to animate. This supports Elements, Arrays and class
                names.
            </p>
            <CodeComponent code={codeExample2} />
        </Section>
    )
}

export default HowWorks
