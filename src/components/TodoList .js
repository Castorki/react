import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


function ToDoList() {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");
    const [tasksArray, setTasksArray] = React.useState([]);

    React.useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            try {
                const parsedTasks = JSON.parse(savedTasks);
                setTasksArray(parsedTasks);
            } catch (e) {
                console.error("Ошибка при чтении задач из localStorage", e);
            }
        }
    }, []);

    const addTask = () => {
        if (inputValue.trim() === "") return;
        const newTasksArray = [...tasksArray, inputValue];
        setTasksArray(newTasksArray);
        localStorage.setItem('tasks', JSON.stringify(newTasksArray));
        setInputValue("");
    };

    const deleteTask = (taskId) => {

        const newTasksArray = [
            ...tasksArray.slice(0, taskId),
            ...tasksArray.slice(taskId + 1)
        ];
        setTasksArray(newTasksArray);
        localStorage.setItem('tasks', JSON.stringify(newTasksArray));
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };



    return (
        <div>
            <div className='task_fields'>
                <TextField
                    value={inputValue}
                    onChange={handleInputChange}
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined" />
                <Button onClick={addTask} variant="contained" color="success">
                    Добавить задачу
                </Button>
            </div>
            <div id='tasks'>
                <List dense={dense}>
                    {tasksArray.map((value, index) =>
                        <ListItem key={index} id={index}
                            secondaryAction={
                                <IconButton onClick={() => deleteTask(index)} edge="end" aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            }
                        >
                            <ListItemText
                                primary={`${index + 1}. ${value}`}
                                secondary={secondary ? 'Secondary text' : null}
                            />
                        </ListItem>
                    )}
                </List>
            </div>
        </div>
    );
}

export default ToDoList;