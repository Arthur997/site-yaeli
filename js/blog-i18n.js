/* Textos do blog por idioma. Carregado depois de js/i18n.js e antes de js/main.js
   nas páginas do blog; junta-se ao mesmo dicionário, então a troca de idioma é a mesma do site.
   Como no resto do site, o inglês mora no HTML e aqui fica o português.
   Os artigos são das autoras e entram como foram entregues, sem revisão de texto. */

(function (texts) {
  'use strict';

  var en = {
    'blog.meta': 'Blog / Reflections | Átma Qatarse Institute',
    'blog.description': 'Writing on women\'s experiences and the themes explored through the Ágape Women\'s Support project.',
    'post.serpent.meta': 'Queen Mother Snake | Átma Qatarse Institute',
    'post.serpent.description': 'Women\'s sovereignty and patriarchy. A reflection by Iyá Ben.',
    'post.eve.meta': 'From Adjunct to Opponent | Átma Qatarse Institute',
    'post.eve.description': 'A retelling of Eve and Adam in the garden and the beginning of a struggle for power.'
  };

  var pt = {
    /* Navegação do blog */
    'blog.home': 'Início',
    'blog.overline': 'Blog / Reflexões',
    'blog.title': 'Reflexões',
    'blog.read': 'Ler artigo',
    'blog.category': 'Projeto <span translate="no">Ágape</span>',
    'post.back': 'Voltar ao blog',
    'post.home': 'Voltar ao início',
    'post.by': 'Por',
    'blog.meta': 'Blog / Reflexões | Átma Qatarse Institute',
    'blog.description': 'Textos sobre as experiências das mulheres e os temas explorados pelo projeto Ágape Women\'s Support.',

    /* Rainha Mãe Serpente */
    'post.serpent.meta': 'Rainha Mãe Serpente | Átma Qatarse Institute',
    'post.serpent.description': 'A soberania da mulher e o patriarcado. Uma reflexão de Iyá Ben.',
    'post.serpent.title': 'Rainha Mãe Serpente',
    'post.serpent.subtitle': 'Aquela que se fez plena',
    'post.serpent.excerpt': 'A ideia de uma mulher soberana é difícil para todos compreender, inclusive para a grande maioria das mulheres.',
    'post.serpent.alt': 'Uma mulher com corpo de serpente repousando em um lago sob um arco-íris',
    'post.serpent.body':
      '<h2>A – Aiabá Eyó <em>(Yorubá)</em></h2>' +
      '<p>É um termo dado para Øṣũ. O termo <strong>Aiabá</strong> ou Iabá é dado a Øṣũ por ela estar intimamente ligada à gestação, parto e cuidados com o filho e por ter sido soberana dos ijexás, um subgrupo étnico dos Iorubás e um reino nigeriano.</p>' +
      '<h2>A soberania da mulher e o patriarcado.</h2>' +
      '<p>A ideia de uma mulher soberana é difícil para todos compreender, inclusive para a grande maioria das mulheres. Pois, por toda história humana e pelo menos em quase toda parte do globo, o que vimos no passado e participamos no presente é a atuação esmagadora do homem sobre a mulher em todos os segmentos sociais.</p>' +
      '<p>A primeira menção do uso da pólvora como arma de fogo foi em 1347 na Polônia no Estatuto de Wislica. Este evento marca um início de violência onde a força fisiológica já não teria mais importância para se ganhar uma guerra, e por que isto é importante? Porque quando falamos de opressão, estamos falando de poder. Por vários milênios a força física foi determinante na disputa do poder, e se esta foi uma realidade social, com certeza também foi uma realidade doméstica, dos dias nas cavernas até os dias sem leis e punições ao machismo, o braço mais forte determinou a posição do opressor e do oprimido.</p>' +
      '<p>Fisiologicamente o homem é o mais forte, a menstruação debilita um grande número de mulheres mensalmente, a gravidez limita os afazeres, o parto põe em risco somente a vida da mulher, o tempo de amamentação cabe exclusivamente à mãe e antes dos berçários e creches e da inserção da mão de obra feminina no mercado de trabalho, o marido precisava trabalhar, enquanto a esposa ficava em casa como doméstica. Toda essa realidade perdurou no mundo por <em>MILÊNIOS</em>, e infelizmente ainda perdura até os dias de hoje, ainda que o formato da violência tenha se mudado, não se muda um quadro de horror como esse facilmente.</p>' +
      '<p>A misoginia é apenas um braço do resultado da opressão do mais forte, que se iniciou em tempos remotos através da fisiologia humana. O indivíduo mais forte se juntando a um outro indivíduo forte formando assim, grupo, clãs, vilas, povoados, cidades, nações opressoras. A questão não é se é mulher ou criança, homossexual, transexual, negro, indígena e tantos outros, mas se existe fraqueza, moral da história: oprimir é muito bom e se eu posso, vou fazê-lo, essa é a natureza animal da humanidade.</p>' +
      '<p>Logo, entendamos que se no início dos tempos os indivíduos portadores de vaginas fossem fisiologicamente mais fortes, hoje estaríamos lutando contra o matriarcado, simplesmente porque a loucura humana do sadismo opressor obsessor do macho, não reside em seu pênis, mas em sua mente e exatamente por isso que encontramos tantas mulheres machistas.</p>' +
      '<p>Em uma época em que, para não se engravidar basta engolir uma pílula por dia, sem falar de outros vários métodos, ainda encontramos uma luta para legalizar aborto, ainda encontramos frases como: “Ele a engravidou e depois a abandonou.” Ainda encontramos mães solteiras de sete filhos de pais diferentes.</p>' +
      '<p>Em uma época em que a mulher pode trabalhar e ser independente, ainda que haja injustiças, pois sabemos que há, vemos um número absurdo de mulheres que se casam por dinheiro, que ficam com homens por carros e joias. Como é triste ver mulheres se anulando emocionalmente e sexualmente por causa de namorados ou maridos.</p>' +
      '<p>A soberania da mulher precisa acontecer antes de tudo em sua própria mente, a valorização, o respeito, a confiança em si mesma. Tripé básico para a emancipação e o sagrado feminino. O homem opressor pode roubar os bens materiais ou até mesmo maltratar o corpo, mas a dignidade feminina somente a mulher pode tirar de si mesma.</p>' +
      '<p class="article-signature">Zdá.</p>',

    /* De adjuntora a opositora */
    'post.eve.meta': 'De adjuntora a opositora | Átma Qatarse Institute',
    'post.eve.description': 'Uma releitura de Eva e Adão no jardim e do início de uma disputa de poder.',
    'post.eve.title': 'De adjuntora a opositora',
    'post.eve.themes': 'Fluidez, empoderamento, cooperação, resiliência, praticidade, movimento, rebeldia, empatia, astúcia, fidelidade, insegurança.',
    'post.eve.excerpt': 'A incrível sensação de abrir os olhos pela primeira vez ficou marcada em sua mente, a primeira imagem de seu companheiro não sairia nunca mais da sua memória.',
    'post.eve.alt': 'Uma mulher de vestido de linho segurando um fruto dourado em um jardim ao anoitecer, com um homem se afastando ao fundo',
    'post.eve.body':
      '<p>A incrível sensação de abrir os olhos pela primeira vez ficou marcada em sua mente, a primeira imagem de seu companheiro não sairia nunca mais da sua memória, ele esperava com um sorriso nos lábios e um olhar acolhedor que ela acordasse. Ambos caminhavam juntos pelo jardim e a beleza do local enchia os olhos de alegria.</p>' +
      '<p>Ele ensinou para ela todas as coisas que havia aprendido do próprio Pai, e repetiu o ensino mais importante sobre as duas árvores separadas no jardim.</p>' +
      '<p>– Ele disse que nós podemos comer de todas as árvores, menos desta que está no meio do jardim, porque no dia que comermos, por certo vamos morrer. Ele te criou para que você seja minha companheira, que esteja ao meu lado apoiando no trabalho.</p>' +
      '<p>Nos primeiros meses Adão tratava Eva como a sua amada, cuidando e compartilhando a abundante vida que o jardim lhes proporcionava, mas com o decorrer do tempo ela percebia que seu companheiro se tornava cada vez mais distante e o diálogo se tornava esporádico. A sua opinião perdeu a importância e a sua participação nos trabalhos perdeu o valor. Não lhe era permitida a participação nos encontros com o criador nos finais da tarde e os assuntos destes encontros não eram compartilhados.</p>' +
      '<p>Adão já não vigiava mais o jardim como fazia no início, envolvido em planos e sonhos para o futuro já não percebia o que se passava à sua volta. Em uma noite enquanto Eva caminhava sozinha percebeu a presença de um estranho e se aproximou para conversar. O estranho se mostrou cansado e com sede pedindo um pouco de água, falou um pouco de sua vida e das experiências que acumulou durante a sua jornada, quanto mais íntima a conversa se mostrava mais confiante Eva se sentia para desabafar as suas frustrações.</p>' +
      '<p>– Pelo que eu entendi, disse o estrangeiro, você foi criada para preencher um vazio de solidão de seu marido, o seu propósito é servir e você sempre estará à sua sombra, o seu companheiro é como um Deus e é por isto que somente ele conversa com o criador enquanto você se ocupa das tarefas que cabem à submissão de uma mulher, a sua vida não possui um valor próprio e será assim para todo sempre.</p>' +
      '<p>Quando a noite avançou, ela tentou contar ao seu companheiro sobre o que acontecera, mas como sempre ele não estava disposto a ouvi-la, a sua alma se inquietou e o seu semblante caiu, já não se sentia mais a companheira amada, e sim, uma serva para atender aos caprichos de seu rei.</p>' +
      '<p>Na noite de sábado enquanto Adão descansava Eva avistou de longe o estrangeiro novamente a passear pelo jardim, desta vez se encontrava próximo à árvore do conhecimento do bem e do mal.</p>' +
      '<p>– Senti a sua falta, a ausência de um amigo que consegue me compreender. Refleti por dias sobre as suas palavras e percebo a verdade em cada uma delas.</p>' +
      '<p>– Você não precisa suportar este fardo por toda a eternidade, vê este fruto, ele tem o poder de abrir os seus olhos para que enxergue o seu verdadeiro papel na vida. Para que estar sempre à margem da importância humana se você pode ser o centro? A sua liberdade está ao alcance da sua mão.</p>' +
      '<p>– Mas o Criador disse que se comermos desse fruto morreremos.</p>' +
      '<p>– Certamente não é assim, Ele não quer que você coma, pois sabe que no dia que comeres deste fruto os seus olhos se abrirão e você será como os deuses conhecendo o bem e o mal.</p>' +
      '<p>E Eva, vendo que o fruto era bom, o tomou e o comeu e ao fazê-lo tornou-se como os deuses conhecendo o bem e o mal. Neste momento não se viu mais como um presente para o homem, mas como uma pessoa de igual valor e de real importância. Percebendo, porém, que não poderia mais ser a companheira de Adão que ainda permanecia na ignorância, levou o fruto até ele para que também o comesse.</p>' +
      '<p>Quando Adão soube que Eva havia comido do fruto e que já não mais poderia ser o seu companheiro, lembrando-se da solidão que havia vivido como o único de sua espécie, percebeu naquele momento que deveria escolher entre estar ao lado de sua companheira ou estar na presença de seu criador. Tomou do fruto e o comeu, pois a morte lhe parecia mais agradável do que a dor da solidão. Ao fazê-lo os olhos de ambos foram abertos, em suas mentes o mal e o prazer se amalgamaram, perceberam que estavam nus e sentiram vergonha, ouvindo os passos do criador que se aproximava pelo jardim sentiram culpa e ao imaginar a consequência de seus erros sentiram medo.</p>' +
      '<p>A partir desse momento uma relação de domínio se estabelecia entre ambos que se estenderia por milênios pela disputa de poder. A força e a astúcia em um jogo de prazer e dor, vida e morte.</p>' +
      '<p>Então disse Deus aos outros Deuses:</p>' +
      '<blockquote>– Eis que o homem agora é como um de nós, conhecedor do bem e do mal.</blockquote>'
  };

  $.extend(texts.en, en);
  $.extend(texts.pt, pt);
})(window.AQ_I18N);
