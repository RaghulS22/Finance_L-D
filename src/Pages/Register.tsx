import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <h2>Register Page</h2>
      <p>New client / admin registration form will come here.</p>

      <button onClick={() => navigate("/")}>
        Back to Login
      </button>
    </div>
  );
}
