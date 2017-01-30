# inventory-manager-demo
A basic inventory manager.


### Requirements
You will need the following tools to develop the project.

1. `nodejs`, of version `v6.9.1` 
2. `npm`, of version `3.10.8`
3. `bower`, of version  `1.8.0`

### Clone the project
```bash
$ git clone git@github.com:cozyazure/inventory-manager-demo.git
$ cd inventory-manager-demo
```
### Install the node_modules
```bash
$ npm install
```
### Install the bower modules
```bash
$ bower install
```


### Run the server in development mode
```bash
$ npm run dev
```

Alternatively, more manual approach:

```bash
$ NODE_ENV=development nodemon bin/www
```

or using plain `node`:

```bash
$ NODE_ENV=development node bin/www
```


Press `ctrl-c` to terminate the server.


### Run the server in Production mode

To run project in **Production** environment with `forever`:

```bash
npm install -g forever
```

Run the server in Production mode.

```bash
$ NODE_ENV=production npm start
```


