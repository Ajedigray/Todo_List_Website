
var todos = [];

while (input != "quit"){
	var input = prompt("What would you like to do?");
	if (input === "list"){
		console.log(todos);
		todos.forEach(function(todo, index){
			console.log("*********");
			console.log(index + ": " +todo);
			console.log("*********");
		});
	}
	else if (input === "new") {
		var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
	}
	else if (input === "delete"){
		var index_to_delete = prompt("What item would you like to delete?");
		todos.splice(index_to_delete, 1);
	}
}
console.log("OK YOU QUIT THE APP");
	
