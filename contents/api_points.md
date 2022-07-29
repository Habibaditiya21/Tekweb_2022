```

<!--  Tabel Users -->

GET: /users

response: [
{
        "id": "",
        "nama": "",
        "motto": "",
        "gambar": ""
},
...
]

GET: /users/[id]

response:{
        "id": "",
        "nama": "",
        "motto": "",
        "gambar": ""
}

POST: /users

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

body:{
         "nama": "",
        "motto": "",
        "gambar": ""
}

response:
true    // if success
false   // if failure


PUT: /users

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

body:{
         "nama": "",
        "motto": "",
        "gambar": ""
}

response:
true    // if success
false   // if failure

DELETE: /articles/[id]

response:
true    // if success
false   // if failure





<!--  Tabel Portofolio -->

GET: /portofolio

response: [
{
        "id": "",
        "teks01": "",
        "teks02": "",
        "teks03": ""
},
...
]

GET: /portofolio/[id]

response:{
         "id": "",
        "teks01": "",
        "teks02": "",
        "teks03": ""
}

POST: /portofolio

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

body:{
        "teks01": "",
        "teks02": "",
        "teks03": ""
}

response:
true    // if success
false   // if failure


PUT: /portofolio

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

body:{
        "teks01": "",
        "teks02": "",
        "teks03": ""
}

response:
true    // if success
false   // if failure


DELETE: /portofolio/[id]

response:
true    // if success
false   // if failure






<!--  Artikel -->

GET: /articles

response: [
{
        "id": "",
        "title": "",
        "author": "",
        "author_id": "",
        "thumbnail": "",
        "markdown": ""
},
...
]

GET: /articles/[id]

response:{
        "id": "",
        "title": "",
        "author": "",
        "author_id": "",
        "thumbnail": "",
        "markdown": """
}

POST: /articles

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

body:{
        "title": "",
        "author": "",
        "author_id": "",
        "thumbnail": "",
        "markdown": ""
}

response:
true    // if success
false   // if failure


PUT: /articles

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

body:{
        "title": "",
        "author": "",
        "author_id": "",
        "thumbnail": "",
        "markdown": ""
}

response:
true    // if success
false   // if failure



DELETE: /articles/[id]

response:
true    // if success
false   // if failure







<!--  Skill -->

GET: /skills

response: [
{
        "id": "",
        "no": "",
        "keahlian": "",
        "skill": "",
},
...
]


GET: /skills/[id]

response:{
        "id": "",
        "no": "",
        "keahlian": "",
        "skill": "",
}


POST: /skills

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}



body:{
        "no": "",
        "keahlian": "",
        "skill": "",
}

response:
true    // if success
false   // if failure



PUT: /skills

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

body:{
        "no": "",
        "keahlian": "",
        "skill": "",
}

response:
true    // if success
false   // if failure



DELETE: /skills/[id]

response:
true    // if success
false   // if failure


```
