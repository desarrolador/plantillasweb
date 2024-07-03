import react, {useState} from 'react';
import axios from 'axios';

function Login({setAuth}) {
    const [email,setEmail] = useState ('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', {email,password});
            setAuth(response.data.token);

        } catch (error) {
            console.error('login eroor', error);
        }
};

return (
    <form onSubmit={handleSubmit}>
    <input
    type = "email"
    value = {email}
    onChange = {(e) => setEmail(e.target.value)}
    placeholder="Email"
    />
     <input
     type="password"
     value={password}
     onChange={(e) => setPassword(e.target.value)}
     placeholder="password"
     />
    <button type="submit" >login</button>
</form> 
);

}

export default Login;