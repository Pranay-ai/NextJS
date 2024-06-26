import React from "react";

export default function Layout({ children, modal }:{children:React.ReactNode,modal:React.ReactNode} ) {
    return (
        <div className="bg-gray-800 h-screen ">
            {children}
            {modal}
        </div>
    );
}  
