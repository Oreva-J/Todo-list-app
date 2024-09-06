
export default function Footer({count, totalTodos}){

    return(
        <footer className="fixed bottom-0 bg-yellow-600 w-full h-28 text-xl text-black">
            <div className="text-center font-bold w-full mt-4 ">Completed Todos: {count}</div>
            <div className="text-center font-bold w-full mt-5 ">Total Todos: {totalTodos} </div>
        </footer>
    )
}