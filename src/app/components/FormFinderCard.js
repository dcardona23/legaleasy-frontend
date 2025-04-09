"use client";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/CardHeader';
import CardBody from 'react-bootstrap/CardBody';
import Form from 'react-bootstrap/Form';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl'

import { postOpenAI } from '@/openAiApiCalls';

function FormFinderCard() {

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await postOpenAI()

      if (!response.success) {
        setError(response.message)
        return
      }

      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      handleClose();

    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <Card className="text-center">
      <CardHeader>Form Finder</CardHeader>
      <CardBody>
        <Form className= "mb-10" onSubmit={handleSubmit}>
            <FormLabel className="text-4xl">Form Finder</FormLabel>
            <FormControl as="textarea" placeholder="Describe your issue, and we&apos;ll help you find the right form for your situation." rows={10} />
        </Form>
        <Button 
          variant="success" 
          type="submit"
        >
          Submit
        </Button>
      </CardBody>
    </Card>
  );
}

export default FormFinderCard;