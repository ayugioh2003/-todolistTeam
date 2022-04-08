import { v4 as uuidv4 } from "uuid";

export const todos = [
  { id: uuidv4(), title: "test data 1", content: "mock test data" },
];

export default todos;

// 找到資料庫全部資料
export function findMany() {
  return todos;
}

// 新增單筆資料到資料庫
export function insertOne(dataFromController) {
  todos.push({ id: uuidv4(), ...dataFromController });
  return todos;
}

// 更新單筆資料到資料庫
export function updateOne(data, updateIndex) {
  if(data.title !== undefined && data.content !== undefined){
    todos[updateIndex].title= data.title;
    todos[updateIndex].content = data.content;
  }else if( data.title !== undefined){
    todos[updateIndex].title= data.title;
  }else{
    todos[updateIndex].content = data.content;
  }
  return todos;
}

// 刪除單筆資料
export function deleteOne(deleteIndex) {
  todos.splice(deleteIndex, 1);
  return todos;
}

// 刪除多筆資料
export function deleteMany() {
  todos.length = 0;
  return todos;
}
