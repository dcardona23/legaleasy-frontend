"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/CardHeader";
import CardBody from "react-bootstrap/CardBody";
import Form from "react-bootstrap/Form";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import Alert from "react-bootstrap/Alert";

import { postOpenAI } from "@/openAiApiCalls";

function FormFinderCard() {
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
      setFormInput(""); 
    } catch (error) {
      setError(error.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="text-center">
      <CardHeader>Form Finder</CardHeader>
      <CardBody>
        {error && <Alert variant="danger">{error}</Alert>}
        {response && <Alert variant="success">Form suggestion received!</Alert>}
        
        <Form className="mb-10" onSubmit={handleSubmit}>
          <FormLabel className="text-4xl">Form Finder</FormLabel>
          <FormControl
            as="textarea"
            placeholder="Describe your issue, and we'll help you find the right form for your situation."
            rows={10}
            value={formInput}
            onChange={(event) => setFormInput(event.target.value)}
          />
          <Button 
            variant="success" 
            type="submit" 
            disabled={loading || !formInput.trim()}
            className="mt-3"
          >
            {loading ? "Processing..." : "Submit"}
          </Button>
        </Form>

        {response && (
          <div className="mt-4">
            <h4>Suggested Form</h4>
            <p>{response.suggestion}</p>
          </div>
        )}
      </CardBody>
    </Card>
  );
}

export default FormFinderCard;
