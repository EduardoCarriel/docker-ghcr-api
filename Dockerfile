# Estágio de Build
FROM node:20-alpine

# Diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia apenas os arquivos de dependência primeiro (Cache Layering)
COPY package*.json ./

# Instala dependências (npm ci é mais rápido e seguro para CI)
# --only=production pula devDependencies
RUN npm ci --only=production

# Copia o restante do código
COPY . .

# Define o usuário 'node' (segurança: não rodar como root)
USER node

# Expõe a porta
EXPOSE 3000

# Comando de inicialização
CMD ["npm", "start"]