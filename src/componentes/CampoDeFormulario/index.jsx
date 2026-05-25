import './campo-de-formulario-estilos.css'

export function CampoDeFormulario({children, legenda, ...props}) {
    return (
        <fieldset className='campo-form' {...props}>
            {legenda && <legend className='legenda-form'>{legenda}</legend>}
            {children}
        </fieldset>
    )
}