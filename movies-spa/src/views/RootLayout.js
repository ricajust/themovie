import { Outlet } from "react-router-dom"

export function RootLayout() {
    return 
    <> //Só pode ter um único elemento raiz, usamos o fragment para adicionar mais de um elemento
        <Header />
        <Outlet />
    </>
}