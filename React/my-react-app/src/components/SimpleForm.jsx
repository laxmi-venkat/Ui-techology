import { useState } from "react";

function SimpleForm() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Form submitted with name: ${name}`);
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    style={styles.input}
                />
                <br />
                <button type="submit" style={styles.button}>Submit</button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
        backgroundColor: "#f0f0f0",
        paddingTop: "50px",
    },
    form: {
        textAlign: "center",
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "5px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    input: {
        padding: "10px",
        fontSize: "16px",
        marginBottom: "10px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        width: "200px",
    },
    button: {
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        backgroundColor: "#4CAF50",
        color: "white",
        cursor: "pointer",
        marginTop: "20px",
    },
};

export default SimpleForm;
