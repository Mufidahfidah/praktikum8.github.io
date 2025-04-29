const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Tambah tugas baru
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  } else {
    alert("Tugas tidak boleh kosong!");
  }
});

// Fungsi tambah tugas
function addTask(text) {
  const li = document.createElement('li');
  li.className = 'task-item';
  
  li.innerHTML = `
    <span class="task-text">${text}</span>
    <div class="task-buttons">
      <button class="complete-btn">✔️</button>
      <button class="delete-btn">🗑️</button>
    </div>
  `;

  // Tombol selesai
  li.querySelector('.complete-btn').addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Tombol hapus
  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
  });

  taskList.appendChild(li);
}

// Enter key untuk tambah tugas
taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTaskBtn.click();
  }
});
