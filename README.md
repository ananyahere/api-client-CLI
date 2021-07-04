This is a terminal based Api client program which makes the process of making http request to server easier by providing an option to make use of terminal to do that.

# Command for POST
 - node app.js post --method="post" --url="https://jsonplaceholder.typicode.com/posts" --data.title="new-title" --data.body="new-body"
# Command for PUT
 - node app.js put --method="put" --url="https://jsonplaceholder.typicode.com/posts/1" --data.title="new-title" --data.body="new-body"
# Command for DELETE
 - node app.js delete  --method="delete" --url="https://jsonplaceholder.typicode.com/posts/1"
# Command for PATCH
 - node app.js patch --method="patch" --url="https://jsonplaceholder.typicode.com/posts/1" --data.title="new-title" --data.body="new-body"
# Command for GET
 - node app.js get --method="get" --url="https://jsonplaceholder.typicode.com/posts/1" --header.Authorization=1234
# Command to list all request
 - node app.js list-all
# Command to list 
 - node app.js list --filter="post"
# To cutomize header 
 - --header.Authorization=1234
# To customize request body
 - --data.title="new-title" --data.body="new-body"
 Note: above commands uses JSONplaceholder
