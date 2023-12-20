const list = document.querySelector('.list');

function getTask() {
    list.innerHTML = localStorage.getItem("data");
}
window.onload = function () {
    getTask();
    // const list = document.querySelector('.list');

    // Event listener for the "unchecked" and "remove" images
    list.addEventListener('click', function (event) {
        const target = event.target;
        const listItem = target.closest('li');

        if (target.id === 'remove') {
            // Remove the clicked list item
            listItem.remove();
        }
        if (target.id === 'unchecked') {
            const para = listItem.querySelector('p');
            para.classList.toggle('completed');
            if(para.classList.contains('completed')){
                target.src="checked.png"
            }
            else{
                target.src="unchecked.png"
            }
        }
        saveData()
        
    });

    // Function to add a new task to the list
    const addTask = function () {
        const input = document.querySelector('.input');
        const listItem = document.createElement('li');
        if(input.value.trim()=="") {alert("write some task first.");
        saveData();
    }
        else{
        listItem.innerHTML = `
            <div class="item1">
                <img id="unchecked" src="unchecked.png" alt="">
                <p>${input.value}</p>
            </div>
            <div><img id="remove" src="remove.png" alt=""></div>
        `;
        list.appendChild(listItem);
        input.value = ''; // Clear the input field
        // console.log("sumit")
        }
        saveData();
    };

    const addTaskButton = document.querySelector('.add-task');
    addTaskButton.addEventListener('click', addTask);
}

function saveData(){
    localStorage.setItem("data", list.innerHTML)
}
getTask()