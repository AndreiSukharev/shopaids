# ShopAid
An app to help you get essentials efficiently and sustainably using collective intelligence

[Server] Python (Flask)

[Client] React

[Database] PostgreSQL

[Deployment] Docker

## Getting Started

#### Install npm
brew install node

#### Install docker

You can use two variants.
The first one:
```
https://docs.docker.com/compose/install/
```
The second one:
```
brew install docker docker-machine docker-compose
docker-machine create --driver virtualbox Shopaids
eval $(docker-machine env Shopaids)
```

## Build and Run

```
git clone https://github.com/AndreiSukharev/shopaids shopaids
cd shopaids
docker-compose up --build
cd client
npm i
npm run start
go to: http://localhost:8080
```

#### Note Docker

Run postgres client:

```
docker exec -it postgres psql matchaDB user
```
Enter in container:
```
docker exec -it flask bash
```
Remove all:
```
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker rmi $(docker images -a -q)
```
