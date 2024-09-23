declare type Tecnologia = {
  img: string
  nome: string
}

declare type Habilidade = {
  title: string
  tecnologias: Tecnologia[]
}

declare type Projeto = {
  img: string
  Descrição: string
  LinkGitHub: string
  LinkVercel: string
  tecnologias: Tecnologia[]
}