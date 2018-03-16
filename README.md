Simple example using the GraphQL (a query language for an API). In this example I am using with Node.js + Express.js, and a fake data in a json file

Node + Express + Nodemon + Babel + GraphQL + DataLoader

---

## Requirements

* [Yarn](https://yarnpkg.com/en/docs/install)

* [Node.js](https://nodejs.org)

## How to install

```
git clone https://github.com/ricardocanelas/graphql-example.git
cd graphql-example
```
```
yarn install 
```

## How to start the server

```
yarn start
```

## Usage

* After you start the server
* And then browse to http://localhost:5000/. 
* typing in the input 

```
{
  person(id: "1") {
    firstName
    lastName
    country
  }
}
```

You can change that.

More examples:

```
{
  person(id: "7") {
    firstName
    country
    friends {
      firstName
      lastName
      country
    }
  }
}
```

```
{
  person(id: "3") {
    firstName
    country
    friends {
      firstName
      lastName
      country
      friends {
          firstName
          friends {
              country
          }
      }
    }
  }
}
```

## More about the GraphQL

GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.

[http://graphql.org/](http://graphql.org/)

