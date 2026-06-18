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
      firstName: "Seu Nome",
      lastName: "Seu Sobrenome",
      headline: "AUXILIAR ADMINISTRATIVO",
      summary:
        "Profissional com experiência em rotinas administrativas, controle de documentos, organização de agenda e atendimento a clientes internos e externos. Habilidade em gestão de arquivos, elaboração de planilhas e suporte às áreas operacionais. Comprometido com prazos, organização e qualidade no apoio às equipes.",
    },
    contact: {
      address: "",
      email: "",
      phone: "",
      website: "",
    },
    skills: [
      { id: createId(), name: "Pacote Office", level: 5 },
      { id: createId(), name: "Organização e controle de documentos", level: 5 },
      { id: createId(), name: "Atendimento e comunicação", level: 4 },
      { id: createId(), name: "Redação empresarial", level: 4 },
      { id: createId(), name: "Gestão de agenda e compromissos", level: 3 },
    ],
    experience: [
      {
        id: createId(),
        company: "Empresa Atual",
        position: "Auxiliar Administrativo",
        startDate: "2022-03",
        endDate: "",
        current: true,
        description: "",
        highlights: [
          "Apoio nas rotinas administrativas e no controle de documentos do setor",
          "Organização de agendas, reuniões e compromissos da equipe",
          "Lançamento e controle de dados em planilhas e sistemas internos",
        ],
      },
      {
        id: createId(),
        company: "Empresa Anterior",
        position: "Assistente Administrativo",
        startDate: "2020-02",
        endDate: "2022-02",
        current: false,
        description: "",
        highlights: [
          "Atendimento a clientes e fornecedores por telefone, e-mail e presencial",
          "Arquivamento e organização de documentos físicos e digitais",
          "Apoio no controle de estoque e no fluxo de compras do setor",
        ],
      },
    ],
    education: [
      {
        id: createId(),
        institution: "Instituição de Ensino",
        degree: "Curso Técnico em Administração",
        startDate: "2019-02",
        endDate: "2020-12",
        description: "Formação técnica com foco em rotinas administrativas e gestão de escritório",
      },
      {
        id: createId(),
        institution: "Escola de Ensino Médio",
        degree: "Ensino Médio Completo",
        startDate: "2016-02",
        endDate: "2018-12",
        description: "",
      },
    ],
    languages: [],
    awards: [
      {
        id: createId(),
        title: "Curso de Excel Avançado",
        date: "2023-08",
        description: "Capacitação em fórmulas, tabelas dinâmicas e dashboards",
      },
      {
        id: createId(),
        title: "Reconhecimento por Organização de Processos",
        date: "2022-11",
        description: "Destaque pela reorganização do arquivo e fluxo documental do setor",
      },
    ],
  };
}
