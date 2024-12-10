# Lua App: Demonstração de Blue/Green Deployments no Kubernetes

## Descrição
Este projeto demonstra o conceito de *blue/green deployments* utilizando o Kubernetes. A aplicação é simples: uma página web com um fundo colorido e uma imagem da lua. O objetivo é mostrar como atualizar a aplicação sem interromper o serviço, alternando entre duas versões.

## Pré-requisitos
- **Node.js e npm (ou yarn):** Instale a última versão do [Node.js](https://nodejs.org) e npm (ou yarn) no seu sistema.
- **Docker:** Instale o Docker Desktop ou siga as instruções para a sua plataforma no [site oficial do Docker](https://docs.docker.com/engine/install/).
- **kubectl:** Instale o [kubectl](https://kubernetes.io/docs/tasks/tools/), a ferramenta de linha de comando para interagir com o Kubernetes.
- **Cluster Kubernetes:** Pode ser um cluster local (como [minikube](https://minikube.sigs.k8s.io/docs/)) ou em nuvem (como [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine), [Amazon EKS](https://aws.amazon.com/eks/) ou [Azure Kubernetes Service](https://azure.microsoft.com/en-us/services/kubernetes-service/)).

## Instalação

### Clone o repositório
```bash
git clone https://github.com/marconesns/lua-app.git
```

### Navegue para o diretório do projeto
```bash
cd lua-app
```

### Instale as dependências
```bash
npm install
```

---

## Construindo as Imagens Docker

### Para a primeira versão (fundo azul)
```bash
docker build -t lua-app:v1 .
```

### Para a segunda versão (fundo verde)
```bash
docker build -t lua-app:v2 .
```

---

## Deploy no Kubernetes

### Criar um Deployment

#### Para a primeira versão
```bash
kubectl create deployment lua-app --image=lua-app:v1
```

#### Para a segunda versão
```bash
kubectl create deployment lua-app --image=lua-app:v2
```

### Criar um Service
```bash
kubectl expose deployment lua-app --type=ClusterIP --port=80 --target-port=80
```

### Criar um Ingress
Certifique-se de que um controlador de Ingress está instalado no cluster, como o Nginx.

```bash
kubectl apply -f ingress.yaml
```

---

## Realizando o Blue/Green Deployment

1. **Criar um novo Deployment com a nova versão:**
   ```bash
   kubectl apply -f deployment-v2.yaml
   ```
2. **Atualizar o Ingress para apontar para o novo Deployment:**
   Edite o arquivo `ingress.yaml` para redirecionar o tráfego para o novo Deployment.
3. **Monitorar o sistema:**
   Use comandos como `kubectl get pods` e `kubectl logs` para verificar o status dos pods e garantir o funcionamento correto.

---

## Testando a Aplicação
Acesse a URL configurada no seu Ingress para ver a aplicação em funcionamento.

---

## Contribuições
Contribuições são bem-vindas! Para contribuir com este projeto, siga estes passos:

1. Fork este repositório.
2. Crie um novo branch para sua *feature*:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça suas alterações e *commit*:
   ```bash
   git commit -m "Adiciona minha feature"
   ```
4. Envie um *pull request*.
