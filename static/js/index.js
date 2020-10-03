const base = { 
  data() {
    return {
      title: 'Nome',
      subtitle: 'Sobrenome'
    }
  }
}

Vue.createApp(base).mount('#base')


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
