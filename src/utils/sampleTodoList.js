import shortid from 'shortid';

// sample todoList
// prettier-ignore
const sampleTasks = ["Daily web development", "Get groceries for dinner", "Home exercise at 6pm", "Call Daniel for meeting", "House cleaning", "Tennis practice", "Do lundary", "Email Noah for update", "Finish monthly growth report", "Send in cacenllation letter", "Figure out vacation destination", "Fill in scholarship application" ]
const todoTypes = ['important', 'work', 'study', 'other'];
const d = new Date();

export default sampleTasks.map((task, index) => {
  let randomDate;
  let randomType;
  if (index < 2) {
    randomDate = d.getDate();
    randomType = todoTypes[0];
  } else {
    randomDate = d.getDate() + Math.floor(Math.random() * 7);
    randomType = todoTypes[Math.floor(Math.random() * 4)];
  }

  return {
    id: shortid.generate(),
    task: task,
    timestamp: d.getTime(),
    type: randomType,
    completed: Math.random() >= 0.5,
    dateInfo: {
      year: d.getFullYear(),
      month: d.getMonth(),
      date: randomDate,
      day: new Date(d.getFullYear(), d.getMonth(), randomDate).toLocaleString('default', { weekday: 'long' }),
      hour: d.getHours(),
      minute: d.getMinutes()
    }
  };
});
