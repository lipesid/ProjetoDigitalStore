Instruções para uso: <br>
No diretorio escolhido faça: <br>
git clone https://github.com/gt-05/grupo-02.git <br>
cd grupo-02/backend <br>
npm install <br>
crie um arquivo .env baseado nos campos pedidos em .env.sample <br>
npm run sync <br>
npm run server <br>
Com o programa Insomnia, importe o arquivo Insomnia <br>
Va para a categoria USERS <br>
Em USERS use o metodo Post chamado Create para criar um usuario, você pode editar os campos do usuario caso queira ou criar o que ja esta sendo passado <br>
Apos isso, use o metodo Post chamado Token, você ira precisar passar o email e password do usuario recem criado <br>
Copie o token e na parte Auth selecione o Bearer Token, coloque no campo Token o token copiado <br>
Repita o mesmo processo acima caso apareça "Você não tem autorização para acessar este recurso" pois é preciso de um token para determinadas funções <br>
Em CATEGORIES use o metodo post chamado Create e crie tres categorias, passando name e slug, exemplo <br>
{	
	"name":"Sapato",
 	"slug":"sapato"
} <br>
Em PRODUCTS use o metodo Post chamado Create para criar um produto <br>


