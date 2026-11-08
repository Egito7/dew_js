const formulario = document.querySelector("#formularioAcademico");
console.log(formulario);

function criarCampo(id, textoLabel, tipo) {
    const div = document.createElement("div");

    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = textoLabel;

    const input = document.createElement("input");
    input.type = tipo;
    input.id = id;
    input.name = id;
    input.placeholder = textoLabel;

    if (tipo === "number") {
        input.min = "0";
        input.max = "10";
        input.step = "0.1";
    }

    div.appendChild(label);
    div.appendChild(input);
    return div;
}

formulario.appendChild(criarCampo("nota1", "Digite a nota 1", "number"));
formulario.appendChild(criarCampo("nota2", "Digite a nota 2", "number"));

const botao = document.createElement("button");
botao.type = "submit";
botao.textContent = "Calcular";
formulario.appendChild(botao);

const resultado = document.createElement("p");
resultado.id = "resultado";
formulario.appendChild(resultado);

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); // impede a página de recarregar

    const nome = document.querySelector("#nome").value.trim();
    const nota1 = parseFloat(document.querySelector("#nota1").value);
    const nota2 = parseFloat(document.querySelector("#nota2").value);

    if (nome === "" || isNaN(nota1) || isNaN(nota2)) {
        resultado.textContent = "Preencha o nome e as duas notas.";
        return;
    }

    const media = (nota1 + nota2) / 2;

    resultado.textContent = `Nome: ${nome} | Média: ${media.toFixed(2)}`;
});
