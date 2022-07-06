 

type HorizontalPosition="top"| "horizontal"|"center";

type VerticalPosition="right"|"left"|"center";

type PositionProps={
   position:
   | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
   | 'center'
}

 export const ToastPosition=({position}:PositionProps)=>{
    return <div>{position}</div>
 }