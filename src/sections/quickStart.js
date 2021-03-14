import Section from '../components/sectionComponent'
import CodeComponent from '../components/codeComponent'

const codeExample =
    `
    npm install prism-animation
`


const codeExample2 =
    `
    import { prism } from 'prism-animation'
`

const QuickStart = () => {
    return (
        <Section title={"Quick Start Guide"}>
            <p>To install prism-animation to your project using node package manager</p>
            <CodeComponent code={codeExample} />
            <p>Once installed, import funcation to your project and start animating!</p>
            <CodeComponent code={codeExample2} />
        </Section>
    )
}

export default QuickStart
