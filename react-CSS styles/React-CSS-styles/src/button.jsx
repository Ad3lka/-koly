

function Button() {
    const styles = {
       
            backgroundColor: 'hsl(210, 100%, 50%)',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        
    }
    // Using CSS modules

    return (<button style={styles}>Click me</button>);
}
export default Button;