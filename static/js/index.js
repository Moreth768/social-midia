const base = { 
  data() {
    return {
      title: 'Nome',
      subtitle: 'Sobrenome'
    }
  }
}

Vue.createApp(base).mount('#base')


const biografia = {
  data() {
    return {
      p1 : "Nascido em São Gonçalo no dia 14 de Outubro de 1994, vim pra São Fidélis no dia 16 de fevereiro de 1999, sou eternamente grato aos meus pais por isso, já que não combinaria comigo ser de outra cidade, levo no peito o orgulho de ser daqui.",
      p2 : "Cria da Nova Divinéia, estudei na Creche Escola Dona Zizi e no Colégio Estadual Elvídio Costa, hoje sou aluno do IFF no curso de Engenharia Ambiental, escolhi essa área por sonhar com uma cidade mais sustentável e por querer um futuro melhor para as próximas gerações.",
      p3 : "Desde criança sonhava em seguir a carreira política, porém não basta apenas vontade, tem que se qualificar, em 2019 após um processo seletivo muito criterioso com mais de 31 mil pessoas de todo o país, fui selecionado para representar São Fidélis no RenovaBR a primeira e maior escola de formação política do país.",
      p4 : "Através do RenovaBr vivi a experiência mais impactante da minha vida. Foi proposto que cada aluno fizesse uma ação de mobilização na sua cidade, a minha proposta foi uma ação pra revitalizar o Cruzeiro, o que antes era um lugar sem luz, sem vida e completamente abandonado, hoje é um novo ponto turístico da cidade, é certamente a primeira de muitas colaborações que temos e queremos dar pra São Fidélis.",
      p5 : "É pra isso, preciso do seu voto, número 55123, junto com Higor Porto 20 para vereador, o futuro se faz agora!"
    }
  }
}

Vue.createApp(biografia).mount('#biografia')


const plano_governo = {
  data() {
    return {
      meio_ambiente: [
        { item: "Projeto Plantando o Futuro: Independente do resultado eleitoral, me comprometo a Plantar uma Árvore Por Cada Voto Recebido;" },
        { item: "Educação Ambiental no currículo básico das escolas municipais;"},
        { item: "IPTU Verde (incentivo para imóveis que utilizarem sistemas sustentáveis, como: reaproveitamento de água, energia solar, árvore, etc..) "}
      ], 
      turismo: [
        { item: "Buscar recursos para incentivar e desenvolver o turismo ecológico, rural e de aventura diante das inúmeras potencialidades do nosso município."},
        { item: "Propor a sinalização de trilhas, serras e cachoeiras, além da revitalização de pontos turísticos da cidade, como fizemos com o Cruzeiro."},
        { item: "Elaboração do Plano Municipal de Turismo, em parceria com os representantes do setor e com toda a sociedade civil."}
      ], 
      cultura : [
        { item: "Se empenhar e buscar recursos para revitalizar o prédio da Estação Ferroviária  e transformar em uma Estação Cultural."},
        { item: "Oficinas Artísticas nas escolas da rede municipal, afim de valorizar e incentivar os nossos futuros talentos"},
        { item: "Em diálogo com a sociedade civil, acolhimento de propostas que permitam o cuidado com o patrimônio histórico e cultural do município"}
      ],
      comvc : [
        { item: "Aplicativo Nosso Mandato, uma plataforma totalmente nova, onde você poderá notificar problemas, encaminhar sugestões, além de poder votar em todos os projetos que estarão em pauta na Câmara Municipal."},
        { item: "Gabinete Intinerante, percorrer todos os bairros e distritos, ouvindo a população e prestando contas do mandato;"},
        { item: "Criação do Parlamento Juvenil e incentivar a formação cidadã nas escolas."}
      ]
    }
  }
}

Vue.createApp(plano_governo).mount('#plano_governo')


const footer = {
  data() {
    return {
      name: '2020 © Haruno',
      version: 'Version 0.1',
      by: 'Jiongu Softhouse'
    }
  }
}

Vue.createApp(footer).mount('#copyright')
