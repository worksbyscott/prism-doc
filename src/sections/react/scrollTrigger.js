import Section from '../../components/sectionComponent'
import CodeComponent from '../../components/codeComponent'

const codeExample =
    `
    <PrismComponent
        onScrollTrigger
        animation={{
          duration: 2000,
          easing: “easeOutCubic”,
          fontSize: “50px”,
          opacity: 1 
        }}>
        <h1>Hello World</h1>
    </PrismComponent>
`


const scrollTrigger = () => {
    return (
        <Section title={"Scroll Trigger"}>
            <p>Trigger PrismComponent animation when the element comes into the
            Viewport (window). This requires the autoPlay prop to be set to false.
            This animation can only be triggered once until its remounted or the page
Has been refreshed. </p>
            <CodeComponent code={codeExample} />
        </Section>
    )
}

export default scrollTrigger
