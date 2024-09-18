function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto
}

//livroDesconto.forEach(livro => console.log(`${livro.titulo}: R$:${livro.preco}`));