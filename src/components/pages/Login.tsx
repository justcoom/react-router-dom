export const Login = () => {
    return (
        <form style={{display: "flex", flexDirection: "column", margin: '100px auto 0', width: '250px'}}>
            Log in
            <input type="text" placeholder={'login'}/>
            <input type="text" placeholder={'password'}/>
        </form>
    );
};