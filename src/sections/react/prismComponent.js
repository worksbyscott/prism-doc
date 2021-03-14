import Section from '../../components/sectionComponent'

import CodeComponent from '../../components/codeComponent'

const codeExample =
    `
    prism(“.prism-test”, {
        duration: 2000,
        easing: “easeOutCubic”,
        fontSize: “50px”,
        opacity: 1
      })
  
      //Inside the component return
      <div className=“prism-test2”>
        <h1>Hello World</h1>
      </div>
`

const codeExample2 =
    `
    <PrismComponent
    animation={{
      duration: 2000,
      easing: “easeOutCubic”,
      fontSize: “50px”,
      opacity: 1
    }}>
    <h1>Hello World</h1>
  </PrismComponent>
`

const prismComponent = () => {
    return (
        <Section title={"Cleaner more organised code"}>
            <p>Combining the animation function into JSX element allows for ease of
            Maintainability. Although PrismComponents do not gain access to animation
Controls functions like play(), stop(), restart().</p>
            <CodeComponent code={codeExample} language={'JSX'} />
            <p>Prism Component</p>
            <CodeComponent code={codeExample2} />
        </Section>
    )
}

export default prismComponent
