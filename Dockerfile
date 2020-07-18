FROM node:alpine
COPY . /src
WORKDIR /src
RUN npm install --production
EXPOSE 5000
CMD ["npm","start"] 