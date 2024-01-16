const User = ()=> {
    const user = {
        name: 'Jonh Doe',
        email: 'email@email.com'
    }

    return (
        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    )
}

export { User }