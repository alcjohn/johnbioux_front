import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/layout/Layout";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
interface contactProps {}

const contact: React.FC<contactProps> = ({}) => {
  const { register, handleSubmit } = useForm();
  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    executeRecaptcha().then(console.log);
  }, []);
  const onSubmit = async (data: any) => {
    var form_data = new FormData();

    for (const key in data) {
      form_data.append(key, data[key]);
    }
    // form_data.append("g-recaptcha-response",);
    const res = await fetch(
      "https://admin.johnbioux.fr/wp-json/contact-form-7/v1/contact-forms/86/feedback",
      {
        method: "POST",
        body: form_data,
      }
    );

    const json = await res.json();

    console.log(json);
  };
  return (
    <Layout>
      <Head>
        <script src="https://www.google.com/recaptcha/api.js?render=6LfVcCgaAAAAAFgnzog6bUKTRu2UV0nrBRfeuUhM"></script>
      </Head>
      <Container>
        <Heading
          as="h1"
          mt={12}
          mb={4}
          fontSize="4xl"
          color="primary.500"
          fontFamily="roboto"
        >
          Contactez-moi
        </Heading>
        <Text my={4}>Une idée? Un projet ? N'hésitez pas à me contacter.</Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mb={2}>
            <FormLabel>Votre nom</FormLabel>
            <Input name="your_name" required ref={register} />
          </FormControl>
          <FormControl mb={2}>
            <FormLabel>Votre adresse de messagerie</FormLabel>
            <Input type="email" name="your_email" required ref={register} />
          </FormControl>
          <FormControl mb={2}>
            <FormLabel>Objet</FormLabel>
            <Input name="your_subject" required ref={register} />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Votre message</FormLabel>
            <Textarea name="your_message" ref={register} />
          </FormControl>
          <Button textTransform="uppercase" type="submit">
            Envoyer
          </Button>
        </form>
      </Container>
    </Layout>
  );
};
export default contact;
