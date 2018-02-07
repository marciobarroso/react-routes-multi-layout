import React from 'react'

const Main = props => {
    return (
        <div className='container'>
            <header>header</header>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Main