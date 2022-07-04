type ReactNodeProps={
    children:React.ReactNode
}

export const ReactNode=({children}:ReactNodeProps)=>{
    return <div>
        {children}
    </div>
}