
var todos = [];

while (input != "quit"){
	var input = prompt("What would you like to do?");
	if (input === "list"){
		listTodos();
	}
	else if (input === "new") {
		addTodo();
	}
	else if (input === "delete"){
		deleteTodo();
	}
	else{
		console.log("OK YOU QUIT THE APP");
	}
}
function listTodos(){
	console.log(todos);
	todos.forEach(function(todo, index){
		console.log("*********");
		console.log(index + ": " +todo);
		console.log("*********");
	});
}

function addTodo(){
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
}

function deleteTodo(){
	var index_to_delete = prompt("What item would you like to delete?");
	todos.splice(index_to_delete, 1);	
}
