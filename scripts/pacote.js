class Pacote{
    constructor(srcImg, local, descricao, preco){
        this.srcImg = srcImg;
        this.local = local;
        this.descricao = descricao;
        this.preco = preco;
    }
}

var todosPacotes = []
todosPacotes.push(new Pacote("docs/assetsPawShop2.0/images/products/productImage.png","COLEIRA", "A coleira é o acessório essencial para manter o seu companheiro de quatro patas seguro e com estilo. Feita com materiais de alta qualidade, nossa coleira é resistente e confortável para o seu cão. Com diversos designs e cores disponíveis, você pode encontrar a coleira perfeita que combina com a personalidade do seu peludo amigo. Além de proporcionar segurança durante os passeios, a coleira é uma expressão do amor e cuidado que você tem pelo seu cão.", ["R$ 100"]))




todosPacotes.push(new Pacote("docs/assetsPawShop2.0/images/products/productImage2.png","COMIDA", "Ofereça ao seu cão a nutrição de que ele precisa com a nossa seleção de alimentos premium. Nossas opções de comida são formuladas com ingredientes de alta qualidade, proporcionando uma dieta equilibrada e saborosa. Temos uma variedade de rações secas, úmidas e até mesmo opções naturais e orgânicas para atender às necessidades alimentares do seu pet. Cuide da saúde do seu cão com o melhor em nutrição, garantindo que ele se sinta energizado e feliz todos os dias.", ["R$100"]))
    
    


todosPacotes.push(new Pacote("docs/assetsPawShop2.0/images/products/productImage3.png","DISCO DE BRINQUEDO", "Mantenha seu cão entretido e ativo com nosso disco de brinquedo, projetado para horas de diversão ao ar livre. Feito de materiais seguros e duráveis, o disco é perfeito para jogos de busca e interação com o seu cão. Seu design aerodinâmico permite lançamentos precisos, proporcionando ao seu peludo momentos de alegria e exercício. Leve-o para o parque ou o quintal e desfrute de momentos emocionantes e saudáveis com seu cão, fortalecendo ainda mais a conexão entre vocês.", ["R$100"]))




todosPacotes.push(new Pacote("docs/assetsPawShop2.0/images/products/productImage4.png","CASINHA", "Nossa casinha para cães é um verdadeiro lar dentro de casa. Feita com materiais duráveis e resistentes às intempéries, ela oferece um refúgio seguro e aconchegante para o seu pet. Com um design espaçoso e confortável, a casinha é o local perfeito para seu cão descansar, se abrigar do sol ou da chuva, e relaxar com todo o conforto que merece. Garanta que seu melhor amigo tenha um lugar aconchegante para chamar de seu com a nossa casinha de qualidade.",["R$100"]))




todosPacotes.forEach(cadaPacote => {
    document.getElementById("catalogos").innerHTML += `
        <div class="card" style="width: 23rem;">
            <img src="${cadaPacote.srcImg}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${cadaPacote.local}</h5>
                <p class="card-text">${cadaPacote.descricao}</p>
                <p class="card-text text-success">${cadaPacote.preco}</p>
                <a href="#" class="btnVM">VER MAIS</a>
            </div>
        </div>
    
    `

});