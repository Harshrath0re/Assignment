import "./App.css";
import "./assets/styles.css";

import {
  useState
} from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TaskEdit from "./components/TaskEdit";

function App() {
  const [tasks, setTasks] = useState([{
      desc: "Complete the Simplyfi Assignment",
      id: 1,
      date: "2023-09-09 13:14",
      complete: false,
    },
    {
      desc: "Task 2",
      id: 2,
      date: "2023-09-09 05:20",
      complete: false,
    },
  ]);

  const onTglStatus = (task) => {
    console.log("completing task");
    setTasks(
      tasks.map((chkTask) => {
        chkTask.complete =
          task.id === chkTask.id ? !chkTask.complete : chkTask.complete;
        return chkTask;
      })
    );
  };

  const [showTaskEdit, setShowTaskEdit] = useState(false);

  const onSaveTask = ({
    desc,
    date
  }) => {
    console.log("saving tasks");
    setTasks([{
        desc: desc,
        date: date,
        id: Date.now(),
        complete: false
      },
      ...tasks,
    ]);
  };

  return ( <
    div className = "App" >
    <
    Header > < /Header>

    <
    div className = "container" >
    <
    div className = "col-12 text-right" >
    <
    button className = "button outline"
    onClick = {
      () => setShowTaskEdit(!showTaskEdit)
    } > {
      !showTaskEdit && "New"
    } {
      showTaskEdit && "➖"
    } <
    /button> <
    /div> {
      showTaskEdit && < TaskEdit task = {
        {}
      }
      onSaveTask = {
        onSaveTask
      }
      />} <
      Tasks tasks = {
        tasks
      }
      onTglStatus = {
          onTglStatus
        } > < /Tasks> <
        /div> <
        /div>
    );
  }

  export default App;