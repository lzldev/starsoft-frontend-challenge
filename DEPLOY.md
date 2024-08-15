# DEPLOY

# Vercel:

1. Adicione o repositorio como Projeto.
1. Adicione a `NEXT_PUBLIC_API` ao environment.

Deploy esta pronto.

# Compose:

1. Faça um fork do repositório no github.
1. Configure os Secrets do repositório com as seguintes valores:

---

`DOCKERHUB_ORG` -> Organização do Dockerhub\
`DOCKERHUB_REPO` -> Repositório do Dockerhub\
`DOCKERHUB_USERNAME` -> Login da conta fará o push da imagem\
`DOCKERHUB_TOKEN` -> Token da conta fará o push da imagem\

---

Isso vai configurar a action , agora resta entrar no server onde o deploy
vai ser efetuado e configurar o ambiente.

1. Clone o repositório.
1. Configure o ambiente para ter acesso ao repositório de containers.
1. Execute:

```sh
docker compose up
```

A imagem será mantida atualizada com o container `watchtower`, como configurado no docker compose.
