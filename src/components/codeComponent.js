import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeComponent = (props) => {
    return (
        <>
            <div className="code-highlighter">
                <SyntaxHighlighter language={props.language ? props.language : 'javascript'} style={materialLight}>
                    {props.code}
                </SyntaxHighlighter>
            </div>
        </>
    )
}

export default CodeComponent
