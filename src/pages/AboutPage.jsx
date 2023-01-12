import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a React app to leave feedback for a product or service</p>
      </div>

      <p>
        <Link to={"/"}>Back to home</Link>
      </p>
    </Card>
  );
}

export default AboutPage;
