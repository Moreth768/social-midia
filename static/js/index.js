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
        { item: "Projeto Plantando o Futuro: Independente do resultado eleitoral, me comprometo a Plantar Uma Árvore Por Cada Voto Recebido;" },
        { item: "Educação Ambiental no currículo básico das escolas municipais;"},
        { item: "IPTU Verde (incentivo para imóveis que utilizarem sistemas sustentáveis, como: reaproveitamento de água, energia solar, árvore, etc..) "}
      ], 
      turismo: [
        { item: "Buscar recursos para incentivar e desenvolver o turismo ecológico, rural e de aventura diante das inúmeras potencialidades do nosso município."}
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
