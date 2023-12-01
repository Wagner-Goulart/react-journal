//COMPONENTE CRIADO,
// IRÁ RECEBER UM PROP RESPONSÁVEL POR RENDERIZAR O JSX
const Title = ({renderMessage}) => renderMessage()

// eslint-disable-next-line react/prop-types
function HelloWorldFromRenderProp({message}) {
    return <h1>{message}</h1>
}

export { Title, HelloWorldFromRenderProp }