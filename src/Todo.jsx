// export default function Todo ({task}){
//     return (
//         <li>Task :{task} </li>
//     )
// }
// export default function Todo ({task, isDone}){
//     if(isDone === true){
//         return (
//             <li>Task finished :{task} </li>
//         )
//     }
//     else{
//         return(
//             <li>Work on : {task} </li>
//         )
//     }
// }
export default function Todo ({task, isDone}){
    let listItem ;
    if(isDone){
    
      listItem =  <li>Task finished :{task} </li>
       
    }
    else{

         listItem =   <li>Work on : {task} </li>
        
    }
    return listItem ;
}

// export default function Todo ({task, isDone}){
//     return (
//         <li> {isDone ? 'finished' : 'work on.......'} :{task} </li>
//     )
// }

// export default function Todo ({task , isDone}){
//     return (
//         <li> {task} {isDone && ': Done'} </li>
//     )
// }

// export default function Todo ({task , isDone}){
//     return (
//         <li> {task} {isDone || ': Do it'} </li>
//     )
// }
// export default function Todo ({task , isDone}){
//    if(isDone){
//     return null
//    }
//    return <li> {task} </li>
// }