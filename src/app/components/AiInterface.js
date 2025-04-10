"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

import { postOpenAI } from "@/openAiApiCalls";

function AiInterface() {
  const [formInput, setFormInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await postOpenAI({ formInput });
      if (!result.success) {
        setError(result.message);
        return;
      }

      setResponse(result.data);
      console.log(response)
      setFormInput("");
    } catch (error) {
      setError(error.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-2" style={{ backgroundColor: "white" }}>
      <Container fluid className="p-0">
        {!response && (
          <Card className="text-center border-0">
            <div style={{ position: "relative" }}>
              <Card.Img
                variant="top"
                src="assets/help.jpg"
                style={{
                  objectFit: "cover",
                  height: "300px",
                  width: "100%",
                }}
                alt="Laptop covered with blue sticky notes, including one that says HELP"
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h1 className="display-4 fw-bold text-white mb-0">
                  Form Finder
                </h1>
              </div>
            </div>

            <CardBody className="px-4">
              {error && <Alert variant="danger">{error}</Alert>}
              {response && <Alert variant="success">Request received!</Alert>}

              <Form className="mt-4" onSubmit={handleSubmit}>
                <FormControl
                  as="textarea"
                  placeholder="Describe your issue, and we'll help you find the right form for your situation."
                  rows={10}
                  value={formInput}
                  onChange={(event) => setFormInput(event.target.value)}
                  className="mb-3"
                />
                <Button
                  variant="success"
                  type="submit"
                  disabled={loading || !formInput.trim()}
                  size="lg"
                >
                  {loading ? "Processing..." : "Submit"}
                </Button>
              </Form>
            </CardBody>
          </Card>
        )}

        {response && (
          <Card className="text-center border-0">
            <div style={{ position: "relative" }}>
              <Card.Img
                variant="top"
                src="assets/help.jpg"
                style={{
                  objectFit: "cover",
                  height: "300px",
                  width: "100%",
                }}
                alt="Laptop covered with blue sticky notes, including one that says HELP"
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h1 className="display-4 fw-bold text-white mb-0">
                  Your Results
                </h1>
              </div>
            </div>

            <CardBody className="px-4">
              <div dangerouslySetInnerHTML={{ __html: response }} id="aiResponse" className="mt-4">
              </div>
              <p>Most forms can be found on the <a href="https://www.coloradojudicial.gov/self-help-forms">Colorado Judicial Branch Self Help Website</a></p>
              <Form className="mt-4" onSubmit={handleSubmit}>
                <FormControl
                  as="textarea"
                  placeholder="Please provide any additional information requested."
                  rows={10}
                  value={formInput}
                  onChange={(event) => setFormInput(event.target.value)}
                  className="mb-3"
                />
                <Button
                  variant="success"
                  type="submit"
                  disabled={loading || !formInput.trim()}
                  size="lg"
                >
                  {loading ? "Processing..." : "Submit"}
                </Button>
              </Form>
            </CardBody>
          </Card>
        )}
      </Container>
    </div>
  );
}

export default AiInterface;
