const buscarPost = async () => {
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const post = await resposta.json()
        console.log(`Título do Post: ${post.title}`)
    } catch (erro) {
        console.log(`Deu erro: ${erro}`)
    }
}

buscarPost();