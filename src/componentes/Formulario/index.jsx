import './formulario-estilos.css'
import { CampoDeFormulario } from "../CampoDeFormulario";
import { TituloFormulario } from "../TituloFormulario";
import { Label } from "../Label";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { Botao } from "../Botao";
import { useState } from 'react';


export function Formulario() {
    
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        nomeUsuario: '',
        senha: '',
        confirmarSenha: ''
    });

    const [erros, setErros] = useState({
        senha: '',
        confirmarSenha: ''
    });

    const handleChange = (evento) => {
        const {name, value} = evento.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const aoSubmeter = (evento) => {
        evento.preventDefault();

        let errosAtuais = { senha: '', confirmarSenha: '' };
        let formularioValido = true;

        if(formData.senha.length < 6) {
            errosAtuais.senha = "A senha deve ter pelo menos 6 caracteres";
            formularioValido = false;
        };

        if(formData.senha !== formData.confirmarSenha) {
            errosAtuais.confirmarSenha = "As senhas não conincidem";
            formularioValido = false;
        }

        setErros(errosAtuais);

        if(formularioValido) {
            console.log("Sucesso! Dados prontos para o envio:", formData);
            alert("Cadrasto realizado com sucesso");
            //limpa o formulario após sucesso 
            setFormData({ nome: '', email: '', nomeUsuario: '', senha: '', confirmarSenha: '' });
        }

    };

    return(
        <form className="form-evento" onSubmit={aoSubmeter}>
            <TituloFormulario>
                Formulário de cadastro
            </TituloFormulario>
            <div className="campos">
                {/* Grupo 1: Identificação */}
                <CampoDeFormulario legenda="Informações Pessoais">
                    <div className='grupo-input'>
                        <Label htmlFor="nome">Nome:</Label>
                        <CampoDeEntrada 
                            type="text" 
                            id="nome" 
                            placeholder="Digite o nome" 
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='grupo-input'>
                        <Label htmlFor="email">Email:</Label>
                        <CampoDeEntrada
                            type="email"
                            id="email"
                            placeholder="email@exemplo.com"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='grupo-input'>
                        <Label htmlFor="nomeUsuario">Usuário:</Label>
                        <CampoDeEntrada
                            type="text"
                            id="nomeUsuario"
                            placeholder="Digite o usuário"
                            name="nomeUsuario"
                            value={formData.nomeUsuario}
                            onChange={handleChange}
                        />
                    </div>
                </CampoDeFormulario>

                {/* Grupo 2: Credenciais */}
                <CampoDeFormulario legenda="Segurança da Conta">
                    <div className='grupo-input'>
                        <Label htmlFor="senha">Senha:</Label>
                        <CampoDeEntrada
                            type="password"
                            id="senha"
                            placeholder="Digite a senha"
                            name="senha"
                            value={formData.senha}
                            onChange={handleChange}
                        />
                        {erros.senha && <span className='erro-mensagem'>{erros.senha}</span>}
                    </div>

                    <div className='grupo-input'>
                        <Label htmlFor="confirmarSenha">Repita a senha:</Label>
                        <CampoDeEntrada
                            type="password"
                            id="confirmarSenha"
                            placeholder="Digite a senha novamente"
                            name="confirmarSenha"
                            value={formData.confirmarSenha}
                            onChange={handleChange}
                        />
                        {erros.confirmarSenha && <span className='erro-mensagem'>{erros.confirmarSenha}</span>}
                    </div>
                </CampoDeFormulario>
            </div>
            <div className='acoes'>
                <Botao type='submit'>
                    Registrar agora 
                </Botao>
            </div>
        </form>
    )
}