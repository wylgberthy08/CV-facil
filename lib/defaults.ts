import type { CVData } from "./types";
import { createId } from "./types";

export function createDefaultCV(): CVData {
  return {
    id: createId(),
    name: "Meu Currículo",
    templateId: "classic",
    themeId: "classic-blue",
    updatedAt: new Date().toISOString(),
    photo: "",
    personalInfo: {
      firstName: "Olivia",
      lastName: "Santos",
      headline: "GERENTE DE PROJETOS DE TI",
      summary:
        "Profissional de TI com mais de 8 anos de experiência em gerenciamento de projetos, liderança de equipes multidisciplinares e implementação de soluções tecnológicas. Especialista em metodologias ágeis e gestão de portfólio.",
    },
    contact: {
      address: "Av. Paulista, 1000, São Paulo - SP",
      email: "olivia.santos@email.com",
      phone: "(11) 99999-8888",
      website: "oliviasantos.dev",
    },
    skills: [
      { id: createId(), name: "Gerenciamento de Projetos", level: 5 },
      { id: createId(), name: "Metodologias Ágeis", level: 5 },
      { id: createId(), name: "Liderança de Equipes", level: 4 },
      { id: createId(), name: "Desenvolvimento de Software", level: 4 },
      { id: createId(), name: "Análise de Dados", level: 3 },
    ],
    experience: [
      {
        id: createId(),
        company: "TechSolutions Ltda",
        position: "Gerente de Projetos",
        startDate: "2020-03",
        endDate: "",
        current: true,
        description: "",
        highlights: [
          "Lidero equipe de 15 desenvolvedores na entrega de projetos críticos",
          "Implementei metodologias ágeis, reduzindo prazos de entrega em 30%",
          "Gerenciei orçamento anual de R$ 2M com 95% de taxa de sucesso",
        ],
      },
      {
        id: createId(),
        company: "DataCorp S.A.",
        position: "Analista de Projetos Sênior",
        startDate: "2017-01",
        endDate: "2020-02",
        current: false,
        description: "",
        highlights: [
          "Coordenei migração de sistemas legados para arquitetura em nuvem",
          "Desenvolvi KPIs de desempenho para acompanhamento de projetos",
          "Treinei 15 colaboradores em práticas de gestão ágil",
        ],
      },
    ],
    education: [
      {
        id: createId(),
        institution: "Universidade de São Paulo",
        degree: "Mestrado em Ciência da Computação",
        startDate: "2015-02",
        endDate: "2017-12",
        description: "Pesquisa em Inteligência Artificial aplicada à gestão de projetos",
      },
      {
        id: createId(),
        institution: "Universidade Federal de Minas Gerais",
        degree: "Bacharelado em Ciência da Computação",
        startDate: "2010-02",
        endDate: "2014-12",
        description: "Monografia em Otimização de Processos",
      },
    ],
    languages: [
      { id: createId(), name: "Português", level: "native" },
      { id: createId(), name: "Inglês", level: "fluent" },
      { id: createId(), name: "Espanhol", level: "intermediate" },
    ],
    awards: [
      {
        id: createId(),
        title: "Prêmio Inovação TechSolutions 2023",
        date: "2023-12",
        description: "Reconhecimento pela implementação do sistema de gestão ágil",
      },
      {
        id: createId(),
        title: "Certificação PMP - Project Management Professional",
        date: "2021-06",
        description: "Certificação internacional em gerenciamento de projetos",
      },
    ],
  };
}
