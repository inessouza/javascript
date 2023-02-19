<h2>Módulos</h2>

Módulos são script mode por padrão.

- Variáveis não "vazam escopo" global
- Várias ações "sensíveis" são proibidas

Dentro do módulo, this é undefined e não uma referência para window. Membros criados "soltos" não pertencem a window.

Boa prática: para componentes, use a exportação padrão. Use named exports apenas em casos em que se aplique, tais como bibliotecas e utilitários.

É possível ver o carregamento dos módulos na aba Network do navegador. O carregamento é assíncrono, mas a ordem de execução é mantida.

