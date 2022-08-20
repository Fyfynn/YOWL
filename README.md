
![Logo](https://cdn.discordapp.com/attachments/983996946630991902/1005101311097839656/YOWL.png)


# YOWL Project

This is a web-app project as part of our studies in Epitech  

It's a web application that will allow users to comment on all of the music content found on the
Internet.  
Each comment will be shared by the entire YOWL user community.   
The user can create their post and add comments to all posts on YOWL only if they're register.  
The posts can have a title, a link of the subject content, an opinion, and an image. 

If a user wants to change his username or password, there is a profile page with his information for this operation.

**YOWL** is accessible from the age of 13 to 35.





## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
``` bash
# install dependencies for API
npm install

# serve with hot reload at localhost:3000
npm start
```
Don't forget to download our images and change paths ! ^^
## Screenshots

![App Screenshot](https://cdn.discordapp.com/attachments/486666780962717727/1007418370817261659/unknown.png)
![App Screenshot](https://cdn.discordapp.com/attachments/486666780962717727/1007418212876566608/unknown.png)
![App Screenshot](https://cdn.discordapp.com/attachments/486666780962717727/1007419674255958046/unknown.png)


## API WordPress Quick References

#### Get all items

```http
  GET /api/
  POST /dropzone
  GET /search
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get and Post all categories / posts / comments

```http
  GET /api/posts
  GET /api/users
  GET /api/comments
```
```http
  POST /api/post/add
  POST /api/user/add
  POST /api/comment/add
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get posts of a category or get comments of a post

```http
  GET /posts/:{id
  GET /user/:id 
  GET /comments/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


## Tech Uses

**Front-end/Client:** Vue.js 

**Back-end/Server:** Node.js, Express, REST API MongoDB, MongoDB Compass


## Optimizations

The optimizations we have to do later :  
• Add top page and recent page  
• Comments of comments  
• Edit Post & Delete Post  
• Admin interface  
• Edit Comment & Delete Comment  
• Set up automated tests  
• Docker the project
## Authors

- [@Viktory4](https://github.com/Viktory4)
- [@Cabezas Angie](https://github.com/angiecabezasepitech)
- [@Hacquard Delphine](https://github.com/Fyfynn)
- [@Dito Silvio](https://github.com/silvio.dito)

